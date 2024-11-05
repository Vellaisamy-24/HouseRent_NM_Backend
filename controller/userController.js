const userModel = require("../model/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all fields",
        success: false,
      });
    }
    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "user not exists",
      });
    }
    const validPassword = await bcryptjs.compare(password, userExists.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
    const { password: pass, ...rest } = userExists._doc;
    const jwtToken = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET);
    return res.cookie("token", jwtToken, { httpOnly: true }).status(200).json({
      success: true,
      message: "login success",
      user: rest,
      token: jwtToken,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password, "signup");
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await userModel.create({ email, password: hashedPassword });
    const { password: pass, ...rest } = newUser._doc;
    return res.status(201).json({
      success: true,
      message: "Register Success",
      user: rest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signUp, login };
