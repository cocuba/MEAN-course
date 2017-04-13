/**
 * Created by cvallenilla on 13-04-17.
 */

var filename = "index.js";

var hello = function (name) {
    console.log("Hello " + name);
};

var intro = function () {
    console.log("I'm a Node File called " + filename);
};

module.exports = {
    hello : hello,
    intro : intro
};