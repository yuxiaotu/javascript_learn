/*
 * @Author: your name
 * @Date: 2021-06-06 11:24:28
 * @LastEditTime: 2021-06-06 12:54:45
 * @LastEditors: Please set LastEditors
 * @Description: JavaScript 中的原型和原型链
 * @FilePath: \javascript\Prototype\prototype.js
 */

var a = {};
var b = function() {};
//console.log(a.prototype);
//console.log(b.prototype);


let animal = {};
animal.name = 'Leo';
animal.energy = 10;

animal.eat = function(amount) {
    console.log(`${this.name} id eating`);
}

animal.sleep = function(length) {
    console.log(`${this.name} is sleeping`);
}

animal.play = function(length) {
    console.log(`${this.name} is playing`);
}