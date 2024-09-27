function checkValidation(req, res, next) {
  const { newUser, users } = res.locals;

  if (!newUser) {
    res.status(422).send("Data is empty");
  }

  // Check Email
  if (newUser.email) {
    const userExists = users.some(
      (u) => u.email === newUser.email.toLowerCase() // Make Email Lowercase
    );
    if (userExists) {
      res.status(409).send("A user with this email already exists"); // Check duplicate Email
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Check email validation
    if (!emailRegex.test(newUser.email)) {
      res.status(422).send("Invalid email format");
    }
  }
  if (isNaN(age) || age <= 0) {
    return res.status(400).send("Age must be a positive number"); // age must be number
  }
  if (+newUser.age <= 18) {
    res.status(400).send("User must be at least 18"); // user must be between 18 and 120 years old
  } else if (+newUser.age >= 120) {
    res.status(400).send("Write realistic user age");
  }

  if (newUser.name) {
    const nameRegex = /^[a-zA-Z]+$/; // Check user name contain only letters
    if (!nameRegex.test(newUser.name)) {
      return res.status(422).send("Name must contain only letters");
    }
    newUser.name = // Make user name capitalize
      newUser.name.charAt(0).toUpperCase() +
      newUser.name.slice(1).toLowerCase();
  }

  res.locals.newUser = newUser; // Rewrite newUser
  next();
}

module.exports = checkValidation;
