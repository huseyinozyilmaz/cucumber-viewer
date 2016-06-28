var express    = require('express');
var bodyParser = require('body-parser');
var gherkin    = require('gherkin');
var util       = require('util');
var config     = require('./config.json');
var api        = require('./routes/api');

var PORT = process.env.PORT || 4000;

// View Engine Setup
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/vendor',  express.static(__dirname + '/node_modules'));


var parser = new gherkin.Parser();
//var gherkinDocument = parser.parse("Feature: ...");
//var pickles = new gherkin.Compiler().compile(gherkinDocument, "path/to/the.feature");

console.log(config.apps[0].name);

app.get('/', function (req, res) {
    
});
app.use('/api', api);




app.listen(PORT, function () {
    console.log(util.format('Example app listening on port %d!', PORT));
});