function deleteUser(req, res, next) {
  const { id } = req.params;
  const { users } = res.locals;

  const userIndex = users.findIndex((user) => user.id === +id);
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  users.splice(userIndex, 1); // Remove user from array
  res.locals.users = users;
  next();
}

module.exports = deleteUser;
