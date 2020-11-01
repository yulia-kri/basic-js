const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    (typeof value == 'undefined') ? this.chain.push('( )') : this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!position ||  !(Number.isInteger(position)) || position > this.chain.length || position < 0) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');;
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
