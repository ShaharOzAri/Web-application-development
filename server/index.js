const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotnev = require("dotenv");
dotnev.config();

const port = process.env.SERVER_PORT;
const db = process.env.MONGO_CONNECTION_URL;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Connect
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`server is running ${port}`);
    })
  )
  .catch((error) => console.log("dont succeed to connect"));

//Routes API
const userAPI = require("./Controller/UserController");
const productAPI = require("./Controller/ProductController");
const orderAPI = require("./Controller/OrderController");
const categoryAPI = require("./Controller/CategoryController");
const shopsLocationAPI = require("./Controller/ShopsLocationsController");

//Route use
app.use("/user", userAPI);
app.use("/product", productAPI);
app.use("/order", orderAPI);
app.use("/category", categoryAPI);
app.use("/location", shopsLocationAPI);

