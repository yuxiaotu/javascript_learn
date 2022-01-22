let greeting;
greetign = {} // Typo!
console.log(greetign)

/**
 * {}
 */

/**
 * 虽然在赋值时 greeting 错写成了 greetign
 * js 将它视为 global.greetign = {} (window.greetign = {})
 * 使用 'use strict'，确保当声明变量时必须赋值。
 */