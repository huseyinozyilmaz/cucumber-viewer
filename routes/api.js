var express   = require('express');
var path      = require('path');
var config    = require('../config.json');
var gherkin   = require('gherkin');
var recursive = require('recursive-readdir');

var router  = express.Router();


var parser = new gherkin.Parser();
//var gherkinDocument = parser.parse("Feature: ...");
//var pickles = new gherkin.Compiler().compile(gherkinDocument, "path/to/the.feature");


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
    res.json(getAppById(req.params.id));
});

router.get('/apps/:id/features', function(req, res) {
    var mock = [
    'Pellentesque et ligula eu sem aliquam lacinia vel id massa',
    'Cras at urna non diam imperdiet tempus',
    'Pellentesque rutrum purus et cursus aliquam',
    'Nulla sed orci interdum, iaculis metus eu, fermentum neque',
    'Morbi nec lectus nec massa sodales',
    'Integer vel ipsum eget urna vulputate mattis',
    'Etiam cursus elit nec tristique bibendum',
    'Maecenas sed lorem et eros dictum feugiat',
    'Nulla eget sem sed lacus ornare rhoncus',
    'Curabitur ac odio non purus gravida ornare vitae eget massa',
    'Vivamus pellentesque'
    ];

    var selectedApp = getAppById(req.params.id);
    console.log(selectedApp);
    var selectedAppPath = selectedApp[0].path;

    function ignoreFunc(file, stats) {
        // `file` is the absolute path to the file, and `stats` is an `fs.Stats`
        // object returned from `fs.lstat()`.
        return stats.isFile() && path.extname(file) !== ".feature";
    }

    recursive(selectedAppPath, [ignoreFunc], function (err, files) {
        // Files is an array of filename
        var fileNames = []; 
        files.forEach(function(item, index){
            fileNames.push({
                path : item,
                fileName : path.basename(item),
                name : path.basename(item, '.feature')
            });
        });
        res.json(fileNames);
    });
    
});

function getAppById(id) {
    return config.apps.filter(function (el) {
        return (el.id === id);
    });
}

module.exports = router;