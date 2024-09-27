function createUser(req, res, next) {
  const body = req.body;
  const { users } = res.locals;

  const maxId = Math.max(...users.map((user) => user.id));

  // Creatig user

  const id = maxId + 1;

  const newUser = { id, ...body };
  users.push(newUser);
  res.locals.newUser = newUser;
  next();
}

module.exports = createUser;
