# Object 对象

- [对象遍历方法](#03-遍历)

## 01. 作用
JavaScript 中的「对象（object）」是一组「键值对（key-value）」的集合，`key` 总是 `string` 类型，而 `value` 可以是任何类型，`object` 很像是一个 `hash map`，`object` 里的 `key-value` 是无序的。

JavaScript 提供多个内建对象，比如 `String`、`Date`、`Array` 等等。 对象只是带有属性和方法的特殊数据类型。

使用对象字面量的方式创建：

```js
person = {
  firstname:"John",
  lastname:"Doe",
  age:50,
  eyecolor:"blue"
};
```


## 02. 读取属性
要访问对象中的属性可以用 `.` 和 `[]` 两种方法。如果属性名用变量来表示就用 `[]` ，否则就用 `.`。

```js
person.firstname;
person['lastname'];
```


## 03. 判断属性是否存在
可以通过 `key in object` 方式，或者是是 `hasOwnProperty(key)` 的方法来判断属性是否在对象中。 

```js
if (person.firstname) {
    return person.firstname;
}
```
```js
if (firstname in person) {
    return person.firstname;
}
```
```js
if (person.hasOwnProperty) {
    return person.firstname;
}
```

- 如果 `person` 有属性 `firstname`。但如果 `firstname` 的值为 `null`、 `undefined`、`0`、`false`, `NaN`, `''` 时，使用 `if` 判断会返回 `false`。

- 如果 `firstname` 是 `person` 原型对象里的属性，使用 `in` 来判断也会返回 `true`。

- `hasOwnProperty` 判断最严格，只有 `person` 本身拥有属性 `firstname` 才会返回 `true`。


## 04. 删除属性
使用 `delete` 关键字可以删除属性。

```js
delete person.lastname;
```


## 03 遍历
### 05.1. for-in 方法

```js
for (let ley in person) {
    console.log('key' + key);
    console.log('value' + person[key]);
}
```

### 05.2 Object.keys 方法
`Object.keys()` 方法，可以返回对象中所有属性名。然后通过遍历属性名来实现对象遍历。

```js
var properties = Object.keys(peron);
for (let i = 0; i < properties.length; i++) {
    console.log('Name:' + person[i]);
    console.log('Value' + person[properties[i]]);
}
```

