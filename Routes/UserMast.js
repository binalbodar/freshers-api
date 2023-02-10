var express = require('express');
var router = express.Router();

var _userMast = require('../Controllers/UserMast.Controllers');

router.post('/UserMastFill', _userMast.UserMastFill)
router.post('/UserMastSave', _userMast.UserMastSave)
router.post('/UserMastDelete', _userMast.UserMastDelete)

module.exports = router;
