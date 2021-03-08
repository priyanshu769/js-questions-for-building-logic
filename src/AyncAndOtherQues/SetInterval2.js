// Question: Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"

const bangBang = (num) => {
  const interval = setInterval(() => {
    console.log(num);
    num--;
    if (num < 0) {
      console.log("Bang Bang");
      clearInterval(interval);
    }
  }, 1000);
};
// bangBang(5);
