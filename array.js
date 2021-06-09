/*
 * @Author: your name
 * @Date: 2021-06-07 21:10:22
 * @LastEditTime: 2021-06-07 22:22:11
 * @LastEditors: Please set LastEditors
 * @Description: 数组方法
 * @FilePath: \javascript\Prototype\array.js
 */


nums = [1, 2, 3, 4];

/**
 * forEach()
 * 返回值是 undefined
 */
// resOfForeach = nums.forEach((value, index, _array) => {
//     _array[index] = value + 1;
// })
console.log(resOfForeach);
console.log(nums);

/**
 * map()
 * 返回处理过后的数据
 */
resOfMap = nums.map((value, index, _array) => value + 1);
console.log(resOfMap);
console.log(nums);

/**
 * filter()
 * 返回符合条件的值的集合
 */
resOfFilter = nums.filter((value, index) => value % 2 == 0)
console.log(resOfFilter);
console.log(nums);

/**
 * find()
 * 如果找到返回这个值，没找到返回 undefined
 * 
 * findIndex()
 * 如果找到返回这个值的下标，没找到返回 undefined
 */
resOfFind = nums.find(value => value === 5);
resOfFindIndex = nums.find(value => value === 3);
console.log(resOfFind);
console.log(resOfFindIndex);

/**
 * every()
 * 如果每一个值都符合条件就返回 true
 * 
 * some()
 * 至少有一个值符合条件就返回 true
 */
resOfEvery = nums.every(value => value < 10);
resOfSome = nums.some(value => value === 4);
console.log(resOfEvery);
console.log(resOfSome);

/**
 * reduce()
 * 返回累计处理的结果
 */
resOfReduce = nums.reduce((accumulator, currentValue, index, _array) => accumulator + currentValue);
console.log(resOfReduce);