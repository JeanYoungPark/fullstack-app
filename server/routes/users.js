var express = require("express");
var router = express.Router();

// 회원정보 가져오기
router.get("/", function (req, res, next) {
  const pool = req.app.locals.pool; // app.locals에 저장된 커넥션 풀 가져오기
  pool.getConnection(function (err, connection) {
    if (err) {
      console.error(err);
      return;
    }

    connection.query("SELECT * FROM users", function (error, results, fields) {
      connection.release(); // 커넥션 반환
      if (error) {
        console.error(error);
        return;
      }

      res.json(results);
    });
  });
});

// 회원가입

// 로그인

// 로그아웃

module.exports = router;
