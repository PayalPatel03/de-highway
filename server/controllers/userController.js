const User = require("../models/User");

// Register
exports.register = async (req, res) => {

  try {

    const user = await User.create(req.body);

    res.json(user);

  } catch (error) {

    res.status(500).json(error);
  }
};

// Login
exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json("Invalid Credentials");
  }

  res.json(user);
};