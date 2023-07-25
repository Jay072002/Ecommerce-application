const router = require("express").Router();
const { payment } = require("../controller/payment");

// payment route
router.post("/payment", payment);

module.exports = router;
