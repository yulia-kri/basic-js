const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  function repeatStringNumTimes(string, separator, times) {
    if (times < 0) return '';
    if (times === 1) return string;
    else
      return `${string}${separator}${repeatStringNumTimes(
        string,
        separator,
        times - 1
      )}`;
  }

  let modifiedStr = str;
  const separator = options.separator || '+';
  const repeatTimes = options.repeatTimes || 1;

  let additionStr;
  if (typeof options.addition !== 'undefined') {
    const additionSeparator = options.additionSeparator || '+';
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    additionStr = repeatStringNumTimes(
      options.addition,
      additionSeparator,
      additionRepeatTimes
    );
  }
  if (additionStr) {
    modifiedStr = `${modifiedStr}${additionStr}`;
  }
  modifiedStr = repeatStringNumTimes(modifiedStr, separator, repeatTimes);
  return modifiedStr;
};
