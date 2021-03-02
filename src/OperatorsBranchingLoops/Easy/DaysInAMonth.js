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

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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
  // console.log(month);
  if (month === 31) {
    return `Yes the month has 31 days.`;
  }
  return `No the month doesn't has 31 days.`;
};
// console.log(checkDaysInMonth(January));
// console.log(checkDaysInMonth(February));
// console.log(checkDaysInMonth(June));
