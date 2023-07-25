const { Schema, default: mongoose } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: { type: String },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
