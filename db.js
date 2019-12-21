const mysql = require("mysql");
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "",
 database: "course-express"
});

conn.connect();
module.exports = conn;
