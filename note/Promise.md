### Promise 

- [Promise 的作用](#1-作用)
- [Promise 的状态](#2-状态)
- [Promise 的使用](#3-使用)
- [Promise 实例方法](#4-实例方法)
- [Promise 静态方法](#5-静态方法)


# 1. 作用
`Promise` 是「异步编程」的一种解决方案，异步操作不会立即返回操作的结果，像网络请求、文件下载、操作数据库都是异步的，当操作完成时会通知要调用其结果的函数来做后序处理。

`Promise` 可以看作是一个容器，里面保存者未来才会结束的事件，通常是一个异步操作的结果。有了 `Promise` 就可以将异步操作以同步操作的流程表示出来，避免了层层嵌套的回调函数。

以往要处理多层异步操作，往往像下面这样，形成回调地狱。
```js
doSomething(function(result){
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log('得到最终结果: ' + finalResult);
        }, failureCallBack);
    }, failureCallBack);
}, failureCallback);
```

通过 `Promise` 改写上面的代码。`Promise` 解决异步操作具有以下优点。

- 链式操作减低了编码难度。
- 代码可读性提高。

```js
doSomething().then(function(result) {
    return doSomethingElse(newresult);
})
.then(function(newResult) {
    return doThirdThing(newResult);
})
.then(function(finalResult) {
    console.log('得到最终结果: ' + finalResult);
})
.catch(failureCallback);
```


# 2. 状态
`Promise` 对象有三种状态：
- pending（进行中）
- fulfilled（已完成）
- rejected（已失败）

对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态。

一旦状态改变（从 `pending` 变为 `fulfilled` ；或者是从 `pending` 变为 `rejected`），就不会再变，任何时候都可以得到这个结果。


# 3. 使用
`Promise` 对象是一个构造函数，用来生成 `Promise` 实例。

`Promise` 构造函数接受一个函数作为参数，该函数的两个参数分别是 `resolve` 和 `reject`。

- `resolve` 函数的作用是，将 `Promise` 对象的状态从「未完成」变为「成功」。
- `reject` 函数的作用是，将 `Promise` 对象的状态从「未完成」变为「失败」。


```js
const promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */) {
    resolve(value);
  } else {
    reject(error);
  }
})
```

`Promise` 实例生成后，可以使用 `then()` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数。第一个回调函数是 `Promise` 对象的状态变为 `resolved` 时调用，第二个回调函数是 `Promise` 对象的状态变为 `rejected` 时调用。两个函数都是可选的。 

```js
promise.then(function() {
  // success
}, function(error) {
  // failure
})
```

 有如下例子：

`timeout()` 方法返回一个 `Promise` 实例，表示一段时间后才会发生的结果，过了指定的时间后，`Promise` 实例的状态变为 `resolved` ，就会触发 `then()` 方法绑定的回调函数。

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then(value => {
  console.log(value);
})
```

异步加载图片的例子：

使用 `Promise` 包装一个图片加载的异步操作，加载成功就调用 `resolve` ，否则就调用 `reject`。

```js
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const img = new Image();
    img.onload = function() {
      resolve(image);
    }
    
    img.onerror = function() {
      reject(new Error('could not load image at' + url));
    }
    
    img.src = url;
  })
}
```



# 4. 实例方法

`Promise` 构建出来的实例存在以下方法：

- #### then()
  是实例状态发生改变时的回调函数，第一个参数是 `resolved` 状态的回调函数，第二个参数是 `rejected` 状态的回调函数。
  
  `then` 方法返回的是一个新的 `Promise` 实例，也就是 `Promise` 能链式书写的原因。

- #### catch()
  用于指定发生错误时的回调函数。

- #### finally()
  不管状态如何都会执行。

```js
const promise = new Promise(function(resolve, reject) {
    if (/* 操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
})

promise.then(function(value) {
    // 成功
}, function(error) {
    
})
```

例如，在某一个场景中要获取用户的 ID。`getUserId` 方法返回一个 `promise`，可以通过它的 `then` 方法注册执行的回调。
```js
function getUserId() {
    return new Promise(function() {
        http.get(url, function(result) {
            resolve(result.id);
        })
    })
}

getUserId().then(function(id) {
    
})
```


# 5. 静态方法
`Promise` 构造函数存在以下方法。
- all()
- race()
- allSettled()
- resolve()
- reject()
- try()

## 5.1. all()
当全部成功时，按序返回成功的值，若有一个失败，则返回第一个失败的值。

接收一个数组作为参数，数组成员都是 `Promise` 实例。

只有 `p1`、`p2`、`p3` 的状态都变成 `fulfilled`，`p` 的状态才会变成`fulfilled`，此时 `p1`、`p2`、`p3` 的返回值组成一个数组，传递给 `p` 的回调函数。

只要 `p1`、`p2`、`p3` 之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

```js
const p = Promise.all([p1, p2, p3]);
```

## 3.2. race()
只要有一个成功就成功，返回成功的值。

只要 `p1`、`p2`、`p3` 之中有一个实例率先改变状态，`p` 的状态就跟着改变。率先改变的 `Promise` 实例的返回值则传递给p的回调函数。

```js
const p = Promise.race([
  fetch('/resource-that-may-take-a-while'),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

p.then(console.log)
 .catch(console.error);
```



****

- https://github.com/febobo/web-interview/issues/40

- https://es6.ruanyifeng.com/#docs/promise