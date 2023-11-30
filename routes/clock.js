var express = require('express');
const clock_controlers= require('../controllers/clock');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


/* GET clock */
router.get('/', clock_controlers.clock_view_all_Page );

// GET request for one clock.
router.get('/clock/:id', clock_controlers.clock_detail);
module.exports = router;

/* GET detail clock page */
router.get('/detail', clock_controlers.clock_view_one_Page);

/* GET create clock page */
router.get('/create', secured, clock_controlers.clock_create_Page);

/* GET create update page */
router.get('/update', secured, clock_controlers.clock_update_Page);

/* GET delete clock page */
router.get('/delete', secured ,clock_controlers.clock_delete_Page);