const fs = require("fs");
const path = require("path");

function writeFile(req, res, next) {
  const { users } = res.locals;
  fs.writeFileSync(
    path.join(__dirname, "../../db/users.json"),
    JSON.stringify(users, null, 2)
  );
  next();
}

module.exports = writeFile;
