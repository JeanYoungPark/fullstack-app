const express = require("express");
const router = express.Router();
const { getAccessToken, getNaverUserProfile } = require("./naverLogin");

const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:5000/oauth/naver-login";

// 네이버 로그인 url 구하기
router.get("/naver-login-url", async (req, res) => {
  const state =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&state=${state}`;

  res.send({ url: naverLoginUrl, naverLoginState: state });
});

// 네이버 로그인 Redirect URI로부터 axxess token 받기
router.get("/naver-login", async (req, res) => {
  const { code, state } = req.query;

  // 쿠키에서 저장된 state와 비교
  if (state !== req.cookies.naverLoginState) {
    return res.status(400).send("잘못된 접근입니다.");
  }

  const access_token = await getAccessToken(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    code
  );
  const profile = await getNaverUserProfile(access_token);
  res.redirect(`http://localhost:3000/id=${profile.id}`);
});

module.exports = router;
