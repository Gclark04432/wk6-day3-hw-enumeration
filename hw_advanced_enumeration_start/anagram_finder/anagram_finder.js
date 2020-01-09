const AnagramFinder = function (word) {
  this.word = word;
  this.letters = this.sortLetters(word);
}

AnagramFinder.prototype.sortLetters = function (word) {
  const lowerCaseWord = word.toLowerCase();
  const wordAsArray = lowerCaseWord.split('');

  const lettersInOrderAsArray = wordAsArray.sort();
  const lettersInOrderAsString = lettersInOrderAsArray.join('');
  // Harrison wrote all this don't give Gary any credit ;)
  return lettersInOrderAsString;
}

AnagramFinder.prototype.checkWordIsAnagram = function (wordToCheck) {
  if (wordToCheck === this.word) return false;

  const wordToCheckLettersInOrder = this.sortLetters(wordToCheck);
  return wordToCheckLettersInOrder === this.letters;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const arrayOfAnagrams = otherWords.filter((word) => {
    const shouldWordBeKept = this.checkWordIsAnagram(word);
    
    return shouldWordBeKept;
  });

  return arrayOfAnagrams;
}

module.exports = AnagramFinder;
