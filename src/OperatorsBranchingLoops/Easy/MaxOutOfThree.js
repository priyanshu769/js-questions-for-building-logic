// Question4:Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const findMaxInThree = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return `${a} is greater in all.`;
    }
    return `${c} is greater in all.`;
  } else if (b > c) {
    return `${b} is greater in all.`;
  }
  return `${c} is greater in all.`;
};
// console.log(findMaxInThree(8, 23, 17));
// console.log(findMaxInThree(30, 20, 23));
// console.log(findMaxInThree(8, 100, 17));
