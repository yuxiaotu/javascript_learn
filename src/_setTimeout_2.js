const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

bar()
foo()
baz()

/**
 * First
 * Third
 * Second
 */

/**
 * setTime() 将会最后打印
 */