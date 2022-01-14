var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)


/**
 * "🥑" and "😎"
 */

/**
 * data.getStatus() 中 this 指向 data 对象，输出  🥑
 * data.getStatus.call(this) 指向全局对象，输出 😎
 */