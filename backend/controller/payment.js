const stripe = require("stripe")(process.env.STRIPE_SECRET);
const { errorLog } = require("../helper/logHelper");

const payment = (req, res) => {
  console.log(req.body);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        errorLog("Error While Proccessing Payment");
        return res.status(500).json({ message: stripeErr });
      }

      return res.status(200).json(stripeRes);
    }
  );
};

module.exports = { payment };
