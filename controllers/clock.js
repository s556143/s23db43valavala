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
    // for a specific clock.
exports.clock_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await clock.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

//Handle clock update form on PUT.
exports.clock_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await clock.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
if(req.body.price) toUpdate.price = req.body.price;
if(req.body.color) toUpdate.color = req.body.color;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

//Handle clock delete on DELETE.
exports.clock_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await clock.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.clock_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await clock.findById( req.query.id)
    res.render('clockdetail',
    { title: 'clock Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for creating a clock.
// No body, no in path parameter, no query.
// Does not need to be async
exports.clock_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('clockcreate', { title: 'clock Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for updating a clock.
// query provides the id
exports.clock_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await clock.findById(req.query.id)
    res.render('clockupdate', { title: 'clock Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };