var MemoryStorage = require("memorystorage");
// here, the MemoryStorage function is available
var store = new MemoryStorage("my-app");
exports.store = store;

exports.getKeys = (store) => {
  var keys = Object.keys(store);
  return keys;
};

exports.getValues = (store) => {
  var values = Object.values(store);
  return values;
};
