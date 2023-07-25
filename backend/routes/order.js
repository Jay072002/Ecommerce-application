const router = require("express").Router();
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  getAllOrders,
} = require("../controller/order");
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");

// Create a order
router.post("/", verifyToken, createOrder);

// Update a order
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// Delete a order
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

// get single order
router.get("/:id", verifyTokenAndAuthorization, getSingleOrder);

// get all order
router.get("/", verifyTokenAndAdmin, getAllOrders);

module.exports = router;
