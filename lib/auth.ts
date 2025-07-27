export const refreshToken = async (oldRefreshToken: string) => {
    try {
        const response = await fetch(`http://localhost:5000/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                refresh: oldRefreshToken
            })
        });

        if (!response.ok) {
            throw new Error("Failed to refresh token");
        }

        const { accessToken, refreshToken } = await response.json();

        const updateResponse = await fetch("http://localhost:3000/api/update", {
            method: "POST",
            body: JSON.stringify({
                accessToken,
                refreshToken
            })
        });

        if (!updateResponse.ok) {
            throw new Error("Failed to update the tokens");
        }

        return accessToken;
    } catch (error) {
        console.log(error);
        return null;
    }
}