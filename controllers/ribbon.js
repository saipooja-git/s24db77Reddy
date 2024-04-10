var ribbon = require('../models/ribbon');
// List of all ribbon
// List of all ribbons
exports.ribbon_list = async function (req, res) {
    try {
        theribbon = await ribbon.find();
        res.send(theribbon);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.ribbon_view_all_Page = async function (req, res) {
    try {
        theribbons = await ribbon.find();
        res.render('ribbon', { title: 'ribbon Search Results', results: theribbons });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// // for a specific ribbon.
// exports.ribbon_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: ribbon detail: ' + req.params.id);
// };
//for a specific ribbon.
exports.ribbon_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await ribbon.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle ribbon create on POST.
exports.ribbon_create_post = async function (req, res) {
    console.log(req.body)
    let document = new ribbon();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"ribbon_type":"goat", "cost":12, "size":"large"}
    document.ribbon_type = req.body.ribbon_type;
    document.ribbon_usedfor = req.body.ribbon_usedfor;
    document.ribbon_length = req.body.ribbon_length;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle ribbon delete from on DELETE.
// exports.ribbon_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: ribbon delete DELETE ' + req.params.id);
// };
//Handle Costume delete on DELETE.
exports.ribbon_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await ribbon.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// // Handle ribbon update form on PUT.
// exports.ribbon_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: ribbon update PUT' + req.params.id);
// };
// Handle ribbon update form on PUT.
exports.ribbon_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await ribbon.findById(req.params.id)
        // Do updates of properties
        if (req.body.ribbon_type)
            toUpdate.ribbon_type = req.body.ribbon_type;
        if (req.body.ribbon_usedfor) toUpdate.ribbon_usedfor = req.body.ribbon_usedfor;
        if (req.body.ribbon_length) toUpdate.ribbon_length = req.body.ribbon_length;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle a show one view with id specified by query
exports.ribbon_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await ribbon.findById( req.query.id)
    res.render('ribbondetail',
    { title: 'ribbon Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    //Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.ribbon_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('ribboncreate', { title: 'ribbon Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a costume.
// query provides the id
exports.ribbon_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await ribbon.findById(req.query.id)
    res.render('ribbonupdate', { title: 'ribbon Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
    exports.ribbon_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await ribbon.findById(req.query.id)
    res.render('ribbondelete', { title: 'ribbon Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };