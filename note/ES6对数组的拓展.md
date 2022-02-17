# ES6 数组的拓展

## 01. 构造函数新增的方法

- Array.from()
- Array.of()

### 01.1. Array.from()
将「类似数组的对象」和「可遍历（iterable）的对象」（包括 ES6 新增的数据结构 `Set` 和 `Map`），转变为真正的数组。

### 01.2. Array.of()
用于将一组值，转换为数组。
```js
Array.of(1,2,3) // [1, 2, 3]
```



## 02. 实例对象新增的方法
- copyWithin()
- find()
- findIndex()
- fill()
- entries()
- keys()
- values()
- includes()
- flat()
- flatMap()



## 03. 排序稳定性
将 `sort()` 默认设置为稳定的排序算法。

```js
const arr = [
  'peach',
  'straw',
  'apple',
  'spork'
];

const stableSorting = (s1, s2) => {
  if (s1[0] < s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting)
// ["apple", "peach", "straw", "spork"]
```


## 参考
- https://es6.ruanyifeng.com/#docs/array