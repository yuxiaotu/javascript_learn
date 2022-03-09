# Set 集合

- [Set对象的作用和创建方法](#1-Set-对象的作用和创建方法)
- [Set内容的修改方法](#2-Set-内容的修改方法)
  - [add()](#21-add())
  - [clear()](#22-clear())
  - [delete()](#23-delete())
- [判断是否存在某个值](#3-判断是否存在某个值)
  - [entries()](#31-entries())
  - [values()](#32-values())
  - [forEach()](#33-forEach())
- [判断是否存在某个值](#4-判断是否存在某个值)
  - [has()](#41-has())


# 1. Set 对象的作用和创建方法
`Set` 对象是值的集合，可以存储任何类型的唯一值，按照插入的顺序迭代它的元素。`Set` 中的元素只会出现一次，即 `Set` 中的值是唯一的。

创建集合：
```js
const fruits = new Set(["Apple", "Banana", "Chreey"]);
```

# 2. Set 内容的修改方法
- add()
- clear()
- delete()

## 2.1. add()
可以在集合的尾部添加一个元素。

- 返回值：对象本身。

```js
fruits.add("Durian");

for (let i of fruits) {
  console.log(i);
}
```
```
输出结果：
Apple
Banana
Cherry
Durian
```

## 2.2. clear()
可以移除 `Set` 对象中的所有元素。

```js
fruits.clear();
```

## 2.3. delete()
用于删除某个指定的值。

```js
fruits.delete("Apple");
for (let i of fruits) {
  console.log(i);
}
```
```
输出结果：
Banana
Chreey
```


# 3. Set 的迭代方法
- entries()
- values()
- forEach()

## 3.1. entries()
返回一个迭代器对象，这个对象中包含按序插入的所有元素的值的 `[value, value]` 的数组。每个值的键和值相等。

```js
for (let i of fruits.entries()) {
  console.log(i);
}
```
```
输出结果：
["Apple", "Apple"]
["Banana", "Banana"]
["Chreey", "Chreey"]
```

## 3.2. values()
同样会按照插入顺序，返回一个包含 `Set` 对象值的 `Iterator` 对象。

```js
let iterator = fruits.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
```
```
输出结果：
Apple
Banana
```

## 3.3. forEach()
```js
fruits.forEach(value => {
  console.log(value);
})
```
```
输出结果：
Apple
Banana
Chreey
```

# 4. 判断是否存在某个值
- has()

## 4.1. has()
判断该值在 `Set` 对象中是否存在，返回 `boolean` 值。

```js
fruits.has("Apple"); 
```
```
输出结果：
true
```

