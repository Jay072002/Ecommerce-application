const User = require("../models/User");
const { errorLog, successLog, infoLog } = require("../helper/logHelper");
const { hashPassword, comparePassword } = require("../helper/bcrypt");
const { generateToken } = require("../helper/JWT");

const registerUser = async (req, res) => {
  infoLog("registerUser entry");
  try {
    const { username, email, password, confirmpassword } = req.body;

    if (!username || !email || !password || !confirmpassword) {
      res.status(400).json({ isRegister: false });
      return errorLog("Invalid Details");
    }

    if (password !== confirmpassword) {
      res.status(400).json({ isRegister: false });
      return errorLog("Password Not Matched");
    }

    // check for the existance if already exist then dont allow to regsister

    const isRegistered = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (isRegistered) {
      res.json({ isRegister: false });
      errorLog("User Already Exist!");
      return;
    }

    const hashPass = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashPass,
    });

    await newUser.save();

    successLog("Successfully Registered!");
    infoLog("registerUser exit");
    return res.status(201).json({ isRegister: true });
  } catch (error) {
    infoLog("registerUser exit");
    errorLog("Error While Registration!");
    return res.status(500).json({ isRegister: false });
  }
};

const loginUser = async (req, res) => {
  infoLog("loginUser entry");

  const { username, password } = req.body;

  if (!username || !password) {
    infoLog("loginUser exit");
    res.status(400).json({ isLogin: false });
    return errorLog("Invalid Details");
  }

  try {
    // check if the user logged in or not

    const isRegistered = await User.findOne({ username });

    if (!isRegistered) {
      infoLog("loginUser exit");
      res.status(401).json({ isLogin: false });
      return errorLog("Unauthorized User Trying To Login");
    }

    // if found then compare the password

    const isMatch = await comparePassword(password, isRegistered?.password);

    if (!isMatch) {
      infoLog("loginUser exit");
      res.status(401).json({ isLogin: false });
      return errorLog("Authentication Failed");
    }

    const token = generateToken({
      id: isRegistered._id,
      username: isRegistered.username,
      isAdmin: isRegistered.isAdmin,
    });

    res.cookie("token", token, { maxAge: 9000000, httpOnly: true });

    successLog("Successfully LoggedIn!");
    infoLog("loginUser exit");
    return res.status(200).json({ isLogin: true });
  } catch (error) {
    infoLog("loginUser exit");
    errorLog("error while login the user");
    return res.status(500).json({ isLogin: false });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
