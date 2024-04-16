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
router.use('/', express.static('public'));

// Assignment 1
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Assignment 2
router.get("/data", (req, res) => {
  // 如果 URL 查詢參數存在且有值就記給 number，沒有就空字串
  const number = req.query.number || ""; 

  // 判斷輸入的是否為正整數，是就跳下一步，不是就進 if 顯示訊息
  // 為防止 n 太大影響程式運作，將範圍設在 0 ~ 10000
  if (isNaN(number) || number % 1 !== 0 || number < 0 || number > 10000){
    res.json({ error: "Please enter an positive integer less than or equal to 10000."});
    return;
  }
  // 計算總和並顯示
  const sum = calculateSum(Number(number));
  res.json({ inputnumber: number, sum: sum });
});

// 顯示使用者輸入的數字 ( 輸入框限定要整數，所以這裡只要判斷是否為負數 )
router.post("/data", (req, res) => {
  const inputNumber = req.body.inputnumber;
  // 為防止 n 太大影響程式運作，將範圍設在 0 ~ 10000
  if (inputNumber < 0 || inputNumber > 10000){
    res.json({ error: "Please enter an positive integer less than or equal to 10000."});
    return;
  }
  // 計算總和並顯示
  const sum = calculateSum(Number(inputNumber));
  res.json({ inputnumber: inputNumber, sum: sum });
});

// 計算數字總和
function calculateSum(n) {
  return (n * (n + 1)) / 2;
}

// Assignment 4，每一步都用 console 檢查狀態
router.get("/myName", (req, res) => {
  const name = req.cookies.name || "";
  console.log('get.myName.name', name);
  res.render("myName", { name: name });
});

// router.post("/myName", (req, res) => {
//   res.cookie('name', req.body.name);
//   console.log('post.myName.req.body.name', req.body.name);
//   res.render("myName", { name: req.body.name });
// })

router.get("/trackName", (req, res) => { 
  // 如果直接輸入 /trackName?name=使用者名字，
  // 或從myName頁面填寫表單，將名字存到 name 的 cookie
  const nameQuery = req.query.name;

  // 如果什麼都沒輸入就送出，提示需輸入
  if (!nameQuery) {
    console.log('Please enter name!');
    return;
  }

  if (nameQuery) {
    res.cookie('name', nameQuery); 
    console.log('get.trackName.nameQuery', nameQuery);
    res.redirect(`/myName`);
  }

  // 如果直接到 /trackName 頁面，就顯示目前的 cookie
  const name = req.cookies.name || "";
  console.log('get.trackName.name', name);
  res.json({ name: name });
});

// router.post("/trackName", (req, res) => {
//   const name = req.body.name;
//   console.log('post.trackName.name', name);
//   res.json({ name: name });
// });


module.exports = router;
