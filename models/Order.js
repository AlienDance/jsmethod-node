const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    address: {
      type: String
    }
  },
  order: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
