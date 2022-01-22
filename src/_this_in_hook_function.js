const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()

/**
 * 20
 * NaN
 */

/**
 * diameter 是常规函数 this 指向 shape 对象
 * 
 * perimeter 是钩子函数，this 指向包含箭头函数的常规函数，
 * 如果没有常规函数的话就是全局对象
 */