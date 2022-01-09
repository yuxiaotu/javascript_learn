[1,2,3,4].reduce((x,y) => {
  console.log(x, y);
})

/**
 * 1 2
 * undefined 3
 * undefined 4
 */

/**
 * reduce() 接收4个参数：
 * 
 * Accumulator (acc) (累计器)
 * Current Value (cur) (当前值)
 * Current Index (idx) (当前索引)
 * Source Array (src) (源数组)
 * 
 */