var express = require('express');
var path = require('path');
var app = express();

app.get('/alive.js', function(request, response) {
    response.sendFile(path.join(__dirname+'/public/alive.js'));
    console.log(request.ip + ' is alive');
});

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname+'/public/alive.html'));
    console.log(request.ip + ' loaded page');
});

app.listen(3000);
console.log('alive server running on port 3000');
