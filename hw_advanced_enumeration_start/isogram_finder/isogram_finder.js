const IsogramFinder = function (word) {
  this.word = word.split('');
}

IsogramFinder.prototype.wordAsArray = function (word) {
  const givenLetters = word.map((letter) => {
    return letter;
  })
  return givenLetters;
};

IsogramFinder.prototype.isIsogram = function () {
  wordAsArray = this.wordAsArray(this.word);

  const isUnique = this.word.every((letter) => {
    return !wordAsArray.includes(letter);
  })

  return isUnique;

};

module.exports = IsogramFinder;
