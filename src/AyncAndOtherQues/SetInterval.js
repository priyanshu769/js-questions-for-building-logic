// Question: write a function which takes a message and time. The function should print that message every X interval.

const intervalMsg = (message, time) => {
  setInterval(() => {
    console.log(message);
  }, time);
};

// intervalMsg("hello", 3000);
