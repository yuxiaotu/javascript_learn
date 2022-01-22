const obj = {1: 'a', 2:'b', 3:'c'};
const set = new Set([1,2,3,4,5])

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has(1);
set.has('1');

/**
 * true
 * true
 * true
 * false
 */

/**
 * 对象的键在底层都是字符串，hasOwnProperty(1) 和 hasOwnProperty("1") 一致。
 * 集合中没有 “1”，所以 set.has("1") 返回 false。
 */