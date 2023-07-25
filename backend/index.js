const express = require("express");
require("dotenv").config();
const router = require("./routes/index");
const cors = require("cors");
const connectDB = require("./db/db");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares used by app
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app router
app.use("/api", router);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO DB SUCCESSFULLY..!");

    app.listen(PORT, () => {
      console.log(`server is running and listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
