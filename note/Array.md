# Array

> 数组（Array）是 JavaScript 中最常用的数据结构，数组中的每一项都被叫做 「元素」，元素可以是任何类型的数据。每个元素都拥有一个索引值可以用来标识这个元素。数组的长度是有限的，不大于 2^32-1 。 Array 会从  Array.prototype 继承属性和方法。

<br>



### 1，数组迭代方法

> 🌰 [code](../src/Array_Iteration_Methods.js)

#### forEach()

**作用：** 每个元素都会执行一次给定的回调函数

**返回值：** undefined

**参数：** callback，thisArg

callback 可以传入三个参数，分别是正在处理的元素（currentValue）,当前元素索引（index）,当前数组（array）。

调用 forEach() 后添加的元素，以及 delete 删除的元素都不会被访问到。

<br>



#### map()

**作用：** 每个元素执行一次回调函数，将所有结果组成一个新的数组返回

**返回值：** 由原数组的每一项执行回调函数后组成的新数组。

**参数**：callback，thisArg

callback 只会在有值的索引上被调用，那些从来没有被赋值的或者是使用 delete 删除的索引则不会被调用。map() 不会修改原数组本身。

<br>



#### filter()

**作用：** 过滤得到所有能够通过回调函数测试的值

**返回值：**由通过测试的元素组成的新数组，都没有通过就返回空数组。

**参数**：callback，thisArg

<br>



#### every()

**作用：**判断数组中所有的元素是否都能够通过回调函数的测试

**返回值：** boolean

**参数：** callback，thisArg

如果被测数组是空数组，那么结果始终返回 true

<br>



#### some()

**作用：**判断是否存在一个可以通过回调函数测试的元素

**返回值：** boolean

**参数：** callback，thisArg

如果被测函数是空数组，那么始终返回 false

<br>



#### reduce()

**作用：** 将每个元素经过回调函数处理后的值汇总为一个结果，起到一个累计的效果

**返回值：** 函数累计处理的结果

**参数：** callback，initialValue （可选）

此次的 callback 函数可以接收 4 个参数，分别是累计器（accumulator），当前值（currentValue）,当前索引（currentIndex）,sourceArray（原数组）。

initialValue 作为第一次调用 callback 函数时的第一个参数的值，如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。



### 2，修改器方法

> 

#### fill()

#### pop()

#### push()

#### reverse()

#### sort()

#### splice()

#### copyWithin()



### 3，访问方法

> 

#### concat()

#### includes()

#### join()

#### slice()

#### toString()

