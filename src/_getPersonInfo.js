function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia',
const age = 21;

getPersonInfo`${person} is ${age} yeas old`

/**
 * ["", " is ", " years old"] 
 * "Lydia"
 * 21
 */

/**
 * 第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值
 */