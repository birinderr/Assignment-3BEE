const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let tasks = []; // Array to store tasks

// Route to display the to-do list
app.get('/todo', (req, res) => {
    res.render('index', { tasks });
});

// Route to handle adding a new task
app.post('/todo', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask); // Add task to the list
    res.redirect('/todo'); // Redirect to the to-do list page
});

// Route to handle deleting a task
app.post('/todo/delete', (req, res) => {
    const index = req.body.index;
    tasks.splice(index, 1); // Remove task from the list
    res.redirect('/todo'); // Redirect to the to-do list page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
