const {getHomePage} = require('../controller/controll');
const express = require('express');
const router = express.Router();

router.get('/', getHomePage);

module.exports = router;