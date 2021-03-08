import fakeFetch from "./FakeFetch";

const sync = async (msg1, msg2) => {
  const data1 = await fakeFetch(msg1, false);
  const data2 = await fakeFetch(data1 + msg2, false);
  console.log(data2);
  return data2;
};

// sync("Priyanshu", " Singh");
