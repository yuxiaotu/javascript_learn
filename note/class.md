# Class

# 1. 含义
JavaScript 中没有类这个概念，只能通过构造函数来生成实例对象。ES6 中 Class 只是一个语法糖。


# 2. 传统方法
这种方法和传统的面向对象语言差异很大。
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


# 3. Class 方法
`constructor()` 是构造方法，this 关键字代表实例对象。

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



