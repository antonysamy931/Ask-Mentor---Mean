var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.sendfile("./views/Index.html")
  res.sendfile('./views/_AuthLayout.html')
});

module.exports = router;
