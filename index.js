const express = require('express'); // Import express module
const app = express(); // Create app instance
const path = require('path'); // Work with directories/files

const PORT = process.env.PORT || 8080; // Specify port, process.env.PORT is used for dynamic PORT allocation

app.use(express.static(path.join(__dirname, 'client'))); // Apply middleware to serve static assets

// Basic GET request to '/' endpoint
app.get('/', (req, res) => {
    res.send('index.html');
});

// Make your App listen on PORT, default: 8080 or else process.env.PORT
app.listen(PORT, () => {
    console.log(`Express server running ${PORT}`);
});

// Alternative method of making your App listen on PORT, default: 8080 or else process.env.PORT
/* app.listen(PORT, function() {
    console.log(`Express server running ${PORT}`);
}); */