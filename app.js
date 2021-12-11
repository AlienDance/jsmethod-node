const express = require('express');
const app = express();
const { lorem, firstLetterCap } = require('./lorem-ipsum/lorem');

app.listen(5000, () => console.log('server is up!'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/landing', (req, res) => {
  res.render('landing', { title: 'SOMETHING' });
});

app.get('/lorem', (req, res) => {
  res.json({
    loremSmall: lorem.generateSentences(2),
    loremBig: lorem.generateSentences(6),
    loremTitle: firstLetterCap(lorem.generateWords(3))
  });
});
