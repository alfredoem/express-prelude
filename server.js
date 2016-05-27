var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('layouts/index');
});

app.get('/games', function (req, res) {
    
    function onResult(response) {
        res.send(response);
    }

    var options = {
        host: 'local.service.virtualspree.com',
        path: '/v1/games',
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + 
                new Buffer('user:passw0rd').toString('base64')
        }
    }

    var request = http.request(options, (res) => {
        var output = [];
        
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            output += chunk;
        });

        res.on('end', () => {
            var obj = JSON.parse(output);
            onResult(output);
        })

    });

    request.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });

    request.end();
});

app.listen(3000, function (err) {
    console.log('The Server is running =) in :3000');
    if (err) console.log(err);
});