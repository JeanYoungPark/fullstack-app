const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const saltRounds = 10; // 해시에 사용되는 솔트의 길이
const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET_KEY; // 서버에서만 알고 있는 비밀 키
const expiresIn = '1d'; // 토큰의 유효기간


// 회원정보 가져오기
router.get("/", async (req, res, next) => {
    try {
        const [rows] = await req.connection.execute("SELECT * FROM users");
        res.send(rows);
    } catch (err) {
        next(err);
    } finally {
        req.connection.release();
    }
});

// 회원가입
router.post("/join", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const [chkResult] = await req.connection.execute("SELECT * FROM users WHERE email=?",[email]);
        if(chkResult.length === 0){
            // 비밀번호 암호화
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const [result] = await req.connection.execute(
                "INSERT INTO users (email, password) VALUES (?, ?)",
                [email, hashedPassword]
            );
            const insertId = result.insertId;
            res.send({insertId: insertId});
        }else{
            res.status(409).send({message:"The email already exists."});
        }
    } catch (err) {
        next(err);
    } finally {
        req.connection.release();
    }
});

// 로그인
router.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const [result] = await req.connection.execute(
            "SELECT * FROM users WHERE email=?",
            [email]
        );
        
        if(result.length === 0){
            res.status(401).send("invalid email or password");
            return;
        }
        const hashedPassword = result[0].password;
        const isMatch = await bcrypt.compare(password, hashedPassword);

        if(isMatch){
            const token = jwt.sign({ email, password }, secret, {expiresIn});
            res.send({email: email, token: token});
        }else{
            res.status(401).send("invalid email or password");
        }
    } catch (err) {
        next(err);
    } finally {
        req.connection.release();
    }
});

// 로그아웃
module.exports = router;
