const nums = [1, 2, 3, 4, 5]

/**
 * forEach()
 */
let n1 = nums;
n1.forEach((currentValue, index, _array) => _array[index] = currentValue + 1);
console.log(n1);


/**
 * map()
 */
let res2 = nums.map( currentValue => currentValue * 2 );
console.log(res2);


/**
 * filter()
 */
let res3 = nums.filter( currentValue =>  currentValue % 2 === 0 );
console.log(res3);

/**
 * every()
 */
let res4 = nums.every( currentValue => currentValue < 10);
console.log(res4);

/**
 * reduce()
 */
let res5 = nums.reduce( (accumulator, currentValue) => accumulator + currentValue);
console.log(res5);