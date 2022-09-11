const express = require('express');
const Controller = require('../controllers/controller.js');

const router = express.Router();

router.get('/getProduct',Controller.getProduct);

module.exports = router;