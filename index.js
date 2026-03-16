// 1. Import the express library
const express = require('express');
// import express from "express";

const cors = require('cors');
    // 2. Initialize the express application
const app = express();

// 3. Define the Port number
const PORT = 3000;

app.use(express.json());


// This route receives data
app.post('/api/user', (req, res) => {
    const userData = req.body; // This is the data sent from the frontend
    console.log("Data received:", userData);

    // Sending a response back to the frontend
    res.json({
        message: "User data received successfully!",
        receivedData: userData
    });
});

// 5. Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`🚀 Server is live at http://localhost:${PORT}`);
});