const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout.ejs');

app.use(express.static('public'));
app.use(expressLayouts);

app.get('/', (req, res, next) => {
  console.log("Hi");
    res.render('home-view.ejs');
});

app.get('/fake-sign-up', (req, res, next) => {
    res.render('fake-sign-up-view.ejs');
});

app.get('/user-data', (req, res, next) => {
  console.log(req.query);

  res.render('user-data-view.ejs',
  {
    fullName: req.query.fullNameValue,
    email: req.query.emailValue,
    password: req.query.passwordValue
  });
});

app.listen(3000);
