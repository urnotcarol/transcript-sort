var express = require('express');
var app = express();
var list = require('./public/list.js');

app.use(express.static('public'));

var hbs = require('hbs');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
  res.render('index', {entries: list.getAllEntries()});
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var post = server.address().port;
    console.log('app listening at http://%s:%s',host, post);
});
