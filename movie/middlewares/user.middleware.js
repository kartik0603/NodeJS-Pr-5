const isValid = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  next();
};
module.exports = isValid;
