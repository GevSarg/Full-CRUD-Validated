const express = require("express");
const readUsers = require("../middlewares/users/readUsers.js");
const checkBody = require("../middlewares/users/checkBody.js");
const checkValidation = require("../middlewares/users/checkValidation.js");
const createUser = require("../middlewares/users/createUser.js");
const updateUser = require("../middlewares/users/updateUser.js");
const deleteUser = require("../middlewares/users/deleteUser.js");
const writeFile = require("../middlewares/users/writeFile.js");

const router = express.Router();

// GET
router.get("/", readUsers, (req, res) => {
  const { users } = res.locals;
  res.status(200).json(users);
});

// POST
router.post(
  "/",
  readUsers,
  checkBody,
  checkValidation,
  createUser,
  writeFile,
  (req, res) => {
    res.status(201).send("User was created successfully");
  }
);

// PUT
router.put(
  "/:id",
  readUsers,
  checkBody,
  checkValidation,
  updateUser,
  writeFile,
  (req, res) => {
    res.status(200).send(`User updated`);
  }
);

// PATCH
router.patch(
  "/:id",
  readUsers,
  checkBody,
  checkValidation,
  updateUser,
  writeFile,
  (req, res) => {
    res.status(200).send(`User updated`);
    console.log(res.locals.newUser);
  }
);

// DELETE
router.delete("/:id", readUsers, deleteUser, writeFile, (req, res) => {
  res.status(200).send(`User deleted`);
});

module.exports = router;
