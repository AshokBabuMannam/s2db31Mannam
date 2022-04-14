var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

/* GET home page. */
router.get('/', costume_controlers.costume_view_all_Page );

module.exports = router;