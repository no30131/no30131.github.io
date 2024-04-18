const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "sS123456",
    database: "assignment",
  })
  .promise();

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database: ', err);  
    return;
  }
  connection.release();
});

async function getUser() {
  try {
    const [rows] = await pool.query('SELECT * FROM user');
    console.log(rows);
  } catch (error) {
    console.error('Error fetching users: ', error);
  }    
}

getUser();
