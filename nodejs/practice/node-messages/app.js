// app.js
const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true })); // for form posts
app.use(express.json());                         // for JSON

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');   // use EJS now
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);

server.listen(3000, () => console.log('http://localhost:3000'));