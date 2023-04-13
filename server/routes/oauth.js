const express = require("express");
const router = express.Router();
const { getAccessToken, getNaverUserProfile } = require("./naverLogin");

const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3000/naver-login";

// 네이버 로그인 버튼
router.get('/naver-login-button', async (req, res) => {
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&state=${state}`;
    res.send(`<a href="${naverLoginUrl}">네이버 로그인</a>`);
});

// 네이버 로그인 Redirect URI로부터 axxess token 받기
router.get('/naver-login', async (req, res) => {
    const { code, state } = req.query;

    // 세션에서 저장된 state와 비교
    if(state !== req.session.naverLoginState){
        return res.status(400).send("잘못된 접근입니다.");
    }

    const access_token = await getAccessToken(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, code);
    const profile = await getNaverUserProfile(access_token);
    console.log(profile);
});

module.exports = router;