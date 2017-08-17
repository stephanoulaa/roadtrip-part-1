var express = require('express');

var app = express();

app.use(express.static('./public'));

//index1.html = Boston
//index2.html = NYC
//index3.html = Chicago
//index4.html = Boulder
//index5.html = SanFran

app.get('/', function(request, response){
    response.sendFile('./boston.html', {root: './public'})
})

app.get('/nyc', function(request, response){
    response.sendFile('./nyc.html', {root: './public'})
})

app.get('/chicago', function(request, response){
    response.sendFile('./chicago.html', {root: './public'})
})

app.get('/boulder', function(request, response){
    response.sendFile('./boulder.html', {root: './public'})
})

app.get('/sanfran', function(request, response){
    response.sendFile('./sanfran.html', {root: './public'})
})


//how to make URL's "pretty" without .html???
var port = 8000
var link = 'localhost:'
app.listen(port);

console.log(link + port)