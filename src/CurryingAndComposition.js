// Currying

// Currying means a function which returns a function.
function num3(a) {
  const c = a * a * a;
  return function num4(b) {
    return a + b + c;
  };
}

const call1 = num3(2);
// console.log(call1(0));

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

// Currying question
// create a function which takes your name and returns a function which would add your name to anything that function says.

const name = (name) => {
  return function nameSays(phrase) {
    return phrase + name;
  };
};

const nameSaid = name("Priyanshu");
// console.log(nameSaid("I'm "));

// Composition question
// Write a function which can log any text with your username. Another function which can write any text with your userID. Now compose both functions to give one function which can log any text with both username + userID.
const username = (username) => `${username} is trying to log in.`;
const userID = (id) => `${id} will be logged in.`;

const logBoth = (a, b) => console.log(a, b);

// console.log(username("Priyanshu"));
// console.log(userID("77776"));
// logBoth(username("Priyanshu"), userID("77776"));

// The One question

const compose = (...functions) => {
  return (num) => functions.reduce((acc, curr) => curr(acc), num);
};
const increment = (num) => num + 1;
const square = (num) => num * num;

const incrementThenSq = compose(increment, square);

console.log(incrementThenSq(3));
