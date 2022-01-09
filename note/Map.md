# Map

## 01. 作用
保存键值对，能够记住键的原始插入顺序，任何值都可以作为一个键或者是一个对象。

```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
])
```

## 02. 修改方法
### 02.1. set()
在 Map 对象中添加键值对，或者是修改指定键的值。

```js
const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
```
```js
fruits.set("apples", 200);
```

### 02.2. delete()
按照键名删除对应的键值对。

```js
fruits.delete("apples");
```

### 02.3. clear()
清空 Map 对象。

```js
fruits.clear();
```

## 03. 迭代方法
### 03.1. forEach()
通过 `forEach()` 方法进行迭代。将返回一个 [key, value] 的值。

```js
fruits.forEach(function(value, key) => {
  console.log(key + "," + value);
})
```

### 03.2. entries()
`entries()` 方法同样可以返回一个 [key, value] 的值。

```js
for (const x of fruits.entries()) {
  console.log(x[0], x[1]);
}
```

## 04. 访问方法
### 04.1. get()
按照键名获取对应的值。

```js
fruits.get("apples"); // 500
```

### 04.2. has()
按照键名判断是否存在相应的键值对。

```js
fruits.has("apples"); // true
```

