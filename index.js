const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


let namesList = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages')); 

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/list', (req, res) => {
  res.render('list', { names: namesList });
});


app.post('/add', (req, res) => {
  const name = req.body.name;
  if (name) {
    namesList.push(name);
  }
  res.redirect('/list');
});


app.post('/delete', (req, res) => {
  const name = req.body.name;
  namesList = namesList.filter(n => n !== name);
  res.redirect('/list');
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

