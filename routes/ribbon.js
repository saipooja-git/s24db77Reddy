var express = require('express');
const ribbon_controlers= require('../controllers/ribbon');
var router = express.Router();
/* GET home page. */
router.get('/', ribbon_controlers.ribbon_view_all_Page );
module.exports = router;
