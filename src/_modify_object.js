let c = {greenting: 'Hey'};
let d ;
d = c;
c.greenting = 'Hello';
console.log(d.greenting)

/**
 * Hello
 */

/**
 * c 是引用数据类型，c 赋值于 d 后
 * c 和 d 指向同一个位置，故改变其中一个就是改变了所有对象。
 */