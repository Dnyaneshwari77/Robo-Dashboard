const { model } = require("mongoose");
const fs = require('fs'); 

const DataModel=require("./model/dataModel")

async function uploadDataFromFile(filename) {
    try {
      // Read JSON file using promises
      const data = await fs.promises.readFile(filename, 'utf8');
      const jsonData = JSON.parse(data);
  
      // Insert JSON data into MongoDB using Mongoose
      const result = await DataModel.insertMany(jsonData);
      console.log('Data uploaded successfully:', result.length, 'documents inserted');
    } catch (error) {
      console.error('Error uploading data to MongoDB:', error);
    }
  }
  
module.exports=uploadDataFromFile;