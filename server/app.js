let createError = require("http-errors");
let express = require("express");
const cors = require("cors");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan"); // 로깅에 도움을 주는 미들웨어
const pool = require("./db");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");

let app = express();

// view 관련 사용 안할 것임으로 주석
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

app.use(logger("dev"));

app.use(cors());  // 다른 도메인에서 리소스 요청 허용 (HTTP 요청 방식)
app.use(async (req, res, next) => { // 커넥션 연결
  try {
    const connection = await pool.getConnection();
    req.connection = connection;
    next();
  } catch (err) {
    next(err);
  }
});

// 요청으로 들어오는 body를 JSON 객체로 파싱해주는 역할
app.use(express.json()); 
/* post 요청으로 전달된 데이터를 해석한다. content-type이 application/x-www-form-urlencoded 경우에만 동작
 * extended 매개변수가 true인 경우 querystring 모듈이 좀 더 유연하게 동작하도록 한다. false인 경우 배역과 객체를 처리하지 못한다.
 */
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// 정적 파일들을 root 경로로 접근 할 수 있도록 설정
app.use(express.static(path.join(__dirname, "public")));

// 존재하지 않는 페이지 접근시 404 에러
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// 미들웨어 체인에서 이전 미들웨어에서 에러가 발생하는 경우 실행
app.use(function (err, req, res, next) {
  // 뷰에서 사용하는 로컬 변수
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
