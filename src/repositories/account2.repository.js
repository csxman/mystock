// const mysql = require("mysql2");

const db = require("../db/db");

// const con = mysql.createConnection({
//   host: "125.26.15.142",
//   user: "admindcm_dwjdb",
//   password: "@admindcm1234",
//   database: "admindcm_dmeets",
// });

exports.testMysqlFindAll = async () =>
  await db.ExecDataNoIndex("SELECT * FROM tbl_company");

exports.testMysqlFindAllByIndex = async () => {
  let q_index = ["Guest", 11];
  await db.ExecDataByIndex(
    "UPDATE tbl_company set `company_name` = ? WHERE `id` = ?",
    q_index
  );
};

// Select data No Index
//   await db.ExecData("SELECT * FROM tbl_company");

// "UPDATE tbl_company set `company_name` = ? WHERE `id` = ?",
//   ["Guest11", 11],

//   "SELECT * FROM tbl_company";

//   con
//     .promise()
//     .query("SELECT * FROM tbl_company")
//     .then(([rows, fields]) => {
//       //   console.log(rows);
//       con.end();
//       //   console.log("Connection closed");
//       return rows;
//     })
//     .catch(console.log);
