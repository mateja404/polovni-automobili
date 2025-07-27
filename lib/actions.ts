import { headers } from "next/headers";
import { authFetch } from "./authFetch"

export const getProfile = async () => {
    const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/userinfo`);
    const result = await response.json();
    return result;
}

export const sendBodyReq = async (email: string) => { // This 'email' parameter should be used
    const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/changepw`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email // Use the 'email' parameter passed to the function
        })
    });

    if (!response.ok) {
        // Ovde možete dobiti tekst greške ako postoji
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return result;
};