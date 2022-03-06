# call(), bind(), apply()

- [call(), bind(), apply()的作用](#01-作用)
- [call() 和 apply() 的区别](#02-call-和-apply-的区别)
- [bind() 的特点](#03-bind-的特点)
- [使用案例](#04-使用案例)


## 01 作用
`call`、`apply`、`bind` 都是为了改变某个函数运行时的上下文（context），也就是为了改变函数体内部 `this` 的指向。

`Js` 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。

```js
const apple = {
  color: red,
  msg: function() {
    return this.color;
  }
}
console.log(apple.msg()) 
```
```
输出结果：
red
```

此时有一个对象 `banana`，但是不想重新定义 `msg()` 方法，就可以通过 `call` 或者是 `apply` 来调用 `apple` 对象中的 `msg()` 方法。

```js
banana = {
  color: "yellow"
}

console.log(apple.say.call(banana)); 
console.log(apple.say.apply(banana)); 
```
```
输出结果：
yellow
yellow
```


## 02 call 和 apply 的区别
`call()` 和 `bind()` 的作用是一样的，只是接受参数的方式不一样。

`apply()` 是把参数放到数组里面。

```js
const numbers = [5, 6, 2, 3, 7];
const max = Math.max.apply(null, number);
console.log(max);
```
```
输出结果：
7
```

`call()` 是从第二个参数开始作为函数的参数。
```js
const max = Math.max.call(null, 5, 6, 2, 3, 7);
console.log(max);
```
```
输出结果：
7
```


## 03 bind 的特点
`bind()` 方法会创建一个新的函数，在 `bind()` 被调用时，`bind()` 方法的第一个参数作为 `this` ，而其他参数作为这个新的函数的参数。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)


```js
const apple = {
  color: 'red'
  msg: function() {
    return this.color;
  }
}

const banana = {
  color: 'yellow'
}

const unboundMsg = apple.msg();
console.log(unboundMsg());

const boundMsg = unboundMsg.bind(banana);
console.log(boundMsg());
```
```
输出结果：
undefined
yellow  // 绑定到 banana 对象
```

使用 `bind()` 方法改变上下文环境之后并非立即执行，而是回调执行的时候才会执行。而 `apply()` 和 `call()` 则会立即执行函数。

```js
var obj = {
  x: 81
}

var foo = {
  getx: function() {
    return this.x;
  }
}

console.log(foo.getX.call(obj));
console.log(foo.getX.apply(obj));
console.log(foo.getX.bind(obj)());
```


## 03 使用案例
实现数组之间追加。

```js
var array1 = [12, "foo", {name: "Joe"}, -2458];
var array2 = ["Doc", 555, 100];
Array.prototype.push.apply(array1, array2);
```

获取数组中的最大值和最小值。
  
```js
var numbers = [5, 458, 120, -215];
var maxInNumber = Math.max.apply(Math, numbers);
```

定义一个 `log()`，让它可以带来 `console.log()` 方法。

```js
function log() {
  console.log.apply(console, arguments);
}
```


