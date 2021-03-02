// Question1: Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
const fizzBuzz = () => {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    array.push(i);
  }
  // console.log(array);
  for (let j = 0; j <= array.length; j++) {
    if (array[j] % 3 === 0 && array[j] % 5 === 0) {
      array[j] = "fizzbuzz";
      // console.log(array[j]);
      // console.log("fizz");
      // array.splice(array[j], "fizz");
    } else if (array[j] % 3 === 0) {
      array[j] = "fizz";
      // console.log(array[j]);
      // console.log("buzz");
      // array.splice(array[j], "buzz");
    } else if (array[j] % 5 === 0) {
      array[j] = "buzz";
      // console.log(array[j]);
      // console.log("fizzbuzz");
      // array.splice(array[j], "fizzbuzz");
    }
  }
  return array;
};
// console.log(fizzBuzz());
