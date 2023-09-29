const express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set('visits', 0);
const port = 8000;

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




