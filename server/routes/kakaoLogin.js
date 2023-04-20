const axios = require("axios");

async function getKakaoAccessToken(client_id, redirect_uri, code, state){
    try {
        const response = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            null,
            {
                params: {
                    grant_type: 'authorization_code',
                    client_id: client_id,
                    redirect_uri: redirect_uri,
                    code: code,
                    state: state
                }
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.error(error);
    }
}

async function getKakaoUserProfile(accessToken){
    try {
        const response = await axios.get(
            "https://kapi.kakao.com/v2/user/me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getKakaoAccessToken,
    getKakaoUserProfile,
};