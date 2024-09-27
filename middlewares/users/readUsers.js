const fs = require("fs");
const path = require("path");

function readHomeFile(req, res, next) {
  const data = fs.readFileSync("./db/users.json", "utf-8");
  const users = JSON.parse(data);
  res.locals.users = users;
  next();
}

module.exports = readHomeFile;
