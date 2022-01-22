# yield

## 01. 作用
`yield` 是 `ES6` 的关键字，用于生成器函数暂停执行。

`Generator` 在形式上和函数差不多，在 `function` 关键字和函数名之间加一个 `*`。

当调用 `Generator` 函数时，并不会执行函数内部代码，而是返回了一个遍历器，遍历器中包含了 `next()` 方法，当调用 `next()` 方法才会开始执行，遇到 `yield` 关键字并在此暂停。

```js
function * foo(x) {
  while (true) {
    x = x * 2;
    yield x;
  }
}
```

```js
var g = foo(2);
g.next(); // 4
g.next(); // 8
g.next(); // 16
```

## 02. 在遍历中的应用

```js
var myArray = {
  0: '你',
  1: '的',
  2: '名字',
  length: 3
};

myArray[Symbol.iterator] = function * () {
  for (var i = 0; i < this.length; i++) {
    yield this[i];
  }
};

for (var item of myArray) {
  console.log(item);
};
```

## 03. 在异步中应用

```js
function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data) {
  return data.json();
}).then(function(data) {
  g.next(data);
})
```