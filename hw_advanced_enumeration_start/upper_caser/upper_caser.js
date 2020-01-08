const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const upperCased = this.words.map((word) => {
    return word.toUpperCase();
  });
  return upperCased;
};


module.exports = UpperCaser;
