const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUsers,
  getUserStats,
} = require("../controller/user");

// update the user credentials
router.put("/:id", verifyTokenAndAuthorization, updateUser);

// delete user
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

// get all users
router.get("/", verifyTokenAndAdmin, getAllUsers);

// get user stats
router.get("/stats", verifyTokenAndAdmin, getUserStats);

// get single user
router.get("/:id", verifyTokenAndAdmin, getSingleUser);

module.exports = router;
