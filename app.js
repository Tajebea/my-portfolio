const express = require('express');
const path = require('path');
const router = require('./route/authRoute');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.listen(4000, () => {
  console.log(`Server running at http://localhost:4000`);
});
