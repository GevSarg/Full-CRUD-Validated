function updateUser(req, res, next) {
  const { id } = req.params;
  const { users } = res.locals;
  const updateData = req.body;

  const userIndex = users.findIndex((user) => user.id === +id);
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  if (req.method === "PUT") {
    const { name, email, age } = updateData;
    if (!name || !email || !age) {
      return res.status(422).json({ msg: "Invalid Data" });
    }
    users[userIndex] = { ...updateData };
  } else if (req.method === "PATCH") {
    Object.assign(users[userIndex], updateData);
  }

  res.locals.users = users;
  res.locals.updatedUser = users[userIndex];
  next();
}

module.exports = updateUser;
