const express = require("express");
const readHomeFile = require("../middlewares/home/readHomeFile.js");

const router = express.Router();

router.get("/", readHomeFile, (req, res) => {});

module.exports = router;
