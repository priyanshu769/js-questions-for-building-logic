// Question6: Given two dates, your function should return which one comes before the other.

const minDate = (date1, date2) => {
  const dateOne = date1.split("/");
  const dateTwo = date2.split("/");
  if (parseInt(dateOne[2]) > parseInt(dateTwo[2])) {
    return date2;
  } else if (parseInt(dateOne[2]) < parseInt(dateTwo[2])) {
    return date1;
  } else if (parseInt(dateOne[2]) === parseInt(dateTwo[2])) {
    if (parseInt(dateOne[1]) > parseInt(dateTwo[1])) {
      return date2;
    } else if (parseInt(dateOne[1]) < parseInt(dateTwo[1])) {
      return date1;
    } else if (parseInt(dateOne[1]) === parseInt(dateTwo[1])) {
      if (parseInt(dateOne[0]) > parseInt(dateTwo[0])) {
        return date2;
      } else if (parseInt(dateOne[0]) < parseInt(dateTwo[0])) {
        return date1;
      }
    }
  }
};

// console.log(minDate("02/05/2021", "24/01/2021"));
