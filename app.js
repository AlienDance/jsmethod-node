const express = require('express');
const app = express();
const { lorem, firstLetterCap } = require('./lorem-ipsum/lorem');

app.listen(5000, () => console.log('server is up!'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/landing', (req, res) => {
  res.render('landing', { title: 'SOMETHING' });
});

app.post('/lorem', (req, res) => {
  if (req.body.sentQuan) {
    res.json({
      lorem: lorem.generateSentences(Number(req.body.sentQuan))
    });
  } else if (req.body.card) {
    res.json({
      loremSmall: lorem.generateSentences(2),
      loremBig: lorem.generateSentences(6),
      loremTitle: firstLetterCap(lorem.generateWords(3))
    });
  }
});
