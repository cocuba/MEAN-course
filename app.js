/**
 * Created by cvallenilla on 12-04-17.
 */

// FIRSTS STEPS WITH NODE
// require('./instantHello.js');
// var goodbye = require('./talk/goodbye.js');
// var talk = require('./talk');
// var question = require('./talk/question.js');
//
// talk.hello('Cocuba');
// talk.intro();
//
// var answer = question("Q = What is the meaning of life?");
//
// console.log(answer);
//
// goodbye();

// FIRSTS STEPS WITH NODE
// var fs = require('fs');
//
// console.log("Going to get a File...");
//
// fs.readFile('sync-blocking.js',function (err, file) {
//     console.log('got the file');
//     fs.readFile('async-non-blocking.js', function (err, file) {
//         console.log('Got the other file');
//     });
// });
//
// console.log("Meanwhile, app continues");

var express = require('express');
var path = require('path');
var app = express();

//set the root folder
app.use(express.static(path.join(__dirname, 'public')));

//to set vars
app.set('port', 3000);

//get method to index
app.get('/', function (req, res) {
    console.log("GET the Homepage");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});
// get method to json
app.get('/json', function (req, res) {
    console.log('GET the json');
    res
        .status(200)
        .json( {"jsonData" : true} );
});

//where port listen requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('active in port ' + port);
});



