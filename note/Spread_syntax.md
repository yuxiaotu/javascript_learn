# 拓展运算符

> 可以在函数调用、或者是数组构造时，将数组表达式或者是 string 在语法层面展开；还可以在构造字面量时，将对象表达式按照 key-value 方式展开。

> 参考资料：

<br>

### 将数组元素迭代为函数参数

```js
myFunction = function(x, y, z) { ... };
var args = [0, 1, 2];
myFunction(...args);             
```



### 拷贝数组

```js
var arr = [1, 2, 3];
var arr2 = [...arr];
```



### 拷贝对象

```js
var obj1 = {foo: 'bar', x: 42};
var obj2 = {foo: 'baz', y: 13};
var cloneObj = {...obj1};
var mergeObj = {...obj1, ...obj2};
```

