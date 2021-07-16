### Promise 对象

> Promise 是异步编程的一种解决方案

> 参考资料：

<br>

### 基本用法

```js
const promise = new Promise(function(resolve, reject) {
    if ( /* 异步操作成功 */ ) {
    	resolve(value);    
    } else {
    	reject(error);                        
    }
})
```

