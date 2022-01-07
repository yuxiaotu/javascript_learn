# Object 对象

## 01. 含义
JavaScript 中的对象（object）是一组键值对（key-value）的集合，key 总是 string 类型，而 value 可以是任何类型，object 很像是一个 hash map，object 里的 key-value 是无序的。

## 02. 读取属性
要访问对象中的属性可以用 `.` 和 `[]` 的方法。如果属性名用变量来表示就用 `[]` ，否则就用 `.`

```javascript
var me = {firstname: x, lastname: ck}
me.firstname
me['lastname']
```

## 03. 判断属性是否存在
可以通过 `key in object` 的方法，还有就是 `hasOwnProperty(key)` 的方法。 

```javascript
if (me.firstname) {}
if (firstname in me) {}
if (me.hasOwnProperty) {}
```

- 如果 `me` 有属性 `name`。但 `name` 的值为 `null`、 `undefined`、`0`、`false`, `NaN`, `''` 时，使用 if 判断会返回 false

- 如果 `firstname` 是 `me` 原型对象里的属性，使用 in 来判断也会返回true

- `hasOwnProperty` 判断最严格，只有 `me` 本身拥有属性 `firstname` 才会返回 true


## 04. 删除属性
使用 `delete` 关键字可以删除属性。

```js
delete me.lastname;
```

## 05.枚举属性
### 05.1 for-in loop

```js
for (let property in me) {
    console.log('key' + property);
    console.log('value' + me[property]);
}
```

### 05.2 Object.keys

```js
var properties = Object.keys(me);
for (let i = 0; i < properties.length; i++) {
    console.log('Name:' + me[i]);
    console.log('Value' + me[properties[i]]);
}
```

