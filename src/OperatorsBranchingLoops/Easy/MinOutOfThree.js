// Question5: Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const findMinInThree = (a, b, c) => {
  if (a < b) {
    if (a < c) {
      return `${a} is smaller in all.`;
    }
    return `${c} is smaller in all.`;
  } else if (b < c) {
    return `${b} is smaller in all.`;
  }
  return `${c} is smaller in all.`;
};
// console.log(findMinInThree(35, 29, 56));
// console.log(findMinInThree(56, 35, 29));
// console.log(findMinInThree(29, 56, 35));
