
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

var mongoose   = require('mongoose');
mongoose.connect('mongodb://andrew:bevo2015@ds044229.mlab.com:44229/bevo');

var Bear     = require('./app/models/bear');

router.get('/', function(req, res) {
    res.json({ message: 'Yeah cmon aj is so cool!' });
});

router.use(function(req, res, next) {
  console.log('something is working');
  next();
});

router.get('/', function(req, res) {
  res.json({message: 'its api time'});
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
