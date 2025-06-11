const connection = require("./db");

connection.query("SELECT * FROM user", (err, results) => {
  if (err) {
    console.error("Ошибка запроса:", err);
    return;
  }
  console.log(results);
});
