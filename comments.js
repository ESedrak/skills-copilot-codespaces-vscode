// Create Web Server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Create Web Server
const app = express();
app.use(bodyParser.json());

// Load comments
let comments = JSON.parse(fs.readFileSync('./comments.json'));

// Define routes
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.send({ message: 'Comment added' });
});

// Start Web Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});