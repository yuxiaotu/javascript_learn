const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

/**
 * { admin: true, name: "Lydia", age: 21 }
 */

/**
 * 使用拓展运算符合并了两个对象
 */