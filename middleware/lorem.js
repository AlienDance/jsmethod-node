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

const generateLorem = (req, res) => {
  if (req.body.sentencesQuantity) {
    res.json({ lorem: lorem.generateSentences(Number(req.body.sentencesQuantity)) });
  } else if (req.body.card) {
    res.json({
      loremSmall: lorem.generateSentences(2),
      loremBig: lorem.generateSentences(6),
      loremTitle: firstLetterCap(lorem.generateWords(3))
    });
  }
};

module.exports = generateLorem;
