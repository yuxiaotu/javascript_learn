# 事件循环

> **参考**：[JavaScript中的 Event Loop](https://zhuanlan.zhihu.com/p/33058983)

JavaScript 是单线程非阻塞的编程语言，只有一个主线程来处理所有的任务，需要异步操作的时候主线程就会挂起这个这个任务，等到异步操作有结果了再按照一定的规则去执行回调。

## 01.为什么是单线程

JavaScript 最初的运行环境是在浏览器中，作为脚本语言使用，而它的主要作用是操作 DOM 元素。为了避免多个线程同时操作一个 DOM 元素而造成的错误现象，JavaScript 只有一个 主线程来执行代码保证程序的一致性。

但是 JavaScript 的另一个特点是「非阻塞」，这就需要事件循环来实现了。

## 02.执行栈和任务队列

当调用一个方法的时候，会生成一个与这个方法对应的执行环境（context），也叫做执行上下文。在这个执行环境中存在着这个方法私有的作用域，上层作用域的指向，方法的参数，这个作用域中定义的变量以及这个作用域的 this 对象。

因为 JavaScript 是单线程的，这些方法会被依次排列、逐一调用，这就叫作「执行栈」。

当 Js 在执行栈中遇到了异步操作，那么就会将这个事件挂起，继续执行栈中的其他任务。这个时候，需要等到异步操作有了结果才能继续进入执行栈中执行。但是异步操作返回结果后也不会马上执行，而是会放入一个队列中，要等执行栈中所有的任务执行完毕后才会执行。这个暂时存放异步方法的队列称为「任务队列」。

## 03.微任务和宏任务

任务队列中的任务会被分为 「微任务」和「宏任务」。微任务将优先于宏任务执行。

**微任务**

- new Promise()

**宏任务**

- setTimeot()
- setInterval()
