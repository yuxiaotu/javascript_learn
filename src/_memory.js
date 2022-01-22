const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));

/**
 * Calculated! 20 From cache! 20 From cache! 20
 */

/**
 * add函数是一个记忆函数。 通过记忆化，我们可以缓存函数的结果，
 * 以加快其执行速度。上述情况，我们创建一个cache对象，用于存储先前返回过的值。
 * 
 * 如果我们使用相同的参数多次调用addFunction函数，它首先检查缓存中是否已有该值，
 * 如果有，则返回缓存值，这将节省执行时间。如果没有，那么它将计算该值，并存储在缓存中。
 */