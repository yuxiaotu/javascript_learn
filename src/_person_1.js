function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person('Lydia', 'Hallie');
const sarah = Person('Sarah', 'Smith');

console.log(lydia);
console.log(sarah);

/**
 * Person {firstName: "Lydia", lastName: "Hallie"}
 * undefined
 */

/**
 * 当使用 new 时，this 引用我们创建的空对象。
 * 当使用 new 时， this 引用的是全局对象。
 * 
 * 实际上定义了 global.firstName = 'Sarah', global.lastName = 'Smith'
 * sarah 本身是 undefined
 */