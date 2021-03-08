import fakeFetch from "./FakeFetch";

const syncCallsToServer = (msg1, msg2) => {
  return fakeFetch(msg1, false).then((res) => fakeFetch(res + msg2));
};

// syncCallsToServer("Priyanshu", "Singh").then((final) => console.log(final));
