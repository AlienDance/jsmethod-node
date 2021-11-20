const express = require('express');
const app = express();

app.listen(5000, () => console.log('server is up!'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});