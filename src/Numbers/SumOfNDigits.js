// Question: Write a program to calculate sum of N natural digits, as input by the users?

const sumOfNDigits = (n) => {
  const nArr = [];
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    nArr.push(i);
  }
  for (let j = 0; j < nArr.length; j++) {
    sum += nArr[j];
  }
  return sum;
};

// console.log(sumOfNDigits(100));
