const url = require("url");

const address =
  "http://localhost:4000/default.html?year=2017&month=february&day=monday";

let result = url.parse(address, true);

console.log(result.host);
console.log(result.pathname);
console.log(result.search);
console.log(result.query);
console.log(result.port);
