// index.js
const express = require('express');
const path = require('path'); 
const app = express();
const port = 8080;


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


const products = [
  { name: 'Product 1', price: 10.99 },
  { name: 'Product 2', price: 15.49 },
  { name: 'Product 3', price: 20.00 },
];

app.get('/products', (req, res) => {
  const searchQuery = req.query.search?.toLowerCase();
  const filteredProducts = searchQuery
    ? products.filter(product => product.name.toLowerCase().includes(searchQuery))
    : products;

  res.render('products', { products: filteredProducts });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
