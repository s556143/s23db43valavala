var express = require('express');
const clock_controlers= require('../controllers/clock');
var router = express.Router();
/* GET clock */
router.get('/', clock_controlers.clock_view_all_Page );
module.exports = router;
