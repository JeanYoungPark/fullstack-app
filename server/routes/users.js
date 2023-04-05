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
    res.send(req.body);
    try {
        // await req.connection.query("INSERT INTO users SET ?", );
    } catch (err) {

    } finally {

    }
});

// 로그인

// 로그아웃

module.exports = router;
