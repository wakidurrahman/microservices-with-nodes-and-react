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
  console.log(req);
  res.status(200).json({
    // JSend envelope data
    status: 'success',
    message: 'All posts get successfully',
    data: PostsStore,
  });
});

// Create post
app.post('/posts', (req, res) => {
  // Create dynamic random id
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  PostsStore[id] = { id, title };
  res.status(201).json({
    // JSend envelope data
    status: 'success',
    message: 'Posts created successfully',
    data: PostsStore[id],
  });
});

// Events

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);
  res.status(201).json({
    status: 'success',
    message: 'Received Even successfully',
    data: req.body.type,
  });
});

// Expose Port
app.listen(port, () => {
  console.log(`Posts Apps listening on port ${port}`);
});
