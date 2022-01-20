# Set

## 01. 作用
`Set` 对象是值的集合，可以存储任何类型的唯一值，按照插入的顺序迭代它的元素。`Set` 中的元素只会出现一次，即 `Set` 中的值是唯一的。

创建集合：
```js
const letters = new Set(["a", "b", "c"]);
```

## 02. 修改方法
### 02.1. add()
`add()` 方法可以在集合的尾部添加一个元素。

```js
letters.add("d");
letters.add("e");
letters.add("f");
```

### 02.2. clear()
`clear()` 方法可以移除 `Set` 对象中的所有元素。

```js
letters.clear();
```

### 02.3. delete(value)
`delete()` 方法用于删除某个指定的值。

```js
letters.delete("a");
```

## 03.迭代方法
### 03.1. entries()
返回一个迭代器对象，这个对象中包含按序插入的所有元素的值的 `[value, value]` 的数组。每个值的键和值相等。

```js
for (let x of letters.entries()) {
  console.log(x) // ["a", "a"]
}
```

### 03.2. keys()
按照插入顺序，返回所有元素的值。

```js
letters.keys(); // {"a", "b", "c"}
```

### 03.3. values()
同样会按照插入顺序，返回插入的值。

```js
letters.values(); //{"a", "b", "c"}
```

### 03.4. forEach()

```js
letters.forEach(value => {
  console.log(value);
})
```

## 04.访问方法
### 04.1. has()
判断该值在 Set 对象中是否存在，返回 boolean 值。

```js
letters.has("a"); // true
```