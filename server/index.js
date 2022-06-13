const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotnev = require("dotenv");

const port = process.env.port || 5000;
const db =
  "mongodb+srv://Admin:1234@mikmikfood.tnowx.mongodb.net/?retryWrites=true&w=majority";
dotnev.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request, response) => {
  response.send("shahar");
});

const costumersSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  first_name: String,
  last_name: String,
  address: {
    street: [String],
    number: [String],
    city: [String],
  },
});

const costumers = mongoose.model("costumers", costumersSchema);
const costumersData = [
  {
    email: "ss",
    first_name: "shahar",
    last_name: "shazo",
    address: {
      street: "sss",
      number: "5",
      city: "shhjkn",
    },
  },
  {
    email: "talsssia",
    first_name: "shahar",
    last_name: "shazo",
    address: {
      street: "sss",
      number: "5",
      city: "shhjkn",
    },
  },
];
costumers
  .insertMany(costumersData)
  .then((value) => {
    console.log("Saved Successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//Connect
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => {
      console.log(`server is running ${port}`);
    })
  )
  .catch((error) => console.log("dont succeed to connect"));

// var mikMik = db.db("MikMikFood");
// mikMik.createCollection("customers");
// mikMik.customers.insert({
//   email: "shaharozari@gmail.com",
//   first_name: "Shahar",
//   last_name: "Shazo",
//   address: {
//     street: "ha'shita",
//     number: "19/1",
//     city: "maala adummim",
//   },
// });
