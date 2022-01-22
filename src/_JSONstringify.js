const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

/**
 * {"level":19, "health":90}
 */

/**
 * JSON.stringify的第二个参数是 替代者(replacer). 
 * 替代者(replacer)可以是个函数或数组，
 * 用以控制哪些值如何被转换为字符串。
 * 
 * 如果替代者(replacer)是个 数组 ，
 * 那么就只有包含在数组中的属性将会被转化为字符串。
 * 在本例中，只有名为"level" 和 "health" 的属性被包括进来， 
 * "username"则被排除在外。 data 就等于 "{"level":19, "health":90}".
 */