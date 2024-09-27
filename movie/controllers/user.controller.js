const User = require("../Models/user.schema");

const getUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const isExists = await User?.findOne({ username });
  if (isExists) {
    res.send("User already exists");
  } else {
    const user = new User({ username, email, password });
    const data = await User.create(user);
    res.send(data);
  }
};

const login = async (req, res) => {
  const { email, password } =req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send("Invalid email or password");
  }

  res.cookie("id", user.id).send({ user, msg: "Logged in successfully" });
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
};

module.exports = {
  getUser,
  createUser,
  login,
  deleteUser,
};
