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

//Chat
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  //console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
  });

  socket.on("disconnect", () => {
    //console.log("User Disconnected", socket.id);
  });
});

//Locations

server.listen(5000, () => {
  console.log("server running");
});
