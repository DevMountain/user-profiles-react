const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/stuff', (req, res) => {
  res.send({
    message: 'You are connected to the server!',
    nonce: Math.random()
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})

app.listen(3001, () => {
  console.log('Listening on 3000');
});