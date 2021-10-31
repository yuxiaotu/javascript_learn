# 原型和原型链

> **参考**：[原型和原型链](https://www.cnblogs.com/powertoolsteam/p/14009110.html)

Js  的对象包含了一个叫 prototype 的内部属性，这个对象所对应的就是该对象的原型。

## 01.构造函数和原型

JavaScript 中没有类的概念，但 JavaScript  中仍然可以使用对象概念，为了保证对象之间的联系，JavaScript 引入了原型和原型链的概念。 

```js
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.bark = () => {
        console.log('wangwang');
    }
}

const dog1 = new Dog('dog1', 'black')
const dog2 = new Dog('dog2', 'white')
```

声明了一个构造函数，又创建了两个实例，虽然有面向对象的样子但是每次创建实例都要创建这个方法。所以可以把这个方法单独放到一个地方，让所有的实例都可以访问到。

```js
Dog.prototype.bark = () => {
    console.log('wangwang');
}
```

## 02.继承和原型链

JavaScript 中所有的对象都是它的原型对象继承而来，而原型对象自己也是一个对象，它也有自己的原型对象，这样一层一层上朔就形成了一个类似链表的结构，这就「原型链」。

所有原型链的终点都是 Object 的 prototype 属性。Object.prototype 指向的原型对象同样拥有原型，它的原型是 null，而 null 没有原型。

通过原型链就可以实现继承。

```js
function Dog(name, color) {
    this.name = name;
    this.color = color;
}

Dog.prototype.bark = () => {
    console.log('wangwang');
}

function Husky(name, color, weight) {
    Dog.call(this, name, color);
    this.weight = weight;
}

Husky.prototype = new Dog();
```

