const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('shop', { 
    title: 'Shop (EJS)',
    products: ['Laptop', 'Phone', 'Tablet']
  });
});

module.exports = router;