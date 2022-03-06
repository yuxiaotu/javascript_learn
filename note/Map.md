# Map 键值对

- [Map 对象的作用和创建方法](#01-Map-对象的作用和创建方法)
- [修改 Map 对象内容的方法](#02-修改-Map-对象内容的方法)
- [Map 对象的迭代方法](#03-Map-对象的迭代方法)
- [Map 对象内容的访问方法](#04-Map-对象内容的访问方法)
- [判断是否存在某个键值对](#05-判断是否存在某个键值对)


## 01 Map 对象的作用和创建方法
`Map` 对象保存键值对，能够记住键的原始插入顺序，任何值都可以作为一个键或者是一个对象。

创建 `Map` 对象：
```js
const fruits = new Map([
  ["Apple", 500],
  ["Banana", 300],
  ["Chreey", 200]
])
```


## 02 修改 Map 对象内容的方法
- set()
- delete()
- clear()

### 02.1. set()
使用 `set()` 方法可以在 `Map` 对象中添加键值对，或者是修改指定键的值。

```js
fruits.set("Apple", 600);
fruits.set("Durian", 200);
```

### 02.2. delete()
`delete()` 方法可以按照键名删除对应的键值对。

```js
fruits.delete("Apple");
```

### 02.3. clear()
`clear()` 方法可以清空 `Map` 对象的内容。

```js
fruits.clear();
```

## 03 Map 对象的迭代方法
- forEach()
- entries()

### 03.1. forEach()
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

### 03.2. entries()
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

## 04 Map 对象内容的访问方法
- get()

### 04.1. get()
按照键名获取对应的值。

```js
console.log(fruits.get("Apple")); 
```
```
输出结果：
500
```

## 05 判断是否存在某个键值对
按照键名判断是否存在相应的键值对。

- has()

```js
cosole.log(fruits.has("Apple")); 
```
```
输出结果：
true
```
