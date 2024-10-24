const express = require('express');
const app = express();
const PORT = 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Sample data to simulate a database
const items = [
    { title: 'Inception', type: 'movie' },
    { title: 'The Great Gatsby', type: 'book' },
    { title: 'Interstellar', type: 'movie' },
    { title: '1984', type: 'book' },
    { title: 'The Matrix', type: 'movie' },
];

// Search route
app.get('/search', (req, res) => {
    const query = req.query.q || '';
    const results = items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    res.render('search', { query, results });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
