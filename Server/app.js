const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors')



const robotRouter = require("./routers/robotRouter");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to the Robot Dashboard API");
});

app.use(express.json());

// Use the robotRouter for '/api' routes
app.use("/api", robotRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
