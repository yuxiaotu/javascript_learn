# Proxy

- [Proxy 的作用](#1-作用)
- [使用方法](#2-使用)
- [handler 拦截方法](#3-handler-拦截方法)


# 1. 作用
`Proxy` 的作用是在目标对象之前架设一层「拦截」，对该对象的访问都必须通过这一层「拦截」，可以外界的访问进行过滤和改写。


# 2. 使用
`Proxy` 为构造函数，用来生成 `Proxy` 对象。
```js
let p = new Proxy(target, handler);
```

- `target` 是用 `Proxy` 包装的被代理对象。
- `handler` 是一个对象，其声明了代理 `target` 的一些操作，其属性是当执行一个操作时定义代理的行为的函数。 


# 3. handler 拦截方法
- get(target, propKey, receiver)
- set(target, propKey, receiver)
- has(target, propKey)
- deleteProperty(target, propKey)
- ownKeys(target)
- getOwnPropertyDescriptor(target, propKey)
- getOwnPropertyDescriptor(proxy, propKey)
- defineProperty(target, propKey, propDesc)
- defineProperty(proxy, propKey, propDesc）
- preventExtensions(target)
- getPrototypeOf(target)
- isExtensible(target)
- setPrototypeOf(target, proto)
- apply(target, object, args)
- construct(target, args)

例如，`get()` 方法用于拦截某个属性的读取操作。
```js
var person = {
  name: '张三'
}

var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("prop name" + propKey + "not found");
    }
  }
});

proxy.name; // 张三
proxy.age;  // 抛出错误
```


例如，`set()` 方法用于拦截某个属性的设置操作。
```js
const numbers = [];
const proxy = new Proxy(numbers, {
  set: function(target, propKey, value) {
    if (value < 0) {
      value = 0;
    } else if (value > 100) {
      value = 100;
    } 
    target[key] = value;
    return true;
  }
});

proxy.push(1);
proxy.push(101);
proxy.push(-1); // [1, 100, 0]
```