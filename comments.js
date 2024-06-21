// Create web server
// Create an express app
// Create a route for GET request to /comments
// Respond with a JSON object with some comments
// Start the server and listen on port 3000
// Use curl to make a GET request to /comments
// Make a POST request to /comments with a JSON body
// Respond with a JSON object with a message
// Respond with a JSON object with the data from the request
// Respond with a JSON object with the data from the request
// Respond with a JSON object with the data from the request

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.json({comments: ["This is a comment", "This is a comment", "This is a comment"]});
});

app.post('/comments', (req, res) => {
    res.json({message: "This is a POST request"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
