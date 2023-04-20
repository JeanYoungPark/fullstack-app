const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getNaverAccessToken, getNaverUserProfile } = require("./naverLogin");
const { getKakaoAccessToken, getKakaoUserProfile } = require("./kakaoLogin");

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const NAVER_REDIRECT_URI = "http://localhost:5000/oauth/naver-login";
const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = "http://localhost:5000/oauth/kakao-login";

// 네이버 로그인 url 구하기
router.get("/naver-login-url", async (req, res) => {
    const state = uuidv4();
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent( NAVER_REDIRECT_URI )}&state=${state}`;
    res.send({ url: naverLoginUrl });
});

// 네이버 로그인 Redirect URI로부터 access token 받기
router.get("/naver-login", async (req, res, next) => {
    try {
        const { code, state } = req.query;
        const access_token = await getNaverAccessToken(NAVER_CLIENT_ID, NAVER_CLIENT_SECRET, NAVER_REDIRECT_URI, code, state);
        const profile = await getNaverUserProfile(access_token);
        if(profile){
            // 유효기간 하루
            const now = new Date();
            const expirationDate = new Date(now + (24 * 60 * 60 * 1000));
            const expired = Math.floor(expirationDate.getTime() / 1000);
            
            // 쿠키 세팅
            res.cookie("login_state", state, {
                httpOnly: true,
                secure: false,
                domain: ".localhost:3000",
                maxAge: expired
            });

            // 디비에 저장
            const [result] = await req.connection.execute("INSERT INTO sessions (session_id , expiration) VALUES (?, ?)", [state, expired]);
            console.log(result);

            res.redirect(`http://localhost:3000`);   
        }else{
            res.status(409).send({message:"tru again."});
        }
    } catch (error) {
        next(error);
    }
});

// 카카오 로그인 url 구하기
router.get("/kakao-login-url", async(req, res) => {
    const state = uuidv4();
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&state=${state}`;
    res.send({ url: kakaoLoginUrl });
});

// 카카오 로그인 Redirect URL로부터 access toekn 받기
router.get("/kakao-login", async(req, res, next)=>{
    try {
        const { code, state } = req.query;
        const access_token = await getKakaoAccessToken(KAKAO_CLIENT_ID, KAKAO_REDIRECT_URI, code, state);
        const profile = await getKakaoUserProfile(access_token);

        if(profile){
            // 유효기간 하루
            const now = new Date();
            const expirationDate = new Date(now + (24 * 60 * 60 * 1000));
            const expired = Math.floor(expirationDate.getTime() / 1000);
            
            // 쿠키 세팅
            res.cookie("login_state", state, {
                httpOnly: true,
                secure: false,
                domain: ".localhost:3000",
                maxAge: expired
            });

            // 디비에 저장
            const [result] = await req.connection.execute("INSERT INTO sessions (session_id , expiration) VALUES (?, ?)", [state, expired]);
            res.redirect(`http://localhost:3000`);
        }else{
            res.status(409).send({message:"try again."});
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;
