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
router.post("/", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await req.connection.query(
            "INSERT INTO users (email, password) VALUES (?, ?)",
            [email, password]
        );
        const insertId = result[0].insertId;
        res.send({insertId: insertId});
    } catch (err) {
        next(err);
    } finally {
        req.connection.release();
    }
  });

// 로그인

// 로그아웃

module.exports = router;
