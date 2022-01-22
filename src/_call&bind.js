const person = {name: 'Lydia'};

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);

/**
 * Lydia is 21
 * function
 */

/**
 * call() 和 bind() 都是改变 this 所指的对象
 * bind() 虽然绑定了上下文，但是不会马上执行。
 */