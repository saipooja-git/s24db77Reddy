var ribbon = require('../models/ribbon');
// List of all ribbon
// List of all Costumes
exports.ribbon_list = async function(req, res) {
    try{
    theribbon = await ribbon.find();
    res.send(theribbon);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.ribbon_view_all_Page = async function(req, res) {
    try{
    theribbons = await ribbon.find();
    res.render('ribbon', { title: 'ribbon Search Results', results: theribbons });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };    
        
// for a specific ribbon.
exports.ribbon_detail = function(req, res) {
res.send('NOT IMPLEMENTED: ribbon detail: ' + req.params.id);
};
// Handle ribbon create on POST.
exports.ribbon_create_post = async function(req, res) {
    console.log(req.body)
    let document = new ribbon();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.ribbon_type = req.body.ribbon_type;
    document.ribbon_usedfor = req.body.ribbon_usedfor;
    document.ribbon_length = req.body.ribbon_length;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle ribbon delete from on DELETE.
exports.ribbon_delete = function(req, res) {
res.send('NOT IMPLEMENTED: ribbon delete DELETE ' + req.params.id);
};
// Handle ribbon update form on PUT.
exports.ribbon_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: ribbon update PUT' + req.params.id);
};
