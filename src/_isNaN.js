const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));

/**
 * false
 * false
 * true
 * false
 */

/**
 * Number.isNaN 检测是否为数字，如果是数字是否是 NaN
 * isNaN 检测是否是 number
 */