var express = require("express");
var router = express.Router();

// 회원정보 가져오기
router.get("/", async (req, res, next) => {
  try {
    const [rows] = await req.connection.query("SELECT * FROM users");
    res.send(rows);
  } catch (err) {
    next(err);
  } finally {
    req.connection.release();
  }
});

// 회원가입
// router.post("/", function (req, res, next) {
  
// });

// 로그인

// 로그아웃

module.exports = router;
