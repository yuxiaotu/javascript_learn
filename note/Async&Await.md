# Async&Await

## 01. 作用
async 和 await 这两个关键字是 ECMA2017 的一部分，它是基于 promise 的语法糖，使异步代码更容易编写和阅读。简单的讲，就是异步代码的同步写法。

## 01. 使用
async 放再函数前声明，这样可以将函数变成一个异步函数。await 只有在异步函数中才能起作用，它可以放在任何异步的，基于 promise 的函数之前。它会暂停在该行代码上，直到 promise 完成，然后返回结果值。在暂停的同时，其他代码就可以执行了。

```js
const loadData = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};
loadData();
```

## 03. 重写 promise 代码
使用 async / await 改写 promise 方法实现的代码。

```js
fetch('coffee.jpg')
	.then(response => response.blob)
	.then(myBlob => {
    	let objectUrl = URL.createObjectURL(myBlob);
    	let image = document.createElement('img');
    	image.src = objectURL;
    	document.body.appendChild(image);
	})
	.catch(e => {
    	console.log('There has benn a problem with your fetch operation' + e);
	})
```

```js
async function myFetch() {
    let response = await fetch('coffee.jpg');
    let myBlob = await response.blob();
    
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

myFetch()
	.catch(e => {
    	console.log('There has benn a problem with your fetch operation' + e);
	})
```



