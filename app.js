const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main-layout.ejs');

app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

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


app.get('/fake-login', (req, res, next) => {
  res.render('fake-login-view.ejs');
});

app.post('/fake-login', (req, res, next) => {
  console.log('POST submission!');
  console.log( req.body );
    // req.query = {}
let email = req.body.email;
let password = req.body.password;
const emailIron = "ironhacker@gmail.com";
const pIron = "password";

if (email === emailIron && pIron === password ){
  res.render('welcome-view.ejs');
} else {
  res.render('go-away-view.ejs');
}
});

app.listen(3000);
