var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ribbon', { title: 'Search Result ribbons' });
});
 
module.exports = router;