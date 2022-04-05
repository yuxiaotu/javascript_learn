# JSON

# 1. 作用
- `JSON` 是 `JavaScript Object Notation` 的简写
- 是一种用于数据传输和存储的格式，主要是服务器向网页传递数据。

```json
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

#  2. 方法

- JSON.stringify()
- JSON.parse()

## 2.1. stringify

将一个 JavaScript 对象或值转换为 JSON 字符串。

```js
const json = {
	"result": true,
	"count": 42
};
console.log(JSON.stringify(json));
```

```
输出结果：
'{"result": true, "count": 42}'
```

## 2.2. parse()

解析 JSON 字符串，构造由字符串描述的 JavaScript 值或对象。

```js
const json = '{"result": true, "count": 42}';
const obj = JSON.parse(json);
console.log(obj.count);
```

```
输出结果：
42
```