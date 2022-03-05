# var, let, const 关键字

- [var, let, const 关键字的作用](#01-var-let-const-的作用)
- [var 关键字的特点](#02-var-关键字的特定)
- [let 和 const 关键字的特定](#03-let-和-const-关键字的特定)


## 01 var let const 的作用
`var`，`let`，`const` 这三个关键字都可以用于声明变量。

`Js` 是 [弱类型](https://zh.wikipedia.org/wiki/%E5%BC%B7%E5%BC%B1%E5%9E%8B%E5%88%A5) 的编程语言，在声明变量的时候不需要指定数据类型，只要用关键字声明它是一个变量就可以了。

```js
var fruit = 'Apple';
let price = 8.8;
const productionPlace = 'Yantai Sandong';
```


## 02 var 关键字的特点
使用 `var` 关键字声明的变量其作用域是它当前的执行上下文。如果一个变量没有用 `var` 声明，那么这个变量就变成了「全局变量」。

```js
function func() {
	y = 1;
	var x = 1;
}

func()
console.log(y);
console.log(x);
```
```
输出结果：
1                    // y 变成了全局变量
ReferenceError: x    // x 没有在外部声明
```

`var` 变量存在 [变量提升](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87) 问题，即变量可以在声明之前使用。

```js
x = 1;
var x;
```

## 03 let 和 const 关键字的特点
`let` 和 `const` 这两个关键字是 `ES6` 中新增加的。

`let` 用来声明一个「块级作用域」的变量，即只在变量所在的代码块中有效。例如，可以在循环或者是函数中声明变量。

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

```js
function func() {
	let count = 100;
	console.log(count);
}
```

`const` 同样也是声明一个「块级作用域」的变量，变量被声明后就不能通过重新赋值来改变，也不能被重新声明。

`const` 声明创建一个值的只读引用。但这并不意味着它所持有的值是不可变的，只是变量标识符不能重新分配。

- 如果被声明的是「基本数据类型」，那么就不能再改变其值。
- 如果被声明的是「引用数据类型」，那么不能改变的是指向数据的指针，而其值本身还是可以被修改的。

