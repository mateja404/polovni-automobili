"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

export type Session = {
    user: {
        id: string,
        email: string,
    },
    accessToken: string,
    refreshToken: string
};

const secret_key = "B53rd78EQCVOXHvEtJBBoH22qWF19IWmO5BIpFBlykc=";
const encoded = new TextEncoder().encode(secret_key);

export async function createSession(payload: Session) {
    const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await new SignJWT(payload).setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encoded);
    (await cookies()).set("session", session, {
        httpOnly: true,
        secure: false,
        expires: expiredAt,
        sameSite: "lax",
        path: "/"
    });
}

export async function getSession() {
    const cookie = (await cookies()).get("session")?.value;
    if (!cookie) {
        console.log('No session cookie!');
        return null;
    }

    try {
        const { payload }: any = await jwtVerify(cookie, encoded, {
            algorithms: ["HS256"]
        });
        return payload as Session;
    } catch (error) {
        console.error("JWT VERIFY ERROR:", error);
        console.log("Token:", cookie);
        return null;
    }
}

export async function deleteSession() {
    (await cookies()).delete("session");
}

export async function updateTokens({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) {
    const cookie = (await cookies()).get("session")?.value;
    if (!cookie) return null;

    const { payload } = await jwtVerify<Session>(cookie, encoded);
    if (!payload) throw new Error("Session not found");

    const newPayload: Session = {
        user: {
            ...payload.user
        },
        accessToken,
        refreshToken
    };

    await createSession(newPayload);
}