const router = require("express").Router();
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts,
} = require("../controller/product");
const { verifyTokenAndAdmin } = require("../middleware/verifyToken");

// Create a product
router.post("/", verifyTokenAndAdmin, createProduct);

// Update a product
router.put("/:id", verifyTokenAndAdmin, updateProduct);

// Delete a product
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// get single product
router.get("/:id", getSingleProduct);

// get all products
router.get("/", getAllProducts);

module.exports = router;
