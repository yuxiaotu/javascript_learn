# typeof和instanceof

## 01. typeof
```js
typeof 123; // number
typeof 'jartto'; // string
typeof !!’0’; // boolean
typeof new Function(); // function
typeof name; // undefined
```

ES6 中 `let` 和 `const` 会形成「暂时性死区」也意味着 `typeof` 不再是一个百分之百安全的操作。

使用 `typeof` 来判断引用类型，其返回的结果都是 `object`。

```js
let arr = [1,2,3];
let obj = {name: 'jartto'};
let obj1 = null;

typeof arr; // object
typeof obj; // object
typeof obj1; // object
```

## 02. instanceof
`instanceof` 是用来判断 `A` 是否为 `B` 的实例，表达式为：`A instanceof B`，如果 `A` 是 `B` 的实例，则返回 `true`,否则返回 `false`。

```js
instanceof (A,B) = {
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R) {
        //A的内部属性__proto__指向B的原型对象
        return true;
    }
    return false;
}
```

从上述过程可以看出，当 `A` 的 `__proto__` 指向 `B` 的 `prototype` 时，就认为 `A` 就是 `B` 的实例，我们来看几个例子。

```js
[] instanceof Array; //true
({}) instanceof Object;//true
new Date() instanceof Date;//true
```
