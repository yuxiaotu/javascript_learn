class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());

/**
 * TypeError
 */

/**
 * 不能像常规，给构造函数添加属性。
 * 如果你想一次性给所有实例添加特性，你应该使用原型。
 * 
 * 将方法添加到构造函数本身，但不是每一个实例都需要这个方法，就会消耗内存空间
 * 如果将它添加到原型中，那么它只存在于内存中的一个位置，但是所有实例都可以访问它！
 */

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }