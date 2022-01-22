(() => {
  let x, y;
  try {
    throw new Error()
  } catch(x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})

/**
 * 1
 * undefined
 * 2
 */

/**
 * catch 块内的 x 与之前的不同
 * 在 catch 作用域内输出 1
 * 作用域外，输出 undefined
 * y 的值为 2
 */