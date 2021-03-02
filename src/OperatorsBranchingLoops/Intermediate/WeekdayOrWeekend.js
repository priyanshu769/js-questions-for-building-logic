// Question7: Write a program to take a day as an input and determine whether it is a weekday or weekend.

const weekendOrNor = (a) => {
  if (
    a === "Monday" ||
    a === "Tuesday" ||
    a === "Wednesday" ||
    a === "Thursday" ||
    a === "Friday"
  ) {
    return `${a} is a weekday.`;
  } else if (a === "Saturday" || a === "Sunday") {
    return `${a} is a weekend.`;
  } else return `${a} is not a day name.`;
};
// console.log(weekendOrNor("Tuesday"));
// console.log(weekendOrNor("Saturday"));

const weekendOrNor2 = (a) => {
  const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const weekend = ["saturday", "sunday"];
  if (weekday.includes(a)) {
    return `${a} is a weekday.`;
  } else if (weekend.includes(a)) console.log(`${a} is a weekend.`);
  else return `${a} is not a day name.`;
};
// console.log(weekendOrNor2("tuesday"));
// console.log(weekendOrNor2("saturday"));
