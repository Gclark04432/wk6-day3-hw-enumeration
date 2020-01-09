const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  let uniques = Array.from(new Set(this.word)) ;

  return uniques.length === this.word.length
};

module.exports = IsogramFinder;
