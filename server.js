const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const quotes = [];

app.get('/', (req, res) => {
  res.render('index', { quotes });
});

app.get('/new-quote', (req, res) => {
  res.render('new-quote');
});

app.post('/add-quote', (req, res) => {
  const { author, quote } = req.body;
  quotes.push({ author, quote });
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});