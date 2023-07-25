const { errorLog, successLog, infoLog } = require("../helper/logHelper");
const Product = require("../models/Product");

const createProduct = async (req, res) => {
  infoLog("createProduct entry");
  try {
    const savedProduct = await Product.create(req.body);
    successLog("Saved Product Successfully");
    infoLog("createProduct exit");
    return res.status(201).json(savedProduct);
  } catch (error) {
    errorLog("Failed To Create Product");
    infoLog("createProduct exit");
    return res.status(500).json({ isProductCreated: false });
  }
};

const updateProduct = async (req, res) => {
  infoLog("updateProduct entry");
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    successLog("Update Product Successfully");
    infoLog("updateProduct exit");
    return res.status(200).json(updatedProduct);
  } catch (error) {
    errorLog("Failed To Update Product");
    infoLog("updateProduct exit");
    return res.status(500).json({ isProductUpdated: false });
  }
};

const deleteProduct = async (req, res) => {
  infoLog("deleteProduct entry");
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    successLog("Delete Product Successfully");
    infoLog("deleteProduct exit");
    return res.status(200).json(deletedProduct);
  } catch (error) {
    errorLog("Failed To Delete Product");
    infoLog("deleteProduct exit");
    return res.status(500).json({ isProductDeleted: false });
  }
};

const getSingleProduct = async (req, res) => {
  infoLog("getSingleProduct entry");
  const id = req.params.id;

  try {
    const product = await Product.findById(id);
    successLog("Get Single Product Successfully");
    infoLog("getSingleProduct exit");
    return res.status(200).json(product);
  } catch (error) {
    errorLog("Failed To Get Single Product");
    infoLog("getSingleProduct exit");
    return res.status(500).json({ isSingleProductGet: false });
  }
};

const getAllProducts = async (req, res) => {
  infoLog("getAllProduct entry");

  const { new: qnew, category } = req?.query;

  const query = category
    ? {
        categories: {
          $in: [category],
        },
      }
    : {};

  const sort = qnew ? { createdAt: -1 } : {};

  let products;

  try {
    if (qnew && category) {
      products = await Product.find(query).sort(sort).limit(2);
    } else if (qnew) {
      products = await Product.find().sort(sort).limit(2);
    } else if (category) {
      products = await Product.find(query);
    } else {
      products = await Product.find();
    }

    successLog("Get All Product Successfully");
    infoLog("getAllProducts exit");
    return res.status(200).json(products);
  } catch (error) {
    errorLog("Failed To Get All Product");
    infoLog("getAllProducts exit");
    return res.status(500).json({ isAllProductGet: false });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  getAllProducts,
};
