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
var app = express();

//to set vars
app.set('port', 3000);

//where port listen requests
app.listen(app.get('port'), function () {
    console.log('active in port' + app.get('port'));
})



