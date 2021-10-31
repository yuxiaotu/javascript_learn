# Class

> **参考：**[JavaScript中的类class](https://juejin.cn/post/6844903495783415822)

JavaScript 中没有类这个概念，通过构造函数来生成实例对象。ES6 中 Class 只是一个语法糖。

## 01.传统方法

```js
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    return '(' + this.x + ',' + this.y + ')';
}

v = new Point(1, 2);
```

这种方法和传统的面向对象语言差异很大

## 02.Class 方法

```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}
```

constructor() 是构造方法，this 关键字代表实例对象，

