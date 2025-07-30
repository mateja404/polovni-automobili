import { authFetch } from "./authFetch"

export const getProfile = async () => {
    const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/userinfo`);
    const result = await response?.json();
    return result;
}

export const sendForgotPwEmail = async (email: string) => {
    const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/submitemail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    });

    if (!response?.ok) {
        const errorText = await response?.text();
        throw new Error(`Server error: ${response?.status} - ${errorText}`);
    }

    const result = await response.json();
    return result;
};

export const submitNewPassword = async (newPassword: string) => {
    const response = await authFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/submitnewpassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            newPassword: newPassword
        })
    });

    if (!response?.ok) {
        const errorText = await response?.text();
        throw new Error(`Server error: ${response?.status} - ${errorText}`);
    }

    const result = await response?.json();
    return result;
}