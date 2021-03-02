// Question3: Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
// Answer1
const findMax = (a, b) => {
  if (a > b === true) {
    return `${a} is greater than ${b}`;
  }
  return `${b} is greater than ${a}`;
};
// console.log(findMax(129, 251));
// console.log(findMax(251, 129));

// Answer2
const findMax2 = (a, b) => {
  const v1 = a - b;
  const v2 = b - b;
  if (v1 > v2) {
    return `${a} is greater than ${b}`;
  }
  return `${b} is greater than ${a}`;
};
// console.log(findMax2(129, 251));
// console.log(findMax2(251, 129));
