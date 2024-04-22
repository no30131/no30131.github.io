const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3000;
let userName = "";

app.use("/", router);
app.set("view engine", "pug");
router.use(cookieParser());
router.use(express.static("public"));
router.use(bodyParser.urlencoded({ extended: false }));

// Database
const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  })
  .promise();

  app.get("/", (req, res) => {
  res.render("index");
});

app.post("/signup", async (req, res) => {
  console.log("post to signup");
  const { email, username, password } = req.body;

  // 若 username 或 password 是空白，要求重新輸入
  if (!username.trim() || !password.trim()) {
    const errorMessage =
      "Username and password cannot be empty. Please try again!";
    return res.render("index.pug", { errorMessage: errorMessage });
  }

  try {
    // 檢查 email 是否已存在資料庫
    const [rows] = await pool.query("SELECT email FROM user WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      // 若已存在，要求重新輸入
      const errorMessage =
        "This email is already registered, please try a different email.";
      return res.render("index.pug", { errorMessage: errorMessage });
    } else {
      const [rows] = await pool.query(
        "INSERT INTO user (email, username, password) VALUES (?, ?, ?)",
        [email, username, password]
      );
      res.cookie('userName', username);
      res.redirect("/member");
    }
  } catch (error) {
    console.error("Error fetching user: ", error);
    res.status(500).send("internal Server Error");
  }
});

app.post("/signin", async (req, res) => {
  console.log("post to signin");
  const { email, username, password } = req.body;

  // 若 username 或 password 是空白，要求重新輸入
  if (!username.trim() || !password.trim()) {
    const errorMessage =
      "Username and password cannot be empty. Please try again!";
    return res.render("index.pug", { errorMessage: errorMessage });
  }

  try {
    // 檢查 email 是否已存在資料庫
    const [erows] = await pool.query("SELECT email FROM user WHERE email = ?", [
      email,
    ]);
    if (erows.length > 0) {
      // 若已存在，檢查 username, password 是否正確
      const [rows] = await pool.query(
        "SELECT email, username, password FROM user WHERE email = ? AND username = ? AND password = ?",
        [email, username, password]
      );
      console.log(rows);
      if (rows.length > 0) {
        // 成功登入，記住 username 並重導向
        res.cookie('userName', username);
        res.redirect("/member");
      } else {
        const errorMessage =
          "username or password not correct, please try again!";
        return res.render("index.pug", { errorMessage: errorMessage });
      }
    } else {
      // 若不存在，請使用者去註冊
      const errorMessage =
        "This email has not been registered yet, please sign up.";
      return res.render("index.pug", { errorMessage: errorMessage });
    }
  } catch (error) {
    console.error(error);
    console.log("Server error");
    res.status(500).send("Server error");
  }
});

app.get("/member", (req, res) => {
  // 檢查如果已登入才顯示 member 頁面，否則彈回登入頁
  if (req.cookies.userName) {    
    userName = req.cookies.userName;
    res.render("member.pug", { name: userName });
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});