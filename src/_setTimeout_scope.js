var status = "π"

setTimeout(() => {
  const status = "π"

  const data = {
    status: "π₯",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)


/**
 * "π₯" and "π"
 */

/**
 * data.getStatus() δΈ­ this ζε data ε―Ήθ±‘οΌθΎεΊ  π₯
 * data.getStatus.call(this) ζεε¨ε±ε―Ήθ±‘οΌθΎεΊ π
 */