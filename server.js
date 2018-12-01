const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './dist')));

app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, './dist/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is running on port: ${port}`);
});
