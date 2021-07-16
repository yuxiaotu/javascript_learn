# 解构赋值

> 解构赋值是 JavaScript 的一种表达式，可以从对象和数组这两种结构中取出属性或者是值，然后赋值给其他的变量。

> 参考资料：

<br>

### 解构数组

变量声明并赋值时的解构

```javascript
var foo = ['one', 'two', 'three'];
console.log(one);
console.log(two);
console.log(three);
```

变量先声明后赋值时的解构

```js
var a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);
```

交换两个变量

```js
var a = 1;
var b = 2;
[a, b] = [b, a];
```



### 解构对象

基本赋值

```js
var o = {p:42, q: true};
var {p, q} = o;
console.log(p);
console.log(q);
```





