const express = require('express');
const router = express.Router();

router.get("/list", async (req, res, next) => {
    try {
        const [rows] = await req.connection.execute("SELECT * FROM board");
        res.send(rows);
    } catch (err) {
        next(err);
    } finally {
        req.connection.release();
    }
});

router.get("/:id", (req, res, next) => {

});

router.post("/save", async (req, res, next) => {
    try {
        const { title, content, writer_id } = req.body;
        const [result] = await req.connection.execute(
            "INSERT INTO board (title, content, writer_id) VALUES (?, ?, ?)",
            [title, content, writer_id]
        );

        const insertId = result.insertId;
        res.send({ insertId: insertId });
    } catch (err) {
        next(err);
    } finally {
        req.connection.release();
    }
});

router.post("/delete", (req, res, next) => {

});

module.exports = router;