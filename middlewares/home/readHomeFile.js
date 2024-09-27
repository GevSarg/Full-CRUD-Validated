const fs = require("fs");
const path = require("path");

function readHomeFile(req, res, next) {
  fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    } else {
      res.status(200).send(data);
    }
  });
  next();
}

module.exports = readHomeFile;
