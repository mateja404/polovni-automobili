import { updateTokens } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { accessToken, refreshToken } = await req.json();
    if (!accessToken || !refreshToken) return new NextResponse("Provide tokens", { status: 401 });

    await updateTokens({ accessToken, refreshToken });

    return new NextResponse("ok", { status: 200 });
};