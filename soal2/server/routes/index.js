const express = require('express');
const router = express.Router();
const transactions = require('../controllers').transactions;

router.get('/', transactions.listData);

router.post('/', transactions.createData);

module.exports = router;
