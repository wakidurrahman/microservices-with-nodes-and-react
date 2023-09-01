const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

// Express Apps instantiated.
const app = express();
// BodyParser  instantiated.
app.use(bodyParser.json());
// CORS  instantiated.
app.use(cors());

// Store dummy posts for temporary
const PostsStore = {};
// Posts PORT
const port = 4000;

// Get All Posts
app.get('/posts', (req, res) => {
  res.status(200).json({
    // JSend envelope data
    status: 'success',
    message: 'All posts get successfully',
    data: PostsStore,
  });
});

// Create post
app.post('/posts', async (req, res) => {
  // Create dynamic random id
  const postId = randomBytes(4).toString('hex');
  const { title } = req.body;
  PostsStore[postId] = { postId, title };

  // Send to event-bus
  await axios.post('http://event-bus-clusterip-service:4005/events', {
    type: 'PostCreated',
    date: {postId, title},
  });
  
  res.status(201).json({
    // JSend envelope data
    status: 'success',
    message: 'Posts created successfully',
    data: PostsStore[postId],
  });
});

// Events (This request come from event-bus)

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Received Event', req.body.type);
  res.status(201).json({
    status: 'success',
    message: 'Received Even successfully',
    data: event,
  });
});

// Expose Port
app.listen(port, () => {
  console.log("Event-Bus cluster id port change")
  console.log(`Posts Apps listening on port ${port}`);
});
