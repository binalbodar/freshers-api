var express = require('express');
var router = express.Router();


var UserMast = require('./Routes/UserMast')

router.use('/UserMast', UserMast);

module.exports = router;
