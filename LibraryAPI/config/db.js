// require("dotenv").config();
// const mysql = require("mysql2");

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// // connection.connect((err) => {
// //   if (err) {
// //     console.log("Error connecting to MySQL:", err);
// //     return;
// //   }
// //   console.log("Connected to MySQL successfully");
// // });

// module.exports = connection;

require("dotenv").config();
const mysql = require("mysql2"); // استخدم promise

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log("Error connection to mysql: ", err);
    return;
  }
  console.log("Connection Successfully MySQL");
});

module.exports = connection;
