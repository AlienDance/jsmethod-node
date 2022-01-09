const express = require('express');
const router = express.Router();
const eshopController = require('../controllers/eshopController');

router.get('/', eshopController.homepage_get);

router.get('/orders', eshopController.orders_get);

router.get('/fakerform', eshopController.fakerform_get);

module.exports = router;
