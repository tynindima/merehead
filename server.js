const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static('build'));

app.get('/api/users', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  const filePath = path.join(__dirname, 'src/api/users.json');
  const data = fs.readFileSync(filePath);
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
