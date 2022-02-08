let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null

/**
 * setInterval() 的回调仍然会被每秒钟调用
 */

/**
 * 一般情况下当我们将对象赋值为 null, 那些对象会被进行 垃圾回收（garbage collected）
 *  因为已经没有对这些对象的引用了。然而，setInterval的参数是一个箭头函数（所以上下文绑定到对象 config 了），
 * 回调函数仍然保留着对 config的引用。只要存在引用，对象就不会被垃圾回收
 */