let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

/**
 * true 
 * false
 * false
 */

/**
 * == 只检查两边的值是否一样
 * === 会检查值和类型
 */

/**
 * new Number() 是一个内建的函数构造器，
 * 虽然它看着像是一个 number，
 * 但它实际上并不是一个真实的 number：它有一堆额外的功能并且它是一个对象。
 */

/**
 * a == b ，两者的值一样
 * a === b 和 c ==== c 的类型不一样
 */

