# Array 数组

## 01. 作用
`Array` 是 JavaScript 中常用的一种数据结构，数组中的每一项都被叫做 「元素」，元素可以是任何类型的数据。每个元素都拥有一个索引值可以用来标识这个元素。数组的长度是有限的，不大于 `2^32-1` 。 Array 会从  `Array.prototype` 继承属性和方法。

## 02.数组迭代方法
### 02.1. forEach(callback)
- **作用：** 按升序为数组中有效的每一项执行一次 callback 函数，那些已经删除和没有初始化的项将被跳过。
- **返回值：** undefined

```javascript
const array = ['a', 'b', 'c'];
array1.forEach((currentValue, _index, _array) => 
  console.log(currentValue);
);
```

### 02.2. map(callback)
- **作用：** 每个元素执行一次回调函数，将所有结果组成一个新的数组返回。使用方法和参数跟 `forEach()` 相似。
- **返回值：** 由原数组的每一项执行回调函数后组成的新数组。

```javascript
const array = [1, 2, 3];
let newArray = array2.map(currentValue => 
  currentValue * currentValue;
)
```

### 02.3. filter(callback)
- **作用：** 过滤得到所有能够通过回调函数测试的值
- **返回值：** 由通过测试的元素组成的新数组，都没有通过就返回空数组。

```javascript
const array = [1, 2, 3];
let newArray = array3.filter(currentValue => 
  currentValue >= 2;
); //[2, 3]
```

### 02.4. every(callback)
- **作用：** 判断数组中所有的元素是否都能够通过回调函数的测试，如果被测数组是空数组，那么结果始终返回 true。
- **返回值：** boolean

```javascript 
const array = [1, 2, 3];
let passed = array3.every(currentValue => 
  element >= 3;
) // false
```

### 02.5. some(callback)
- **作用：** 判断是否存在一个可以通过回调函数测试的元素，如果被测函数是空数组，那么始终返回 false。
- **返回值：** boolean

```javascript
const array = [1,2,3,4];
let passed = array4.some(currentValue => 
  currentValue >= 4;
); // ture
```

### 02.6 reduce(callback)
- **作用：** 将每个元素经过回调函数处理后的值汇总为一个结果，起到一个累计的效果。此次的 callback 函数可以接收 4 个参数，分别是累计器（accumulator），当前值（currentValue）,当前索引（currentIndex），原数组（sourceArray）。
- **返回值：** 函数累计处理的结果

```javascript
const array = [1, 2, 3];
let sum = array4.reduce((a,b) => a+b;); // 6;
```

## 03.修改器方法
### 03.1. fill(value[,start[,end]])
- **作用：** 用一个固定的值来填充数组，如果 start 或者是 end 是负数会自动计算成 length + start 和 length + end。
- **返回值**：修改后的数组

```javascript
const array = [1, 2, 3, 4];
let r1 = array.fill(0, 2, 4); // [1, 2, 0, 0];
let r2 = array.fill(5, 1); // [1, 5, 5, 5];
let r3 = array.fill(6); //[6, 6, 6, 6];
```

### 03.2. pop()
- **作用：** 删除最后一个元素
- **返回值** 被删除的元素，如果删除的元素为空返回 undefined

### 03.3. push(value)
- **作用：** 在末尾添加一个或者是多个元素
- **返回值：** 新数组的长度

### 03.4. reverse()
- **作用：** 翻转元素位置
- **返回值：** 翻转后的数组 

### 03.5. sort([compareFunction])
- **作用：** 数组排序，compareFunction 用来指定排序的顺序。compareFunction(a, b) 小于 0，那么 a 排在 b 之前，如果 compareFunction(a, b) 大于 0, 那么 b 排在 a 之前。
- **返回值：** 排序后的数组。但是原数组也已经被排序了。

```javascript
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
```

### 03.6. splice(start[, deleteCount[, item1[, item2[, ...]]]])
- **作用：** 通过删除或替换现有元素或者原地添加新的元素来修改数组。
- **返回值：** 由被删除的元素组成的一个数组。

```javascript
const months = ['Jan', 'Merch', 'April', 'June'];
months.splice(1, 0, 'Feb') //['Jan', 'Feb', 'Merch', 'April', 'June']
```

### 03.7. copyWithin(target, start, end)
- **作用：** 浅复制数组的一部分到同一数组中的另一个位置
- **返回值：** 改变后的数组

## 04. 访问方法
### 04.1. concat(value)
- **作用：** 合并两个或者是多个数组
- **返回值：** 合并后的新数组

### 04.2. includes(value)
- **作用：** 判断当前数组是否包含某指定的值
- **返回值：** boolean

### 04.3. join(str)
- **作用：** 将所有数组元素组成一个字符串，如果连接符缺省的话。将用逗号连接。
- **返回值：** 字符串

### 04.4. slice()
- **作用：** 数组切片，从 begin 开始，到 end 结束，但是不包括 end。如果省略了 begin ,会从索引 0 开始。如果 end 省略，会一直取到数组末尾。
- **返回值：** 切片后的新数组

### 04.5. toString()
- **作用：** 返回一个字符串，表示指定的数组及其元素
- **返回值：** 字符串

