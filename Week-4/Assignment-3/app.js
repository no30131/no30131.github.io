const express = require("express");
const router = express.Router();

const app = express();
const port = 3000;
const mysql = require("mysql2");

app.use("/", router);
app.set("view engine", "pug");
router.use(express.static('public'));

// const pool = mysql
//   .createPool({
//     host: "127.0.0.1",
//     user: "root",
//     password: "sS123456",
//     database: "assignment",
//   })
//   .promise();

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to database: ", err);
//     return;
//   }
//   connection.release();
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// async function getUser() {
//   try {
//     const [rows] = await pool.query("SELECT * FROM user");
//     console.log(rows);
//   } catch (error) {
//     console.error("Error fetching users: ", error);
//   }
// }

// getUser();
