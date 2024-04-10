var express = require('express');
const ribbon_controlers= require('../controllers/ribbon');
var router = express.Router();
/* GET home page. */
router.get('/', ribbon_controlers.ribbon_view_all_Page );
router.get('/detail', ribbon_controlers.ribbon_view_one_Page);
router.get('/create', ribbon_controlers.ribbon_create_Page);
router.get('/update', ribbon_controlers.ribbon_update_Page);
router.get('/delete', ribbon_controlers.ribbon_delete_Page);
module.exports = router;
