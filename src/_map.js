[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
})

/**
 * [underfined, undefined, undefined]
 */

/**
 * typeof num == "number" 的值为 true
 * 但是没有返回值。
 */