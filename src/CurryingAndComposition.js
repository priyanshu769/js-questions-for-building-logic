// Currying
// {
// function myName(a) {
//   function says(b) {
//     return console.log(a, b);
//   }
//   says("is saying hello!");
// }

// function num1(a) {
//   const c = a * a * a;
//   function num2(b) {
//     return console.log(a + b);
//   }
//   num2(c);
// }
// // num1(8);
// } These don't fall under currying.

// Currying means a function which returns a function.
function num3(a) {
  const c = a * a * a;
  return function num4(b) {
    return a + b + c;
  };
}

const call1 = num3(2);
// console.log(call1(0));

// You should search "How to call currying function?" and read about it.

function num6(a) {
  const c = a * a * a;
  return function num7(b) {
    const e = a + b + c;
    return function num8(d) {
      return a * b * c + d + e;
    };
  };
}

const call2 = num6(2);
const call3 = call2(3);
// console.log(call3(4));

// Composition
const username = (username) => `${username} is trying to log in.`;
const userID = (id) => `${id} will be logged in.`;

const logBoth = (a, b) => console.log(a, b);

console.log(username("Priyanshu"));
console.log(userID("77776"));
logBoth(username("Priyanshu"), userID("77776"));
