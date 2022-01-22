const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));

/**
 * { name: "Lydia", age: 21 }
 * ["name"]
 */

/**
 * 使用defineProperty方法给对象添加了一个属性之后，
 * 属性默认为不可枚举(not enumerable). Object.keys方法仅返回对象中 
 * 可枚举(enumerable) 的属性，因此只剩下了"name".
 */