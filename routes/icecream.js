var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

/* GET home page. */
router.get('/', icecream_controlers.icecream_view_all_Page );

module.exports = router;