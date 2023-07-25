const router = require("express").Router();
const {
  createCart,
  updateCart,
  deleteCart,
  getSingleCart,
  getAllCarts,
} = require("../controller/cart");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

// Create a cart
router.post("/", verifyToken, createCart);

// Update a cart
router.put("/:id", verifyTokenAndAuthorization, updateCart);

// Delete a cart
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

// get single cart
router.get("/:id", verifyTokenAndAuthorization, getSingleCart);

// get all cart
router.get("/", verifyTokenAndAdmin, getAllCarts);

module.exports = router;
