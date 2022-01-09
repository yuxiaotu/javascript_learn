async function getData() {
  return await Promise.resolve("I made it");
}

const data = getData();
console.log(data);

/**
 * Promise {<pending>}
 */

/**
 * 异步函数始终返回一个promise。
 * await仍然需要等待promise的解决：当我们调用getData()并将其赋值给data，
 * 此时data为getData方法返回的一个挂起的promise，该promise并没有解决。
 * 如果我们想要访问已解决的值"I made it!"，可以在data上使用.then()方法：
 * data.then(res => console.log(res))
 */