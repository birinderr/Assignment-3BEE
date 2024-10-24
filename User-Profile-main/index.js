// index.js
const express = require('express');
const path = require('path'); // Import path module
const app = express();
const port = 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Sample user data
const users = {
  john: { age: 25, hobby: 'Photography' },
  jane: { age: 30, hobby: 'Reading' },
  doe: { age: 22, hobby: 'Gaming' }
};

// Route for user profile page
app.get('/profile/:username', (req, res) => {
  const username = req.params.username.toLowerCase();
  const user = users[username];

  if (user) {
    res.render('profile', { username, age: user.age, hobby: user.hobby });
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
