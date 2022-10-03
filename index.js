const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/api', (req, res) => {
  res.send("api")
})

app.get('*', (req, res) => {
  //res.send("hello")
  res.sendFile(path.resolve('views/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})