const jwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const cookieExtract = req => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
};

const opts = {};
opts.jwtFromRequest = cookieExtract;
opts.secretOrKey = process.env.JWT_KEY;

const strategy = new jwtStrategy(opts, (jwt_payload, done) => {
  console.log('payload received: ', jwt_payload);
  User.findOne({ id: jwt_payload.id }, (err, user) => {
    console.log('payload id: ', jwt_payload.id);
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

const removeCookies = (res) => {
  res.cookie('user', '', { maxAge: 1 });
  res.cookie('jwt', '', { maxAge: 1 });
};

const checkUser = (req, res, next) => {
  console.log('checkUser func');
  const token = req.cookies['jwt'];
  const userAuth = req.cookies['user'];
  if (token && userAuth) {
    jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
      if (decodedToken) {
        User.findById(decodedToken.id)
          .then(result => {
            if (result) {
              console.log('decoded');
              res.cookie('user', 'isAuth', { httpOnly: false }).render('index', { token });
            } else {
              removeCookies(res);
              res.render('index');
              console.log('bad jwt..?');
            }
          })
          .catch(err => console.log(err));
      } else {
        removeCookies(res);
        res.render('index');
        console.log('cant decode token');
      }
    });
  } else {
    removeCookies(res);
    res.render('index');
    console.log('no token..');
  }
};

module.exports = { strategy, checkUser };
