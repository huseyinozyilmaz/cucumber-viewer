var express = require('express');
var gherkin = require('gherkin');
var util    = require('util');
var config  = require('./config.json');

var PORT = process.env.PORT || 4000;

// View Engine Setup
var app = express();
app.use(express.static('public'));
app.use('/vendor',  express.static(__dirname + '/node_modules'));


var parser = new gherkin.Parser();
//var gherkinDocument = parser.parse("Feature: ...");
//var pickles = new gherkin.Compiler().compile(gherkinDocument, "path/to/the.feature");


app.get('/', function (req, res) {
    
});



app.listen(PORT, function () {
    console.log(util.format('Example app listening on port %d!', PORT));
});