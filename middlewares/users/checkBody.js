function checkBody(req, res, next) {
  const { email, age, name } = req.body;

  // Check body for Put/Post (Must contain full body form)

  if (req.method === "PUT" || req.method === "POST") {
    if (name && email && age) {
      res.locals.newUser = { name, email, age };
      next();
    } else {
      res.status(422).json({ msg: "Invalid Data" });
    }

    // Check body for Patch (May contain not complete body form)
  } else if (req.method === "PATCH") {
    let updateFields = {};
    if (name) updateFields.name = name;
    if (email) updateFields.email = email;
    if (age) updateFields.age = age;

    if (Object.keys(updateFields).length > 0) {
      res.locals.newUser = updateFields;
      next();
    } else {
      return res.status(422).json({
        msg: "Invalid Data: At least one field (name, email, age) is required",
      });
    }
  }
}
module.exports = checkBody;
