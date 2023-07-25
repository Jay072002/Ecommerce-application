const { infoLog, errorLog, successLog } = require("../helper/logHelper");
const { hashPassword } = require("../helper/bcrypt");
const User = require("../models/User");

const updateUser = async (req, res) => {
  infoLog("updateUser entry");

  if (Object.keys(req.body).length === 0) {
    errorLog("No Data Provided");
    return res.status(400).json({ isUpdate: false });
  }

  const id = req.params.id;
  const password = req.body.password;
  const updateUserData = {};

  if (password) {
    const hashPass = await hashPassword(password);
    updateUserData.password = hashPass;
  }
  if (req.body.username) {
    updateUserData.username = req.body.username;
  }
  try {
    await User.findByIdAndUpdate(id, { $set: updateUserData });

    successLog("Updated User Successfully");
    infoLog("updateUser exit");
    return res.status(200).json({ isUpdate: true });
  } catch (error) {
    infoLog("updateUser exit");
    errorLog("Failed To Update User");
    return res.status(500).json({ isUpdate: false });
  }
};

const deleteUser = async (req, res) => {
  infoLog("deletUser entry");
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    infoLog("deleteUser exit");
    successLog("Delete User Successfully");
    return res.status(200).json({ isDelete: true });
  } catch (error) {
    errorLog("Failed To Delete User");
    infoLog("deleteUser exit");
    return res.status(500).json({ isDelete: false });
  }
};

const getSingleUser = async (req, res) => {
  infoLog("getSingleUser entry");
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    const { password, ...others } = user._doc;
    infoLog("getSingleUser entry");
    successLog("Get User Successfully");
    return res.status(200).json(others);
  } catch (error) {
    errorLog("Failed To Get User");
    infoLog("getSingleUser exit");
    return res.status(500).json({ isGetSingleUser: false });
  }
};

const getAllUsers = async (req, res) => {
  infoLog("getAllUsers entry");
  const query = req.query?.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();

    const filteredUsers = users.map((user) => {
      const { password, ...rest } = user._doc;
      return { ...rest };
    });

    infoLog("getAllUsers exit");
    successLog("Get Users Successfully");
    return res.status(200).json(filteredUsers);
  } catch (error) {
    errorLog("Failed To Get All Users");
    infoLog("getAllUsers exit");
    return res.status(500).json({ isGetUsers: false });
  }
};

const getUserStats = async (req, res) => {
  infoLog("getUserStates entry");
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    infoLog("getUserStats exit");
    successLog("Fetch Users Stats Successfully");
    return res.status(200).json(data);
  } catch (error) {
    errorLog("Failed To Fetch User Stats");
    infoLog("getUserStats exit");
    return res.status(500).json(error);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getUserStats,
};
