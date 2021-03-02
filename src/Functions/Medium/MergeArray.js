// Question4: Given two arrays, your function should return single merged array.

const mergeArray = (array1, array2) => {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
};
// console.log(mergeArray([1, 2, 3], [4, 5, 6]));
