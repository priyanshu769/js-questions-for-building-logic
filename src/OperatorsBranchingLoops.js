// Easy Easy Easy
// Easy Easy Easy
// Easy Easy Easy
// Not marked by me, marked by industry.

// Question1: Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
const addThem = (a, b, c, d, e) => {
  return a + b + c + d + e;
};
// console.log(addThem(5, 13, 7, 21, 48));

// Question2: Write a program to take a number input from user and determine whether the number is odd or even.
const oddOrEven = (a) => {
  // console.log(a % 2);
  if (a % 2 === 0) {
    return console.log("even");
  }
  return console.log("odd");
};
// oddOrEven(7);
// oddOrEven(8);

// Question3: Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
// Answer1
const findMax = (a, b) => {
  if (a > b === true) {
    return console.log(`${a} is greater than ${b}`);
  }
  return console.log(`${b} is greater than ${a}`);
};
// findMax(129, 251);
// findMax(251, 129);

// Answer2
const findMax2 = (a, b) => {
  const v1 = a - b;
  const v2 = b - b;
  if (v1 > v2) {
    return console.log(`${a} is greater than ${b}`);
  }
  return console.log(`${b} is greater than ${a}`);
};
// findMax2(129, 251);
// findMax2(251, 129);

// Question4:Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
const findMaxInThree = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return console.log(`${a} is greater in all.`);
    }
    return console.log(`${c} is greater in all.`);
  } else if (b > c) {
    return console.log(`${b} is greater in all.`);
  }
  return console.log(`${c} is greater in all.`);
};
// findMaxInThree(8, 23, 17);
// findMaxInThree(30, 20, 23);
// findMaxInThree(8, 100, 17);

// Question5: Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.
const findMinInThree = (a, b, c) => {
  if (a < b) {
    if (a < c) {
      return console.log(`${a} is smaller in all.`);
    }
    return console.log(`${c} is smaller in all.`);
  } else if (b < c) {
    return console.log(`${b} is smaller in all.`);
  }
  return console.log(`${c} is smaller in all.`);
};
// findMinInThree(35, 29, 56);
// findMinInThree(56, 35, 29);
// findMinInThree(29, 56, 35);

// Question6: Write program to take a month as an input from the user and find out whether the month has 31 days or not.:
// const months = [
//   { January: 31 },
//   { February: 28 },
//   { March: 31 },
//   { April: 30 },
//   { May: 31 },
//   { June: 30 },
//   { July: 30 },
//   { August: 31 },
//   { September: 30 },
//   { October: 31 },
//   { November: 30 },
//   { December: 31 }
// ];
// I tried it doing like this but it wasn't taking, I don't get what's wrong.

const monthDays = [31, 28, 31, 30, 31, 30, 30, 31, 30, 31, 30, 31];
const [
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
] = monthDays;

const checkDaysInMonth = (month) => {
  console.log(month);
  if (month === 31) {
    return console.log(`Yes the month has 31 days.`);
  }
  return console.log(`No the month doesn't has 31 days.`);
};
// checkDaysInMonth(January);
// checkDaysInMonth(February);
// checkDaysInMonth(June);

// Intermediate Intermediate Intermediate
// Intermediate Intermediate Intermediate
// Intermediate Intermediate Intermediate
// Not marked by me, marked by industry.

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
  console.log(array);
};
// fizzBuzz();
// I did it somehow, first of all I did third statement in every if else but it wasn't working then I checked by logging it that if the for loop is working or not. Then I saw it was working and then I did that array[j]= "something" and boom, I got it.

// Question2: Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *
const printStar = () => {
  const star = "*";
  for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
    // for (let j = 1; j <= i; j++) {
    //   console.log("*");
    // }
    // console.log("\n");
  }
};
// printStar();
// I was stuck in this for like 10 minutes and then...
// I din't knew about repeat, then I googled how to do this question and got to know about repeat.
// Question3: Write a program to take a number input from user and print multiplication table 12 times for that number.

const table = (a) => {
  for (let i = 1; i <= 12; i++) {
    console.log(a * i);
  }
};
// table(2);
// This was easy, hardly took 1 minute.

// Question4: Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...

// const fibonacci = (a = 0, b = 1) => {
//   if (a === 0 && b === 0) {
//     return console.log("Can't return a Fibonacci series.");
//   } else console.log("calculating...");
//   // trying to figure out
// };
// // fibonacci(0, 1);

// Question5: Write a program to take an input from a user and find its Factorial.

// const factorial = (a) => {
//   for (let i = 0; i < a; i++) {
//     let x = a;
//     function multiply() {

//     }
//     multiply();
//   }
// };

// Question6:Write a Program to take a number input from user and find if the number is Prime or not.

const checkPrime = (a) => {
  if (a === 1) {
    console.log(`${a} is a composite number.`);
  } else if (a === 2 || a === 3) {
    console.log(`${a} is a prime number.`);
  } else if (a % a === 0 && a % 1 === 0 && (a % 2 === 0 || a % 3 === 0)) {
    console.log(`${a} is not a prime number.`);
  } else if (a % a === 0 && a % 1 === 0 && (a % 2 != 0 || a % 3 != o)) {
    console.log(`${a} is a prime number.`);
  }
};
// checkPrime(999983);
// I came up with this solution. As of now it has worked fine. But now I think I need to google for other solutions, what if there is a better way.
