function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

/**
 * underfined 
 * ReferenceError
 */

/**
 * var 声明的 name 变量，存在变量提升，在赋值之前已经有默认值 undefined
 * 通过 let 和 const 声明的 age 变量在赋值之前不能访问，会返回 ReferenceError
 */