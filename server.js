var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('layouts/index');
});


app.listen(3000, function(err){
    console.log('The Server is running =) in :3000');
    if (err) console.log(err);
});