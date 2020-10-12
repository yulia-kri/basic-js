const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  }
  
  if (Object.prototype.toString.call(date) == '[object Date]') {
    return seasons[date.getMonth()];
  } else {
    throw new Error();
  }
};
