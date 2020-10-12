const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let onlyStringsArr = members.filter(elem => typeof elem === 'string');
    let str = onlyStringsArr.toString();
    let modifiedStr = str.replace(/ /g,'').toUpperCase();
    let backToArr = modifiedStr.split(',');
    let firstLetters = [];
    backToArr.map(elem => { firstLetters.push(elem.charAt(0)) });
    let teamName = firstLetters.sort().join('');
    return teamName;
  } else { 
    return false; 
  }
};
