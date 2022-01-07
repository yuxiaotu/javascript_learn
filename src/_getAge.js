function getAge() {
  'use strict'
  age = 21;
  console.log(age)
}

getAge()

/**
 * ReferenceError
 */

/**
 * "use strict" 可以确保不会意外地声明全局变量
 * 从来没有声明变量 age，所以会抛出错误
 */