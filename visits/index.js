const express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient();

client.set('visits', 0);
const port = 3000;

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




