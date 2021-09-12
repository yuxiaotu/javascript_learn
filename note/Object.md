# Object 对象

> **参考**：[深入理解 JS 的对象](https://rainzhaojy.github.io/2015/js_object.html)

js 中的对象（object）是一组键值（key-value）的集合，key 总是 string 类型，而 value 可以是任何类型，object 很像是一个 hash map，object 里的 key-value 是无序的。

## 01.读取属性

要访问对象中的属性可以用 `.` 和 `[]` 的方法。如果属性名用变量来表示就用 `[]` ，否则就用 `.`

```javascript
var me = {firstname: x, lastname: ck}
me.firstname
me['lastname']
```

## 02.判断属性是否存在

可以通过 `key in object` 的方法，还有就是 hasOwnProperty(key) 的方法。 

```javascript
if (me.firstname) {}
if (firstname in me) {}
if (me.hasOwnProperty) {}
```

- 方法1: 如果 me 有属性 name，但 name 的值为null, undefined, 0, false, NaN, ''时，会返回false

- 方法2: 如果 firstname 是 me 原型对象里的属性，in也会返回true

- 方法3: hasOwnProperty判断最严格，只有 me 本身拥有属性 firstname 才会返回true


## 03.删除属性

使用 delete 可以删除属性

```js
delete me.lastname;
```

## 04.枚举属性

### for-in loop

```js
for (var property in me) {
    console.log('key' + property);
    console.log('value' + me[property]);
}
```

### Object.keys

```js
var properties = Object.keys(me);
for (let i = 0; i < properties.length; i++) {
    console.log('Name:' + me[i]);
    console.log('Value' + me[properties[i]]);
}
```

