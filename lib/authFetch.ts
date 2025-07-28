import { redirect } from "next/navigation";
import { refreshToken } from "./auth";
import { getSession } from "./session";

export interface FetchOptions extends RequestInit {
    headers?: Record<string, string>
}

export const authFetch = async (url: string | URL, options: any = {}) => {
    const session = await getSession();

    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${session?.accessToken}`
    };
    let response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/protected`, options);

    if (response.status === 401) {
        redirect("/login");
        return;
    }

    const newAccessToken = await refreshToken(session?.refreshToken!);

    if (newAccessToken) {
        options.headers.Authorization = `Bearer ${newAccessToken}`;
        response = await fetch(url, options);
    }

    return response;
}