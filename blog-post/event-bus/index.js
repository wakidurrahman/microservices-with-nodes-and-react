const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const AUTH_TOKEN = 'AutoToken';

// // Global axios defaults
// axios.defaults.baseURL = 'http://localhost:4003/events';

// // Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// // See below for an example using Custom instance defaults instead.
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// Express Apps instantiated.
const app = express();
// BodyParser  instantiated.
app.use(bodyParser.json());

// Store all Events for temporary

const EventsStore = [];

app.post('/events', (req, res) => {
  const event = req.body;
  EventsStore.push(event);

  axios.post('http://localhost:4000/events', EventsStore).catch((err) => {
    console.log(err.message);
  });
});
