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
