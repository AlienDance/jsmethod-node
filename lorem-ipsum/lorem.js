const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 10
  }
});

const firstLetterCap = string => {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const restOfString = string.slice(1);
  return firstLetter + restOfString;
};

module.exports = { lorem, firstLetterCap };
