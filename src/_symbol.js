const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))

/**
 * [Symbol('a')]: 'b'
 * []
 */

/**
 * Symbol 类型的值不能枚举。
 */