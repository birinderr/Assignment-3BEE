const express = require('express');
const app = express();
const PORT = 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Sample user login state (set to true or false)
let isLoggedIn = true; // Change this to false to simulate not logged in

// Route to display the home page
app.get('/', (req, res) => {
    res.render('index', { isLoggedIn });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
