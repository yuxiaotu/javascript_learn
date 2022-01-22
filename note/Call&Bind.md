# call, bind, apply

## 01. 作用
`call`、`apply`、`bind` 都是为了改变某个函数运行时的上下文（context），也就是为了改变函数体内部 `this` 的指向。

JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。

```js
function fruits() {}

fruits.property = {
  color: "red",
  say: function() {
    console.log(this.color);
  }
}

var apple = new fruits;
fruits.say(); // red
```

此时有一个对象 `banana = {color: "yellow"}`，但是不想重新定义 `say()` 方法，就可以通过 `call` 或者是 `apply` 来调用 `apple` 对象中的 `say()` 方法。

```js
banana = {
  color: "yellow"
}

apple.say.call(banana); // yellow
apple.say.apply(banana); // yellow
```

## 02. call 和 bind 的区别
`call` 和 `bind` 的作用是一样的，只是接受参数的方式不一样。

`call()` 需要把参数按照顺序传递进去，而 `apply()` 则是把参数放到数组里面。

```js
var func = function(arg1, arg2) {
  
};
```

```js
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2]);
```

## 03. bind
[MDN的解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)：`bind()` 方法会创建一个新的函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

```js
this.num = 9;

var mymodule = {
  num: 81,
  getNum: function() {
    console.log(this.num);
  }
};

mymodule.getNum(); // 81

var getNum = mymodule.getNum();
getNum(); // 9

var boundGetNum = getNum.bind(mymodule);
boundGetNum(); // 81
```

在实际情况中使用 `_this`、`that`、`self` 等来保存 this。

```js
var foo = {
  bar: 1,
  eventBind: function() {
    var _this = this;
    $('.someClass').on('click', function(event) {
      console.log(_this.bar);
    })
  }
}
```

上下文环境在 `eventBind:function(){ }` 过渡到 `$('.someClass').on('click',function(event) { })` 发生了改变，上述使用变量保存 this 这些方式都是有用的，也没有什么问题。当然使用 bind() 可以更加优雅的解决这个问题：

```js
var foo = {
  bar: 1,
  eventBind: function() {
    $('.someClass').on('click', function(event) {
      console.log(this.bar);
    }).bind(this);
  }
}
```

将想要的上下文 this，也就是 foo，`传入 bind()` 中，当回调函数执行的时候，this 就指向 foo 对象。

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

当你希望改变上下文环境之后并非立即执行，而是回调执行的时候，使用 bind() 方法。而 apply/call 则会立即执行函数。

## 03. 使用案例
数组之间追加。

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

定义一个 `log()`，让它可以带来 console.log 方法。

```js
function log() {
  console.log.apply(console, arguments);
}
```