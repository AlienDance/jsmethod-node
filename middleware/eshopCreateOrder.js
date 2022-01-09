const Order = require('../models/Order');

const eshopCreateOrder = (io, socket, order) => {
  console.log('create order middleware');
  Order.create(order)
    .then(result => io.emit('NEW_ORDER'))
    .catch(err => console.log(err));
};

module.exports = eshopCreateOrder;
