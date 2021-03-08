import fakeFetch from "./FakeFetch";

const getServerResponseLength = (msg) => {
  return fakeFetch(msg, false).then((res) => res.length);
};

// getServerResponseLength("hello").then((length) => console.log(length));
