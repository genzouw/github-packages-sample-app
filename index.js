// javascript
const hello = require("@genzouw/github-packages-sample-module");

// 適当なオープンソースのモジュールも正常に動作するか使ってみる
const lodash = require("lodash");

console.log(hello()); // Output: Hello World

console.log(lodash.isEmpty({})); // Output: true
