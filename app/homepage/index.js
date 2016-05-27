var page = require('page');
var template = require('./template');
var header = require('../header');
var axios = require('axios');

page('/', header, loadGames, function(ctx, next){
    $('#main-container').append(template(ctx.games));  
});

function loadGames(ctx, next) {

    axios
        .get('/games')
        .then(function(response){
            ctx.games = response.data;
            next();
        });
    
}
