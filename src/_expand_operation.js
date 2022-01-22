const value = { number: 10 };

const multiply = (x = {...value}) => {
  console.log(x.number *= 2);
}

multiply();
multiply();
multiply(value);
multiply(value);

/**
 * 20
 * 20
 * 20
 * 40
 */

/**
 * x = { number: 10 }
 * 前两次输出的值是 20
 * 
 * 第三次调用 multiply 时，我们传递了一个参数，
 * 即对象value。 *=运算符实际上是x.number = x.number * 2的简写，
 * 我们修改了x.number的值，并打印出值20。
 * 
 * 第四次，我们再次传递value对象。 x.number之前被修改为20，
 * 所以x.number * = 2打印为40。
 */