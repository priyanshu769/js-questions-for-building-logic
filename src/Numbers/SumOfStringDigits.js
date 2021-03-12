// Question: Write a JavaScript program to compute the sum of all digits that occur in a given string.

const sumOfStringDigits = (string) => {
  const stringNums = string.split("");
  let sum = 0;
  for (let i = 0; i < stringNums.length; i++) {
    sum += parseInt(stringNums[i]);
  }
  return sum;
};

// console.log(sumOfStringDigits("1234"));
