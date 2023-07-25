const { errorLog, successLog, infoLog } = require("../helper/logHelper");
const Cart = require("../models/Cart");

const createCart = async (req, res) => {
  infoLog("createCart entry");
  try {
    const savedCart = await Cart.create(req.body);
    successLog("Saved Cart Successfully");
    infoLog("createCart exit");
    return res.status(201).json(savedCart);
  } catch (error) {
    errorLog("Failed To Create Cart");
    infoLog("createCart exit");
    return res.status(500).json({ isCartCreated: false });
  }
};

const updateCart = async (req, res) => {
  infoLog("updateCart entry");
  const id = req.params.id;
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    successLog("Update Cart Successfully");
    infoLog("updateCart exit");
    return res.status(200).json(updateCart);
  } catch (error) {
    errorLog("Failed To Update Cart");
    infoLog("updateCart exit");
    return res.status(500).json({ isCartIpdated: false });
  }
};

const deleteCart = async (req, res) => {
  infoLog("deleteCart entry");
  const id = req.params.id;
  try {
    const deletedCart = await Product.findByIdAndDelete(id);

    successLog("Delete Product Successfully");
    infoLog("deleteCart exit");
    return res.status(200).json(deletedCart);
  } catch (error) {
    errorLog("Failed To Delete Cart");
    infoLog("deleteCart exit");
    return res.status(500).json({ isCartDeleted: false });
  }
};

const getSingleCart = async (req, res) => {
  infoLog("getSingleCart entry");
  //   userId
  const id = req.params.id;

  try {
    const cart = await Cart.findOne({ userId: id });
    successLog("Get Single Cart Successfully");
    infoLog("getSingleCart exit");
    return res.status(200).json(cart);
  } catch (error) {
    errorLog("Failed To Get Single Cart");
    infoLog("getSingleCart exit");
    return res.status(500).json({ isSingleCartGet: false });
  }
};

const getAllCarts = async (req, res) => {
  infoLog("getAllCarts entry");

  try {
    const carts = await Cart.find();
    successLog("Get All Cart Successfully");
    infoLog("getAllCarts exit");
    return res.status(200).json(carts);
  } catch (error) {
    errorLog("Failed To Get All Cart");
    infoLog("getAllCarts exit");
    return res.status(500).json({ isAllCartsGet: false });
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getSingleCart,
  getAllCarts,
};
