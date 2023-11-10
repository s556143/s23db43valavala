var express = require('express');
const clock_controlers= require('../controllers/clock');
var router = express.Router();
/* GET clock */
router.get('/', clock_controlers.clock_view_all_Page );

// GET request for one costume.
router.get('/clock/:id', clock_controlers.clock_detail);
module.exports = router;
