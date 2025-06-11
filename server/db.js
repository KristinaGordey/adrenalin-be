const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.127.126.25",
  user: "root",
  password: "",
  database: "Adrenalin",
});

connection.connect((err) => {
  if (err) {
    console.error("Ошибка подключения:", err);
    return;
  }
  console.log("Подключено к MySQL!");
});

module.exports = connection;
