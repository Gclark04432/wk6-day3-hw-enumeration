const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  const isItAPanagram = this.alphabet.every((letter) => {
    return  this.phrase.includes(letter);
  });
  return isItAPanagram;
};

module.exports = PangramFinder;
