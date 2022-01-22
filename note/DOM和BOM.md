# BOM和DOM

## 01. BOM
`BOM` 是 `Browser Object Model` 的简写，意思是「文档对象模型」。是实现 Web 开发和浏览器之间相互操作的基础。

![BOM](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/10/16d191f327978675~tplv-t2oaga2asx-watermark.awebp)

`BOM` 包含 5 个基础对象：
- window
- location
- navigator
- screen
- history

### 01.1. window 对象
`window` 对象，是 `BOM` 的核心对象，代表了浏览器的一个实例。`window` 对象在浏览器中即代表了「JavaScript访问浏览器的接口对象」也代表了「ES 中的 Globel 对象」。这也就因为这在 Web 开发中，任何函数、变量、对象都是以 `window` 为全局对象的。

- `window.screenLeft`
- `window.screenTop`
- `window.moveBy(x,y)`
- `window.moveTo(x,y)`
- `window.scrollBy(x,y)`
- `window.scrollTo(x,y)`
- `window.open()`

### 01.2. location 对象
`location` 对象提供了当前窗口上加载的文档信息。

- `location.host`
- `location.href`
- `location.hostname`
- `location.username`
- `location.password`

### 01.3. history
`history` 对象，用来查看和操作历史记录。

- `history.go()`
- `history.back()`
- `history.forward()`
- `hsitory.state`
- `history.pushState()`
- `history.replaceState()`


## 02. DOM
`DOM` 是 `Document Object Model` 的简称，意思是文档对象模型。描述了处理网页内容的方法和接口，是 `XML` 和 `HTML` 的接口。`DOM` 把整个页面转化为由元素结点层级构成的文档。

`DOM` 是 `window` 对象的一部分，也就是说，`DOM` 包含在 `BOM` 中。

### 02.1. 创建节点
- `document.createElement`
- `document.createTextNode`
- `node.cloneNode`
- `document.createDocumentFragement`

### 02.2. 修改页面
- `appendChild`
- `insertBefore`
- `removeChild`
- `replaceChild`

### 03.3. 节点查询
- `document.getElementById`
- `document.getElementsByTagName`
- `document.getElementsByName`
- `document.getElementsByClassName`
- `document.querySelector`
- `document.querySelectorAll`

### 03.4. 元素属性
- `setAttribute`
- `getAttribute`
- `removeAttribute`


