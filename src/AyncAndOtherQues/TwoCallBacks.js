// Question: Will Thanos kill me?

const willThanosKillMe = (name, willKillMe, WillNotKillMe) => {
  if (name.length % 2 === 0) {
    WillNotKillMe();
  } else willKillMe();
};

// willThanosKillMe(
//   "Priyansh",
//   () => console.log("I'll die."),
//   () => console.log("Yay I'm alive")
// );
