# Object 对象结构

- [Object 的作用和创建方式](#1-Object-的作用和创建方式)
- [访问 Object 属性](#2-访问-Object-属性)
- [判断属性是否存在](#3-判断属性是否存在)
- [删除 Object 中的属性](#4-删除-Object-中的属性)
- [遍历 Object 中的属性](#5-遍历-Object-中的属性)
- [Object 静态方法](#6-其他内置方法)
  - [assign()](#61-Object.assign)
  - [defineProperty()](#62-Object.defineProperty)
  - [freeze()](#63-Object.freeze)
  - [getPropertyOf()](#64-Object.getPropertyOf)
- [实例属性](#7-实例属性)
- [实例方法](#8-实例方法)


# 1. Object 的作用和创建方式
`Js` 中的对象用于存储 `key-value` 的集合和复杂的实体，`key` 总是 `string` 类型，而 `value` 可以是任何类型，`Object` 里的 `key-value` 是无序的。

通过 `Object()` 构造函数，或者是 [对象字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer) 的方式创建:

```js
let fruit = {
    name: 'Apple',
    price: 8.8,
    productionPlace: 'Yantai Shandong'
}
```
```js
let fruit = new Object({
  name: 'Apple',
  price: 8.8,
  productionPlace: 'Yantai Shandong'
})
```

在 `Js` 中，几乎所有的对象都是 `Object` 类型的实例，它们都会从 `Object.property` 继承属性和方法。


# 2. 访问 Object 内容
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


# 3. 判断属性是否存在
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


# 4. 删除 Object 中的属性
使用 `delete` 关键字可以删除属性。

```js
delete fruit.productionPlace;
console.log(fruit);
```
```
输出结果：
{ name: 'Apple', price: 8.8  }
```


# 5. 遍历 Object 中的属性
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


# 6. 静态方法
- Object.assign()
- Object.defineProperty()
- Object.defineProperties()
- Object.entries()
- Object.values()
- Object.freeze()
- Object.create()
- Object.getOwnPropertyDescriptor()
- Object.getOwnPropertyNames()
- Object.getPropertyOf()
- Object.is()
- Object.isExtensible()
- Object.isFrozen()


## 6.1. Object.assign()
将所有可枚举属性的值从一个或多个源对象分配到目标对象。
- 参数：目标对象，源对象。
- 返回值：目标对象。

```js
const productionInfo = { 
  manufacturenData: '20220305'
}
const returnTarget = Object.assign(fruit, productionInfo);
console.log(returnTarget);
```
```
输出结果：
{ 
  name: "Apple", 
  price: 8.8, 
  productionPlace: "Yantai Shandong", 
  manufactureData: "20220305" 
}
```

## 6.2. Object.defineProperty()
直接在一个对象上定义一个新属性，或者修改一个对象的现有属性。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- 参数：要定义属性的对象，新定义的属性名称，属性描述。
- 返回值：定义属性后的新对象。

```js
Object.defineProperty(fruit, 'comment', {
  configurable: true,
  enumerable: true,
  value: 'amazing',
  writable: true,
});

console.log(fruit.comment);
```
```
输出结果：
amazing
```
对象里目前存在的属性描述符有两种主要形式：「数据描述符」和「存取描述符」。两者共享了下面这些属性：
- configurable
- enumerable

「数据描述符」还具有下面这些属性：
- value
- writable

「存取描述符」还具有下面这些属性：
- get
- set

```js
Object.defineProperty(fruit, 'comment', {
  set: function(value) {
    console.log('赋值操作：' + value);
  },
  get: function() {
    return "amazing";
  }
})

fruit.comment = 'good';
console.log(fruit.comment);
```
```
输出结果：
amazing
good
```

## 6.3. Object.freeze()
冻结一个对象，冻结后不能再添加新的属性，也不能再删除、修改属性。

```js
Object.freeze(fruit);
fruit.comment = 'amazing';
console.log(fruit)
```
```
输出结果：
{ 
  name: "Apple", 
  price: 8.8, 
  productionPlace: "Yantai Shandong"
}
```

## 6.4. Object.getPropertyOf() 
返回指定对象的原型。

```js
const array = [];
const type = Object.getPropertyOf(array);

console.log(Object.getPropertyOf(array));
console.log(Object.getPropertyOf(type));
```
```
输出结果：
Array
Object
```


# 7. 实例属性
- Object.property.constructor
- `Object.property.__proto__`


# 8. 实例方法
- Object.property.hasOwnProperty()
- Object.property.isPropertyOf()
- Object.property.toString()
- Object.property.localeString()
- Object.property.valueOf()