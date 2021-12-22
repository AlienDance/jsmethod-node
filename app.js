const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const generateLorem = require('./middleware/lorem');
const mongoose = require('mongoose');
require('dotenv').config();
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { strategy, checkUser } = require('./middleware/authMiddleware');
const passport = require('passport');

passport.use(strategy);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.get('/landing', (req, res) => {
  res.render('landing', { title: 'SOMETHING' });
});

app.use(
  history({
    index: '/'
  })
);

app.get('/', (req, res) => {
  checkUser(req, res);
});

app.post('/lorem', generateLorem);

app.use('/', authRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(result => {
    console.log('connected to db');
    app.listen(5000, console.log('server is up!'));
  })
  .catch(err => console.log(err));
