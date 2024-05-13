const mongoose = require("mongoose");
const fs = require("fs");
const Robot = require("./model/roboData"); // Assuming you have a Robot model defined

require("dotenv").config();


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Read data from file
    const rawData = fs.readFileSync("data.json");
    const robotsData = JSON.parse(rawData);

    // Insert data into MongoDB
    Robot.insertMany(robotsData)
      .then(() => {
        console.log("Data inserted successfully");
        mongoose.connection.close(); // Close the connection after insertion
      })
      .catch((err) => {
        console.error("Error inserting data:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
