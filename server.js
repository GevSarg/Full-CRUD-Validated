const express = require("express");
const home = require("./routes/index.js");
const users = require("./routes/users.js");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use("/", home);
app.use("/users", users);

app.use((req, res, next) => {
  res.status(400).send("Invalid Url");
});

app.listen(PORT, () =>
  console.log(`Server is Running on http://localhost:${PORT}`)
);
