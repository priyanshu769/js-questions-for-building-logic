import fakeFetch from "./FakeFetch";

const myAsync = async () => {
  const a = await fakeFetch("hi", false);
  console.log(a);
};
// myAsync();
