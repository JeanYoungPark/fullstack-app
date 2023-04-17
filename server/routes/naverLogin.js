const axios = require("axios");

async function getNaverAccessToken(client_id, client_secret, redirect_uri, code, state) {
    try {
        const response = await axios.post(
            "https://nid.naver.com/oauth2.0/token",
            null,
            {
                params: {
                grant_type: "authorization_code",
                client_id: client_id,
                client_secret: client_secret,
                redirect_uri: redirect_uri,
                code: code,
                state: state,
                },
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.error(error);
    }
}

async function getNaverUserProfile(access_token) {
    try {
        const response = await axios.get(
            "https://openapi.naver.com/v1/nid/me", {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getNaverAccessToken,
    getNaverUserProfile,
};
