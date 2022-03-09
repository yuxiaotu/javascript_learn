# Map 和 Object 的区别

# 1. 键的类型
`Map` 可以接受任何类型的键。如果对象的键不是字符串或符号，JavaScript 会将其隐式转换为字符串。

```js
const numbersMap = new Map();
numbersMap.set(1, 'one');
numbersMap.set(2, 'two');

[...numbersMap.keys()] // [1,2]
```

# 2. Map 可迭代
如果要遍历普通对象，需要借助 `Object.keys()` 或者是 `Object.entries()`。但是 `Map` 本身是可迭代的。

```js
const colorsHexMap = new Map();

colorsHexMap.set('white', '#FFFFFF');
colorsHexMap.set('black', '#000000');

for (const [color, hex] of colorsHexMap) {
  console.log(color, hex);
}
// 'white' '#FFFFFF'
// 'black' '#000000'
```

# 3. Map 可获得属性数量
普通对象不能确定其拥有的属性数量。`Map` 可以通过其本身所带有的 `size` 来获取键值对的数量。

```js
const examsMap = new Map([
  ['John Smith', '10 points'],
  ['Jane Doe', '8 points'],
]);
  
examsMap.size; // => 2
```