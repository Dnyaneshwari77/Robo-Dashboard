const express = require('express');
const app = express();
const PORT = 3000; // Port number for your server


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

const connectDB=require("./db/connect")
const uploadDataFromFile=require("./populate")


const jsonFilePath = './jsondata.json'; // Replace with your JSON file path
uploadDataFromFile(jsonFilePath);

const start = async () => {
    try {
      await connectDB("mongodb+srv://dnyan_7499:dnyan_7499$123@cluster0.z6h9eyx.mongodb.net/internshala?retryWrites=true&w=majority&appName=Cluster0");
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log("error in connection");
      console.log(error);
    }
  };
  
  start();

