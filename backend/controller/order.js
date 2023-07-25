const { errorLog, successLog, infoLog } = require("../helper/logHelper");
const Order = require("../models/Order");

const createOrder = async (req, res) => {
  infoLog("createOrder entry");
  try {
    const savedOrder = await Order.create(req.body);
    successLog("Saved Order Successfully");
    infoLog("createOrder exit");
    return res.status(201).json(savedOrder);
  } catch (error) {
    errorLog("Failed To Create Order");
    infoLog("createOrder exit");
    return res.status(500).json({ isOrderCreated: false });
  }
};

const updateOrder = async (req, res) => {
  infoLog("updateOrder entry");
  const id = req.params.id;
  try {
    const updateCart = await Order.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    successLog("Update Order Successfully");
    infoLog("updateOrder exit");
    return res.status(200).json(updateCart);
  } catch (error) {
    errorLog("Failed To Update Order");
    infoLog("updateOrder exit");
    return res.status(500).json({ isOrderUpdated: false });
  }
};

const deleteOrder = async (req, res) => {
  infoLog("deleteOrder entry");
  const id = req.params.id;
  try {
    const deletedOrder = await Product.findByIdAndDelete(id);

    successLog("Delete Order Successfully");
    infoLog("deleteOrder exit");
    return res.status(200).json(deletedOrder);
  } catch (error) {
    errorLog("Failed To Delete Order");
    infoLog("deleteOrder exit");
    return res.status(500).json({ isOrderDeleted: false });
  }
};

const getSingleOrder = async (req, res) => {
  infoLog("getSingleOrder entry");
  //userId
  const id = req.params.id;

  try {
    const order = await Order.find({ userId: id });
    successLog("Get Single Order Successfully");
    infoLog("getSingleOrder exit");
    return res.status(200).json(order);
  } catch (error) {
    errorLog("Failed To Get Single Order");
    infoLog("getSingleOrder exit");
    return res.status(500).json({ isSingleUserOrderGet: false });
  }
};

const getAllOrders = async (req, res) => {
  infoLog("getAllOrders entry");

  try {
    const orders = await Order.find();
    successLog("Get All Orders Successfully");
    infoLog("getAllOrders exit");
    return res.status(200).json(orders);
  } catch (error) {
    errorLog("Failed To Get All Orders");
    infoLog("getAllOrders exit");
    return res.status(500).json({ isAllOrdersGet: false });
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getSingleOrder,
  getAllOrders,
};
