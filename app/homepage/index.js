var page = require('page');
var template = require('./template');
var header = require('../header');

    
page('/', header, function(ctx, next){
    $('#main-container').append(template());  
});