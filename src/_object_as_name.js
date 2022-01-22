const a = {}
const b = {key: 'b'}
const c = {key: 'c'}

a[b] = 123
a[c] = 456

console.log(a[b])

/**
 * 456
 */

/**
 * 将一个对象 b 设置为对象 a 的键，且相应的值为 123
 * 当字符串化为对象时，会变成 "[object Object]"。
 * a["[object Object]"] = 123
 * 在一次做同样的事情
 * a["[object Object]"] = 456
 * 打印 a[b] 也就是 a["[object Object]"]
 */