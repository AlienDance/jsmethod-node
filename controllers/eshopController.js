const Order = require('../models/Order');
const generateFakerForm = require('../middleware/fakerForm');

const homepage_get = (req, res) => {
  res.render('eshop');
};

const orders_get = (req, res) => {
  console.log('get orders request');
  Order.find()
    .sort({ date: -1 })
    .then(result => res.json(result))
    .catch(err => console.log(err));
};

const fakerform_get = (req, res) => {
  console.log('fakerform request');
  res.json(generateFakerForm());
};

module.exports = {
  homepage_get,
  orders_get,
  fakerform_get
};
