const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello this is my first express app!');
});

app.get('/pranay', (req, res) => {
    res.send('This is Pranay endpoint!');
});

app.listen(PORT, () => {
    console.log(`Express server running ${PORT}`);
});

/* app.listen(PORT, function() {
    console.log(`Express server running ${PORT}`);
}); */