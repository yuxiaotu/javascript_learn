function checkAge(data) {
  if(data === {age: 18}) {
    console.log('You are an adult');
  } else if (data == {age: 18}) {
    console.log('You are still an adult');
  } else {
    console.log(`You don't have an age I guess`);
  }
}

checkAge({age: 18})

/**
 * You don't have an age I guess
 */

/**
 * 对象通过它们的引用（reference）进行比较。
 * JavaScript 检查对象是否具有对内存中相同位置的引用。
 * 作为参数传递的对象引用的内存位置，与用于判断相等的对象所引用的内存位置并不同。
 */