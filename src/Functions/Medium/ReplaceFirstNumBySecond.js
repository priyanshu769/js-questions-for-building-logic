// Question3: Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

const replace = (array, num1, num2) => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === num1) {
      array[i] = num2;
    }
  }
  return array;
};

// console.log(replace([1, 5, 2, 3, 5, 4, 5, 5, 5, 6, 5, 7, 5, 8, 5], 5, 10));
