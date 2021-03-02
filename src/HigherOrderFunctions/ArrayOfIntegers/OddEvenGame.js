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

// (e) Return an array of numbers where odd numbers are incrementd by 1 and even numbers are decremented by one.
const oddEvenGame = (array) => {
  return array.map((a) => {
    if (a % 2 === 0) {
      return a - 1;
    } else return a + 1;
  });
};
// console.log(oddEvenGame(integers));
