# Robo-Dashboard

This repository contains a React frontend and a Node.js backend server.

## Installation

### React App

1. Navigate to the `my-app` directory:
   ```bash
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Server

1. Navigate to the `Server` directory:
   ```bash
   cd Server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `Server` directory.
   - Add the following environment variables:
     ```dotenv
     MONGODB_URI=your_mongodb_uri
     PORT=your_chosen_port_number
     ```
     Replace `your_mongodb_uri` with your MongoDB URI and `your_chosen_port_number` with the desired port number for the server.

4. Insert static data into MongoDB:
   - Ensure MongoDB is running.
   - Run the following command to insert static data into the database:
     ```bash
     nodemon ./insertData.js
     ```
     This will populate your MongoDB database with predefined static data.

5. Start the server:
   - Stop the current server if it's running.
   - Run the following command to start the server:
     ```bash
     nodemon ./app.js
     ```

## Usage

After starting the server, ensure it is running on the specified port (default is 5000). Then, access your React app and refresh the page to call the APIs hosted by the server.

## Note

- Make sure you have Node.js and npm installed on your machine.
- The MongoDB URI and port number need to be correctly configured in the `.env` file before starting the server.
- For inserting static data, ensure that MongoDB is running locally or at the specified URI.
