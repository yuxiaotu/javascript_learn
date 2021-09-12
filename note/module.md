# 模块化

JavaScript 的模块化编程是迫切的需求，在理想状态下只需要实现核心的业务逻辑，其他都可以使用被人已经写好的模块。

## 01.演变过程

前端工程的复杂度越来越高，代码越来越多，需要加载的文件有越来越多，就会出现下面的问题。

- 所有的文件都挂载在 window /global 上，会污染全局环境，需要考虑命名冲突的问题
- script 是顺序加载，如果文件之间有依赖就要考虑文件的叫做顺序
- 如果 js 文件太多，请求次数就会增加，需要更多的加载时间

JavaScript 的模块化演变经历了无模块化，到 CommomJS ，再到 AND，以及现在的 ES6 规范。

**无模块：** 就是通过 script 标签引入文件，会污染全局作用域，依赖关系不明确。

**CommonJS：** 是偏向于服务端的规范，NodeJS 采用了这个规范。一个模块就是一个脚本文件，require 第一次执行该脚本就会执行整个脚本，在内存中生成一个对象。

**AMD：** 异步加载模块规范，一个单独的文件就是一个模块。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。这里的异步加载是指不会影响浏览器其他的任务。

**ESM：**由两个命令构成，import 和 export。import 用来输入其他模块提供的接口，export 用于规范模块对外的接口。

## 02.ES6 模块化

在 ES6 模块中自动采用严格模式，有下面这些规定：

- 变量必须先声明
- 函数参数不能有同名的属性
- 不能使用 with
- 不能对只读属性赋值
- 禁止 this 指向全局对象

**export**

接口名和模块内部变量之间必须建立一一对应的关系，在 function 和  class 的输出，也必须遵守这样的写法。

export 语句输出的接口，与其对应的值是动态绑定的关系，即通过该接口可以取得模块内部实时的值。

```js
// 第一种
export var a = '123';
export const _b = '2323'
export let c = '2222' 

// 第二种
var a = '123';
const _b = '2323'
let c = '2222' 
export {a, _b, c}; // 推荐

// 第三种
var a = '123';
const _b = '2323'
let c = '2222' 
export {
    a as stream1,
    _b as stream2,
    c as stream3};
```

<br>

**import**

```js
// 第一种
import {a, _b ,c} from './profile'

// 第二种
import {stream as firstValue} from ',/profile'

// 第三种
import * as circle from './module'
```

<br>

**export default**

export default 是一种默认导入的方法

```js
export default function() {
    
}
```

在使用 import 导入时可以为匿名函数指定任意名字

```js
import a from './module';
```

