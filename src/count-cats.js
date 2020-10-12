const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let backyard = [].concat.apply([], matrix);
  let counter = 0;
  backyard.forEach(line => {
    if (line == "^^") {
      counter += 1;
    }
  });
  return counter;
};
