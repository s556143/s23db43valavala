var clock = require('../models/clock');
// List of all clocks
exports.clock_list = function(req, res) {
res.send('NOT IMPLEMENTED: clock list');
};
// for a specific clock.
exports.clock_detail = function(req, res) {
res.send('NOT IMPLEMENTED: clock detail: ' + req.params.id);
};
// Handle clock create on POST.
exports.clock_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: clock create POST');
};
// Handle clock delete form on DELETE.
exports.clock_delete = function(req, res) {
res.send('NOT IMPLEMENTED: clock delete DELETE ' + req.params.id);
};
// Handle clock update form on PUT.
exports.clock_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: clock update PUT' + req.params.id);
};


// List of all clock
exports.clock_list = async function(req, res) {
    try{
    theclock = await clock.find();
    res.send(theclock);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.clock_view_all_Page = async function(req, res) {
    try{
    theclock = await clock.find();
    res.render('clock', { title: 'clock Search Results', results: theclock });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle clock create on POST.
exports.clock_create_post = async function(req, res) {
    console.log(req.body)
    let document = new clock();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.name = req.body.name;
    document.price = req.body.price;
    document.color = req.body.color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    