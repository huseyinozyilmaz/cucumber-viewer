var express = require('express');
var gherkin = require('gherkin');

var app = express();
app.use(express.static('public'));
app.use('/vendor',  express.static(__dirname + '/node_modules'));


var parser = new gherkin.Parser();
//var gherkinDocument = parser.parse("Feature: ...");
//var pickles = new gherkin.Compiler().compile(gherkinDocument, "path/to/the.feature");


app.get('/', function (req, res) {
    
});



app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});