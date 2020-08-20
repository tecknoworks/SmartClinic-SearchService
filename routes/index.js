var express = require('express');
var router = express.Router();

const searchRouter = require('./search');

router.use('/search', searchRouter);

module.exports = router;
