const express = require('express');
const app = express();
const PORT = 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Sample data to simulate a database
let posts = [];

// Route to display all blog posts
app.get('/posts', (req, res) => {
    res.render('posts', { posts });
});

// Route to add a new blog post
app.post('/posts', (req, res) => {
    const { title, body } = req.body;
    posts.push({ title, body });
    res.redirect('/posts');
});

// Route to display a specific blog post
app.get('/posts/:title', (req, res) => {
    const title = req.params.title;
    const post = posts.find(p => p.title === title);
    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
