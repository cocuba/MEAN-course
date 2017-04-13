/**
 * Created by cvallenilla on 12-04-17.
 */

require('./instantHello.js');
var goodbye = require('./talk/goodbye.js');
var talk = require('./talk');
var question = require('./talk/question.js');

talk.hello('Cocuba');
talk.intro();

var answer = question("Q = What is the meaning of life?");

console.log(answer);

goodbye();

