// Question6:Write a Program to take a number input from user and find if the number is Prime or not.

const checkPrime = (a) => {
  if (a === 1) {
    return `${a} is a composite number.`;
  } else if (a === 2 || a === 3) {
    return `${a} is a prime number.`;
  } else if (a % a === 0 && a % 1 === 0 && (a % 2 === 0 || a % 3 === 0)) {
    return `${a} is not a prime number.`;
  } else if (a % a === 0 && a % 1 === 0 && (a % 2 != 0 || a % 3 != o)) {
    return `${a} is a prime number.`;
  }
};
// console.log(checkPrime(999983));
