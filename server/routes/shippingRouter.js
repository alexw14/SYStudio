const express = require('express');
const router = express.Router();

const shippingController = require('../controllers/shippingController');

router.get('/', shippingController.getShipping);
router.post('/', shippingController.addShipping);
router.post('/edit/:orderId', shippingController.editShipping);

module.exports = router;
