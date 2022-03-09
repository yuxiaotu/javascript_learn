# Map 键值对

- [Map 对象的作用和创建方法](#1-Map-对象的作用和创建方法)
- [修改 Map 对象内容的方法](#2-修改-Map-对象内容的方法)
  - [set()](#21-set)
  - [delete()](#22-delete)
  - [clear()](#23-clear)
- [Map 对象的迭代方法](#3-Map-对象的迭代方法)
  - [forEach](#31-forEach)
  - [entries()](#32-entries)
- [Map 对象内容的访问方法](#4-Map-对象内容的访问方法)
  - [keys()](#41-keys)
  - [get()](#42-get)
- [判断是否存在某个键值对](#5-判断是否存在某个键值对)
  - [has()](#51-has)


# 1. Map 对象的作用和创建方法
`Map` 对象保存键值对，能够记住键的原始插入顺序，任何值都可以作为一个键或者是一个对象。

创建 `Map` 对象：
```js
const fruits = new Map([
  ["Apple", 500],
  ["Banana", 300],
  ["Chreey", 200]
])
```


# 2. 修改 Map 对象内容的方法
- set()
- delete()
- clear()

## 2.1. set()
使用 `set()` 方法可以在 `Map` 对象中添加键值对，或者是修改指定键的值。

```js
fruits.set("Apple", 600);
fruits.set("Durian", 200);
```

## 2.2. delete()
`delete()` 方法可以按照键名删除对应的键值对。

```js
fruits.delete("Apple");
```

## 2.3. clear()
`clear()` 方法可以清空 `Map` 对象的内容。

```js
fruits.clear();
```

# 3. Map 对象的迭代方法
- forEach()
- entries()

## 3.1. forEach()
通过 `forEach()` 方法进行迭代，对每个键值对执行依次回调函数。

```js
fruits.forEach(function(value, key) => {
  console.log(key, value);
})
```
```
输出结果：
"Apple" 500
"Banana" 300
"Chreey" 200
```

## 3.2. entries()
`entries()` 方法同样可以返回一个 `[key, value]` 的值。

```js
for (const x of fruits.entries()) {
  console.log(x[0], x[1]);
}
```
```
输出结果：
"Apple" 500
"Banana" 300
"Chreey" 200
```




# 4. Map 对象内容的访问方法

- keys()
- get()

## 4.1. keys()
返回一个迭代对象，包含 `Map` 对象中每个元素的 `key` 值。


## 4.2. get()
按照键名获取对应的值。

```js
console.log(fruits.get("Apple")); 
```
```
输出结果：
500
```

# 5. 判断是否存在某个键值对
按照键名判断是否存在相应的键值对。

- has()

```js
cosole.log(fruits.has("Apple")); 
```
```
输出结果：
true
```
