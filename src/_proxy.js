const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;

/**
 * Added a new property! 
 * Accessed a property!
 */

/**
 * 自定义行为被定义在对象 handler。如果我们向对象 person 添加属性，set 将被调用。
 * 如果我们获取 person 的属性, get 将被调用。
 */