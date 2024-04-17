var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ribbon_controller = require('../controllers/ribbon');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// ribbon ROUTES ///
// POST request for creating a ribbon.
router.post('/ribbon', ribbon_controller.ribbon_create_post);
// DELETE request to delete ribbon.
router.delete('/ribbon/:id', ribbon_controller.ribbon_delete);
// PUT request to update ribbon.
router.put('/ribbon/:id', ribbon_controller.ribbon_update_put);
// GET request for one ribbon.
router.get('/ribbon/:id', ribbon_controller.ribbon_detail);
// GET request for list of all ribbon items.
router.get('/ribbon', ribbon_controller.ribbon_list);
module.exports = router;
// //for a specific Costume.
// exports.costume_detail = async function(req, res) {
// console.log("detail" + req.params.id)
// try {
// result = await Costume.findById( req.params.id)
// res.send(result)
// } catch (error) {
// res.status(500)
// res.send(`{"error": document for id ${req.params.id} not found`);
// }
// };
// 