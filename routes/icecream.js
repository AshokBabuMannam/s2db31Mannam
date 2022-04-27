var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', icecream_controlers.icecream_view_all_Page );
/// COSTUME ROUTES ///
router.get('/detail', icecream_controlers.icecream_view_one_Page); 

router.get('/create', icecream_controlers.icecream_create_Page); 

router.get('/update',secured, icecream_controlers.icecream_update_Page); 

router.get('/delete', icecream_controlers.icecream_delete_Page);

module.exports = router;