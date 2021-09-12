/**
 * 逆转数字
 */

const reverseNum = (num) 
      => parseFloat(`${num}`.split('').reverse().join()) * Math.sign(num);
