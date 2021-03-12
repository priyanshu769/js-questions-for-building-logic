// Question: Write a Program to Print N Odd Number in Descending Order.

const nOddNumbers = (n) => {
  const nArr = [];
  for (let i = 0; nArr.length < n; i++) {
    if (i % 2 !== 0) {
      nArr.push(i);
    }
  }
  for (let j = 0; j < nArr.length; j++) {
    console.log(nArr[j]);
  }
};

// nOddNumbers(4);

const nOddNumbersDescending = (n) => {
  const nArr = [];
  for (let i = 0; nArr.length < n; i++) {
    if (i % 2 !== 0) {
      nArr.push(i);
    }
  }
  const nArrRev = nArr.reverse();
  for (let j = 0; j < nArr.length; j++) {
    console.log(nArrRev[j]);
  }
};

// nOddNumbersDescending(100);
