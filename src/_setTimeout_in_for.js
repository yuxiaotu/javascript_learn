for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

/**
 * 3 3 3
 * 0 1 2
 */

/**
 * 由于 JavaScript 的事件循环，setTimeout 回调会在遍历结束后才执行。
 * i 由 var 声明，所以这个值是全局作用域下的。通过 ++i 增加，最后 i = 3。
 * 
 * i 由 let 声明，是块级作用域，在每次遍历过程中，i 都有一个新值，
 * 并且每个值都在循环内的作用域中。
 */