var express = require('express');
var config  = require('../config.json');
var router  = express.Router();

router.get('/', function(req, res) {
    var api = {
        version : '1.0'
    }
    res.json(api);
});

router.get('/apps', function(req, res) {
    res.json(config.apps);
});

router.get('/apps/:id', function(req, res) {
    var app = config.apps.filter(function (el) {
        return (el.id === req.params.id);
    });
    res.json(app);
});

module.exports = router;