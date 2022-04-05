# this 的指向

- [直接调用 this](#1-直接调用)
- [this 在对象中](#2-在对象中)
- [this 在普通函数中](#3-在普通函数中)

# 1. 直接调用

`this` 并不是在定义是确定指向的，而是在代码执行的过程中指向当前代码执行的上下文。直接调用 `this` 会指向全局对象，在浏览器中指向 `window` 对象，在 `nodejs` 环境中指向 `Gloabl`。

# 2. 在对象中

在对象中的 `this` 指向当前对象。

```js
function say() {
  console.log("我的名字", this.name);
}

var person = {
  name: 'josn'，
  say
}

person.say();
```

```js
输出结果：
我的名字josn
```

# 3. 在普通函数中

如果这个函数不属于任何对象，那么这个 `this` 就指向全局对象。

```js
function say() {
  console.log('我的名字', this.name);
}

var name = 'josn';
say();
```

```
输出结果：
我的名字josn
```

