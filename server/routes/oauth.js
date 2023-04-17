const express = require("express");
const router = express.Router();
const { getNaverAccessToken, getNaverUserProfile } = require("./naverLogin");
const { getKakaoAccessToken, getKakaoUserProfile } = require("./kakaoLogin");

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const NAVER_REDIRECT_URI = "http://localhost:5000/oauth/naver-login";
const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = "http://localhost:5000/oauth/kakao-login";

// 네이버 로그인 url 구하기
router.get("/naver-login-url", async (req, res) => {
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent( NAVER_REDIRECT_URI )}&state=${state}`;

    res.send({ url: naverLoginUrl, naverLoginState: state });
});

// 네이버 로그인 Redirect URI로부터 access token 받기
router.get("/naver-login", async (req, res, next) => {
    try {
        const { code, state } = req.query;
        const access_token = await getNaverAccessToken(NAVER_CLIENT_ID, NAVER_CLIENT_SECRET, NAVER_REDIRECT_URI, code, state);
        const profile = await getNaverUserProfile(access_token);
        res.redirect(`http://localhost:3000`);   
    } catch (error) {
        next(error);
    }
});

// 카카오 로그인 url 구하기
router.get("/kakao-login-url", async(req, res) => {
    const state = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
    res.send({ url: kakaoLoginUrl, kakaoLoginState: state });
});

// 카카오 로그인 Redirect URL로부터 access toekn 받기
router.get("/kakao-login", async(req, res, next)=>{
    try {
        const code = req.query;
        const access_token = await getKakaoAccessToken(KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI, code);
        const profile = await getKakaoUserProfile(access_token);
        res.redirect(`http://localhost:3000`);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
