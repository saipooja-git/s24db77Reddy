var express = require('express');
var passport = require('passport');
const ribbon_controlers= require('../controllers/ribbon');
var router = express.Router();
/* GET home page. */
router.get('/', ribbon_controlers.ribbon_view_all_Page );
router.get('/detail', ribbon_controlers.ribbon_view_one_Page);
router.get('/create', ribbon_controlers.ribbon_create_Page);
router.get('/update', ribbon_controlers.ribbon_update_Page);
router.get('/delete', ribbon_controlers.ribbon_delete_Page);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    // router.get('/update', secured,ribbon_controlers.ribbon_update_Page);
router.get('/create',secured, ribbon_controlers.ribbon_create_Page);
router.get('/delete',secured, ribbon_controlers.ribbon_delete_Page);
router.get('/update', secured, ribbon_controlers.ribbon_update_Page);
module.exports = router;

