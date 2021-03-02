// Question: Given an array of integers
const integers = [
  8,
  23,
  5,
  16,
  30,
  78,
  2,
  97,
  4,
  45,
  6,
  90,
  9,
  12,
  35,
  2,
  40,
  13,
  70,
  5,
  85,
  3,
  7,
  20
];
// console.log(integers);

// (f) Return an object with some of all odd numbers and even numbers separately.

const filterOdd = integers.filter((a) => a % 2 !== 0);
const filterEven = integers.filter((a) => a % 2 === 0);
const obj = {
  sumOfOdd: filterOdd.reduce((a, b) => a + b, 0),
  sumOfEven: filterEven.reduce((a, b) => a + b, 0)
};
// console.log(obj);

const oddEvenSum = (array) => {
  return array.reduce(
    (a, b) => {
      if (b % 2) {
        return { ...a, evenSum: a.evenSum + b };
      } else return { ...a, oddSum: a.oddSum + b };
    },
    { oddSum: 0, evenSum: 0 } //This is our second argument which is a in parameters and b comes from the array[i].
  );
};
// console.log(oddEvenSum(integers));
