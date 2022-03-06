# Symbol

- [Symbol 的作用和创建方法](#01-作用和创建方法)
- [Symbol 的使用场景](#02-Symbol-的使用场景)

## 01 作用和创建方法
`Symbol` 是 `Js` 中的一种基本数据类型，可以用来创建唯一的值。

使用 `Symbol()` 来创建。需要注意的是通过 `Symbol()` 方法创建值的时候不用使用 `new` 操作符，原因是通过 `new` 实例化的结果是一个 `object` 对象，而不是原始类型的 `symbol`

`Symbol()` 方法接收一个参数，表示对生成的 `symbol` 值的一种描述。

```js
let s = Symbol('foo')
```

## 02 Symbol 的使用场景
我们在代码中经常会用字符串或者数字去表示一些状态，也经常会面临缺乏语义性或者重复定义的问题，这时使用 `Symbol` 是最好的选择，每次新创建的 `Symbol` 都是唯一的，不会产生重复，而且我们可以给 `Symbol` 传入相应的描述。

```js
let statuses = {
    OPEN: Symbol('已下单'),
    IN_PROGRESS: Symbol('配送中'),
    COMPLETED: Symbol('订单完成'),
    CANCELED: Symbol('订单取消')
};

// 完成订单
task.setStatus(statuses.COMPLETED);
```

