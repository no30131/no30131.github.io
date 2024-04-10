const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use("/", router);
app.set("view engine", "pug");

router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: false }));

// Assignment 1
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Assignment 2
router.get('/data', (req, res) => {
    res.render('data');
});
// router.get("/data", (req, res) => {
//   // 讀取 URL 查詢參數
//   const number = req.query.number || "";
//   res.render("data", { number: number });
// });

router.post("/data", (req, res) => {
  res.render("data", { name: req.body.inputnumber });
});

module.exports = router;
