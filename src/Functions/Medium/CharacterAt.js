// Question5: Given a string and an index, your function should return the character present at that index in the string.

const characterAt = (string, index) => {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === index) {
      return string[i];
    }
  }
};
// console.log(characterAt("hello dude", 4));
