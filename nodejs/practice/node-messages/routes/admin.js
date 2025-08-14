const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
  res.render('add-product', { title: 'Add Product' });
});

router.post('/add-product', (req, res) => {
  console.log('Added product:', req.body.title);
  res.redirect('/');
});

module.exports = router;