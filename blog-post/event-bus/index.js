const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// const AUTH_TOKEN = 'AutoToken';

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
// Posts PORT
const port = 4005;
// Store all Events for temporary
const EventsStore = [];

app.post('/events', (req, res) => {
  const event = req.body;
  EventsStore.push(event);

  axios.post('http://localhost:4000/events', EventsStore).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4001/events', EventsStore).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4002/events', EventsStore).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4003/events', EventsStore).catch((err) => {
    console.log(err.message);
  });

  res.status(201).json({
    // JSend envelope data
    status: 'success',
    message: 'Event-Bus work successfully',
    data: {},
  });
});

// Get All Events
app.get('/events', (req, res) => {
    res.status(200).json({
      // JSend envelope data
      status: 'success',
      message: 'All events get successfully',
      data: EventsStore,
    });
  });

// Expose Port
app.listen(port, () => {
  console.log(`Posts Apps listening on port ${port}`);
});
