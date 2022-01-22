fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))

/**
 * 前一个.then()中回调方法返回的结果
 */

/**
 * 第二个.then中res的值等于前一个.
 * then中的回调函数返回的值。 
 * 你可以像这样继续链接.then，将值传递给下一个处理程序。
 */