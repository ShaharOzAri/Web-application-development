const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotnev = require("dotenv");

const port = 5000;
const db =
  "mongodb+srv://Admin:1234@mikmikfood.tnowx.mongodb.net/?retryWrites=true&w=majority";
dotnev.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/signup", (request, response) => {
  // console.log(request.body.params);
  insertUSer(request.body.params);
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

const costumersSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  first_name: String,
  last_name: String,
  password: String,
});

const costumers = mongoose.model("costumers", costumersSchema);

function insertUSer(user) {
  costumers
    .insertMany(user)
    .then((value) => {
      console.log("Saved Successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
