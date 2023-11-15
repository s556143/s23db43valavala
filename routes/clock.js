var express = require('express');
const clock_controlers= require('../controllers/clock');
var router = express.Router();
/* GET clock */
router.get('/', clock_controlers.clock_view_all_Page );

// GET request for one clock.
router.get('/clock/:id', clock_controlers.clock_detail);
module.exports = router;

/* GET detail clock page */
router.get('/detail', clock_controlers.clock_view_one_Page);

/* GET create clock page */
router.get('/create', clock_controlers.clock_create_Page);

/* GET create update page */
router.get('/update', clock_controlers.clock_update_Page);
