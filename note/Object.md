# Object 对象结构

- [Object 的作用和创建方式](#01-Object-的作用和创建方式)
- [访问 Object 属性](#02-访问-Object-属性)
- [判断属性是否存在](#03-判断属性是否存在)
- [删除 Object 中的属性](#04-删除-Object-中的属性)
- [遍历 Object 中的属性](#05-遍历-Object-中的属性)


## 01 Object 的作用和创建方式
`Js` 中的对象是一组 `key-value` 的集合，`key` 总是 `string` 类型，而 `value` 可以是任何类型，`Object` 很像是一个 `Hash Map`，`Object` 里的 `key-value` 是无序的。

`Js` 提供了多个内建对象，比如 `String`、`Date`、`Array` 等等。 

通常使用对象字面量的方式创建：

```js
let fruit = {
    name: 'Apple',
    price: 8.8,
    productionPlace: 'Yantai Shandong'
}
```


## 02 访问 Object 属性
对 `Object` 的访问通过属性名来完成：
- 符号 ` . ` 连接属性名。
- 符号 `[]`，连接指代属性名的变量。

```js
let name = fruit.name;
let price = fruit['price'];
console.log(name);
console.log(price);
```
```
输出结果：
Apple
8.8
```


## 03 判断属性是否存在
通过判断对应的属性名是否存在于对象中来判断属性是否存在。
- key in Object 方法。
- Object.hasOwnProperty() 方法。

```js
let key = 'name';
console.log(key in fruit);
console.log(fruit.hasOwnproperty(key));
```
```
输出结果：
true
true
```

两种方法的不同：
- 如果 `name` 是 `fruit` 原型对象里的属性，使用 `in` 来判断也会返回 `true`。

- `Object.hasOwnProperty()` 判断最严格，只有 `fruit` 本身拥有属性 `name` 才会返回 `true`。


## 04 删除 Object 中的属性
使用 `delete` 关键字可以删除属性。

```js
delete fruit.productionPlace;
console.log(fruit);
```
```
输出结果：
{ name: 'Apple', price: 8.8  }
```


## 05 遍历 Object 中的属性
要遍历 `Object` 首先得到对象的所有属性名，然后通过属性名来访问。
- for - in 方法，遍历对象的属性名。
- Object.keys() 方法，返回对象的所有属性名。

```js
for (let key in fruit) {
  console.log(key + " : " + fruit[key]);
}
```
```js
for (let key of Object.keys(fruit)) {
  console.log(key + " : " + fruit[key])
}
```
```
输出结果：
name : Apple
price : 8.8
proctionPlace : Yantai Shandong
```
