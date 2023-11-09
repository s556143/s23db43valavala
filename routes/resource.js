var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var clock_controller = require('../controllers/clock');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// clock ROUTES ///
// POST request for creating a clock.
router.post('/clock', clock_controller.clock_create_post);
// DELETE request to delete clock.
router.delete('/clock/:id', clock_controller.clock_delete);
// PUT request to update clock.
router.put('/clock/:id', clock_controller.clock_update_put);
// GET request for one clock.
router.get('/clock/:id', clock_controller.clock_detail);
// GET request for list of all clock items.
router.get('/clock', clock_controller.clock_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"clock", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
