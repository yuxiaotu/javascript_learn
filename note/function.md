# 函数

# 1. 使用
在 JavaScript 中函数被称为「一等公民」。每个函数都是一个对象，都是 Function 类型的实例，函数对象也同样有自己的属性和方法，函数名就是指向函数对象的指针。

通过以下方式创建函数：
```js
function sum(a, b) {
    return a + b;
}
```
```js
var sum = function(a, b) {
    return a + b;
}
```

# 2. 自执行函数
使用匿名函数创建一个立即执行的函数

```js
(function() {
    var msg = 'hello world';
    console.log(msg);
})();
```

# 3. 参数
所有函数都能在内部访问到它们的实参。这些实参在函数内部变成了局部变量。如果函数在调用时实际使用的参数少于它在定义时确定的形参，那么那些多余的未用到的参数的值就会是 `undefined`。

在函数中存在一个 `argument` 这个对象，类似于数组，保存该函数的实参。

```js
var add = function() {
    var result = 0;
    var len = argument.length;
    while(len--) result += argument[len];
    console.log(result);
}
```

