const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
})

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
})

Promise.race([firstPromise, secondPromise]).then(
  res => console.log(res)
)

/**
 * two
 */

/**
 * Promise.race() 会优先解析。
 * secondPromise 会首先解析
 */