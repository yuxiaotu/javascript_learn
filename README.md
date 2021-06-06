![javascript](https://tutorialmemo.com/wp-content/uploads/2021/01/JavaScript.jpg)

# JavaScript 学习笔记

## 1，原型链

:link: [原型对象和原型链](https://zhuanlan.zhihu.com/p/294808520)  [JavaScript prototype](https://medium.com/free-code-camp/a-beginners-guide-to-javascript-s-prototype-9c049fe7b34)

js 分为函数对象和普通对象，每个对象都有 `__proto__` 属性，但是只有函数对象才有 `prototype` 属性。

<img src="https://pic2.zhimg.com/80/v2-d63c2286055739a5e9eaf3f053292971_720w.jpg" alt="原型" style="zoom:67%;" />

**`__proto__ `: ** 是一个对象，有 `constructor` 和 `__proto__` 两个属性。

**`prototype`: ** 原型对象 `prototype` 有一个 constructor 属性，记录了实例是由哪个构造函数创建的。

### 原型链相等关系

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person01 = new Person('小明', 18);
```

原型和原型链会遵从以下两个准则

```js
// 原型对象的constructor指向构造函数本身
Person.prototype.constructor == Person
// 实例的__proto__和原型对象指向同一个位置
person01.__proto__ == Person.prototype 
```



### 原型链指向

<img src="https://pic4.zhimg.com/80/v2-d8ce9f160ae28fd2f068b4bccf3bf013_720w.jpg" alt="原型链的指向" style="zoom: 80%;" />



![原型链](https://user-gold-cdn.xitu.io/2019/11/6/16e3fec6c1fb209e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 2，类和继承









