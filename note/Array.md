# Array 数组结构

- [Array 的作用和创建方法](#1-Array-的作用和创建方法)
- [Array 迭代方法](#2-Array-的迭代方法)
  - [forEach()](#21-forEach)
  - [map()](#22-map)
  - [filter()](#23-filter)
  - [every()](#24-every)
  - [some()](#25-some)
  - [reduce()](#26-reduce)
- [Array 元素修改方法](#3-Array-元素修改方法)
  - [fill()](#31-fill)
  - [pop()](#32-pop)
  - [push()](#33-push)
  - [reverse()](#34-reverse)
  - [sort()](#35-sort)
  - [splice()](#36-splice)
  - [copyWithin()](#37-copyWithin)
- [Array 元素访问方法](#4-Array-元素访问方法)
  - [concat()](#41-concat)
  - [includes()](#42-includes)
  - [join()](#43-join)
  - [slice()](#44-slice)
- [其他 Array 方法](#5-其他方法)

# 1. Array 的作用和创建方法
`Array` 是 `Js` 中常用的一种数据结构，数组中的每一项都被叫做 「元素」，元素可以是任何类型的数据。每个元素都拥有一个索引值可以用来标识这个元素。数组的长度是有限的，不大于 `2^32-1` 。 

使用数组字面量的方法创建数组：

```js
const fruits = ['Apple', 'Banana', `Cherry`];
```


# 2. Array 的迭代方法
`Array` 提供了下面这些方法用于迭代和操作数组内容：
- forEach()
- map()
- filter()
- every()
- some()
- reduce()

## 2.1. forEach()
按升序为数组中有效的每一项执行一次回调函数，那些已经删除和没有初始化的项将被跳过。

- 返回值：无返回值

```javascript
fruits.forEach((currentValue, index, currentArray) => 
  console.log(currentValue.toLowerCase());
);
```
```
输出结果：
apple
banana
cherry
```

## 2.2. map()
每个元素执行一次回调函数，将所有结果组成一个新的数组返回。使用方法和参数跟 `forEach()` 相似。

- 返回值：由原数组的每一项执行回调函数后组成的新数组。

```javascript
let newFruits = fruits.map(currentValue => 
  currentValue.toLowerCase();
)
console.log(newFruits);
```
```
输出结果：
["Apple", "Banana", "Cherry"]
```

## 2.3. filter()
过滤得到所有能够通过回调函数测试的值。

- 返回值：由通过测试的元素组成的新数组，都没有通过就返回空数组。

```javascript
let filterFruits = fruits.filter(currentValue => 
 currentValue.length > 5;
); 
console.log(filterFruits)
```
```
输出结果：
["Banana", "Cherry"]
```

## 2.4. every()
判断数组中所有的元素是否都能够通过回调函数的测试，如果被测数组是空数组，那么结果始终返回 `true`。

- 返回值： boolean

```javascript 
let passed = fruits.every(currentValue => 
  currentValue.length > 5;
) 
```
```
输出结果：
false
```

## 2.5. some()
判断是否存在一个可以通过回调函数测试的元素，如果被测函数是空数组，那么始终返回 `false`。

- 返回值：boolean

```javascript
let passed = fruits.some(currentValue => 
  currentValue.length <= 6;
); 
```
```
输出结果：
true
```

## 2.6. reduce()
将每个元素经过回调函数处理后的值汇总为一个结果，起到一个累计的效果。回调函数可以接受的参数分别是：
- 累计器（accumulator）
- 当前值（currentValue）
- 当前索引（currentIndex）
- 原数组（sourceArray）

返回值：函数累计处理的结果。

```js
const nums = [1, 2, 3];
let sum = nums.reduce((a,b) => a+b;); 
console.log(sum);
```
```
输出结果：
6
```


# 3. Array 元素修改方法
`Array` 提供下面这些方法用于修改数组元素。
- fill()
- pop()
- push()
- reverse()
- sort()
- splice()
- copyWithin()

## 3.1. fill()
用一个固定的值来填充数组，如果 `start` 或者是 `end` 是负数会自动计算成 `length + start` 和 `length + end`。

- 返回值：修改后的数组

```javascript
const nums = [1, 2, 3, 4];
console.log(nums.fill(0, 2, 4)); 
console.log(nums.fill(5, 1)); 
console.log(nums.fill(6)); 
```
```
输出结果：
[1, 2, 0, 0]
[1, 5, 5, 5]
[6, 6, 6, 6]
```

## 3.2. pop()
删除最后一个元素

- 返回值：被删除的元素，如果删除的元素为空返回 `undefined`

```js
let deleted = fruits.pop();
console.log(deleted); 
console.log(fruits);
```
```
输出结果：
Cherry
['Apple', 'Banana']
```

## 3.3. push()
在末尾添加一个或者是多个元素。

- 返回值：新数组的长度

```js
const len = fruits.push("Durian");    
console.log(fruit);
console.log(len);           
```
```
输出结果：
["Apple", "Banana", "Cherry"]
4
```

## 3.4. reverse()
翻转元素位置

- 返回值：翻转后的数组 

```js
let reversed = fruits.reverse();
console.log(reversed)
```
```
输出结果：
["Chreey", "Banana", "Apple"]
```

## 3.5. sort()
数组排序，`compareFunction` 函数用来指定排序的模式。`compareFunction(a, b)` 小于 0，那么 `a` 排在 `b` 之前，如果 `compareFunction(a, b)` 大于 0, 那么 `b` 排在 `a` 之前。

- 返回值：排序后的数组。但是原数组也已经被排序了。

```js
const nums = [4, 2, 5, 1, 3];
nums.sort((a, b) => a - b);
console.log(nums);
```
```
输出结果：
[1, 2, 3, 4, 5]
```

## 3.6. splice()
通过删除或替换现有元素或者原地添加新的元素来修改数组。

- 返回值：由被删除的元素组成的一个数组。

```js
let months = ['Jan', 'Merch', 'April', 'June'];
let deleted = months.splice(1, 1, 'Feb');
console.log(months);
console.log(deleted);
```
```
输出结果：
["Jan", "Feb", "June"]
["March", "April"]  // 被删除的元素
```

## 3.7. copyWithin()
浅复制数组的一部分到同一数组中的另一个位置。

- 返回值：改变后的数组

```js
let newArray = fruits.copyWithin(2, 0, 2);
```
```
输出结果
["apple", "banana", "apple", "banana"]
```


# 4. Array 元素访问方法

- concat()
- includes()
- join()
- slice()
- find()
- findIndexOf()


## 4.1. concat()
合并两个或者是多个数组

- 返回值：合并后的新数组。

```js
let newArray = fruits.concat('Durian');
console.log(newArray);
```
```
输出结果：
["Apple", "Banana", "Chreey", "Durian"]
```

## 4.2. includes()
判断当前数组是否包含某指定的值。

- 返回值：boolean

```js
console.log(fruits.includes('Apple'));
```
```
输出结果：
true
```

## 4.3. join()
将所有数组元素组成一个字符串，如果连接符缺省的话。将用逗号连接。

- 返回值：拼接成的字符串。

```js
let words = ['h', 'e', 'l', 'l', 'o'];
let str = words.join('');
console.log(str);
```
```
输出结果：
hello
```

## 4.4. slice()
数组切片，从 `begin` 开始，到 `end` 结束，但是不包括 `end`。如果省略了 `begin` ,会从索引 `0` 开始。如果 `end` 省略，会一直取到数组末尾。

- 返回值：切片后的新数组

```js
let newArray = fruits.slice(0, 1); 
console.log(newArray);
```
```
输出结果：
Apple
```

## 4.5. indexOf()
返回元素的索引。

```js
console.log(fruits.indexOf('Apple'));
```
```
输出结果：
0 // Apple 的索引位置是 0
```


# 5. 其他方法
- flat()
- flatMap()
- from()
- of()
- sort()
- unshift()
- toString()
- toLocaleString()
