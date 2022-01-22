const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: 'true'
}

/**
 * 在 JavaScript 中，所有对象的 keys 都是字符串，除非是 symbol，
 * 虽然不会定义它们为字符串，但是在底层也会转化为字符串。
 */

/**
 * 当我们使用括号语法时（[]），JavaScript 会解释（或者 unboxes）语句。
 * 它首先看到第一个开始括号 [ 并继续前进直到找到结束括号 ]。
 * 只有这样，它才会计算语句的值。
 */

/**
 * mouse[bird.size]，首先计算 brid.size，得到 small，
 * 然后 mouse["small"] 返回 true
 */

/**
 * mouse.bird.size 无效
 * 使用点语言，mouse 没有 bird 这个 key，结果就是 undefined
 * 最后就变成了 undefined.size。
 * 会报错，Cannot read property "size" of undefined
 */
