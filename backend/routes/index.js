var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const controller = require("../controller/controller")

router.post("/contractdata", controller.getcontractId );

module.exports = router;
