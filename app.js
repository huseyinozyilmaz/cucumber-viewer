var express    = require('express');
var bodyParser = require('body-parser');
var util       = require('util');
var api        = require('./routes/api');

var PORT = process.env.PORT || 4000;

// View Engine Setup
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/vendor',  express.static(__dirname + '/node_modules'));


app.get('/', function (req, res) {
    
});
app.use('/api', api);




app.listen(PORT, function () {
    console.log(util.format('Example app listening on port %d!', PORT));
});