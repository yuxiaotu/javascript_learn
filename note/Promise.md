### Promise 

## 01.含义
Promise 是异步编程的一种解决方案，异步操作不会立即返回操作的结果，像网络请求、文件下载、操作数据库都是异步的，当操作完成时会通知要调用其结果的函数来做后序处理。

## 01.使用

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

在某一个场景中要获取用户的 ID。

```js
function getUserId() {
    return new Promise(function() {
        http.get(url, function(result) {
            resolve(result.id);
        })
    })
}

getUserId().then(function(id) {
    // 一些操作
})
```

getUserId 方法返回一个 promise，可以通过它的 then 方法注册执行的回调。

## 03.静态方法
- **.all()**

    当全部成功时，按序返回成功的值，若有一个失败，则返回第一个失败的值。

- **.any()**

    有一个成功就成功，返回成功的值。



