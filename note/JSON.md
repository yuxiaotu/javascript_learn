# JSON

## 01. 作用
`JSON` 是 `JavaScript Object Notation` 的简写，是一种用于数据传输和存储的格式。主要是服务器向网页传递数据。

```json
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

## 02. JSON.parse()
`JSON.parse()` 用于将 `JSON` 格式的数据转化为 `JavaScript` 对象。

```js
var obj = JSON.parse(text);
```

## 03. JSON.stringify()
`JSON.stringify()` 用于将 `JavaScript` 值转化为字符串。

```js
var text = JSON.stringify(obj);
```