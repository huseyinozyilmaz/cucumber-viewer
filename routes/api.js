var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    var api = {
        version : '1.0'
    }
    res.json(api);
});

module.exports = router;