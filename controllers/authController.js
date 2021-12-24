const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const login_get = (req, res) => {
  res.render('login');
};

const signup_get = (req, res) => {
  res.render('signup');
};

const maxAge = 1000 * 60 * 60 * 24 * 3;

const login_post = (req, res) => {
  console.log('login post');
  const user = { email: req.body.data.email, password: req.body.data.password };
  User.findOne({ email: user.email }).then(async result => {
    if (result) {
      const auth = await bcrypt.compare(user.password, result.password);
      if (auth) {
        console.log('successful auth');
        const token = jwt.sign({ id: result._id }, process.env.JWT_KEY);
        res.cookie('user', 'isAuth', { httpOnly: false, maxAge });
        res.cookie('jwt', token, { httpOnly: true, maxAge });
        res.json({ succes: 'success' });
      } else {
        console.log('Password is incorrect!');
        res.json({ passwordError: 'Password is incorrect!' });
      }
    } else {
      console.log('That email is not registered!');
      res.json({ emailError: 'That email is not registered!' });
    }
  });
};

const signup_post = (req, res) => {
  console.log('signup post');
  const user = { email: req.body.data.email, password: req.body.data.password };
  User.findOne({ email: user.email })
    .then(result => {
      if (!result) {
        User.create(user)
          .then(result => {
            const token = jwt.sign({ id: result._id }, process.env.JWT_KEY);
            res.cookie('user', 'isAuth', { httpOnly: false, maxAge });
            res.cookie('jwt', token, { httpOnly: true, maxAge }).json({ success: 'Successful signup!' });
          })
          .catch(err => console.log(err));
      } else {
        console.log('That email is already registered!');
        res.json({ emailError: 'That email is already registered!' });
      }
    })
    .catch(err => console.log(err));
};

const logout_post = (req, res) => {
  console.log('logout req');
  res.cookie('user', '', { maxAge: 1 });
  res.cookie('jwt', '', { maxAge: 1 });
  res.send('Successful logout!');
};

module.exports = {
  login_get,
  signup_get,
  login_post,
  signup_post,
  logout_post
};
