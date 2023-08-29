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
const CommentsByPostIdStore = {};
// Posts PORT
const port = 4001;

app.get('/posts/:id/comments', (req, res) => {
  res.status(200).json({
    // JSend envelope data
    status: 'success',
    message: 'All comments get successfully',
    data: CommentsByPostIdStore[req.params.id] || [],
  });
});

// Create Comment by using post id
app.post('/posts/:id/comments', async (req, res) => {
  // Create dynamic random id
  const commentId = randomBytes(4).toString('hex');
  // Get post id from route parameter.
  const postId = req.params.id;
  const { content } = req.body;
  const comments = CommentsByPostIdStore[postId] || [];
  comments.push({ commentId, content, commentStatus: 'pending' });
  CommentsByPostIdStore[postId] = comments;

  // Send request to Event bus
  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: {
      commentId,
      postId,
      content,
      commentStatus: 'pending',
    },
  });
  res.status(201).json({
    // JSend envelope data
    status: 'success',
    message: 'Create comments  successfully',
    data: comments,
  });
});

app.post('/events', async (req, res) => {
  console.log('Event Received: ', req.body.type);

  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { postId, commentId, commentStatus, content } = data;
    const comments = CommentsByPostIdStore[postId];
    const comment = comments.find((comment) => comment.commentId === commentId);
    comment.commentStatus = commentStatus;

    await axios.post('http://localhost:4005/events', {
      type: 'CommentUpdated',
      data: { commentId, commentStatus, postId, content },
    });
  }

  res.status(201).json({
    // JSend envelope data
    status: 'success',
    message: 'Comment Updated  successfully',
    data: {},
  });
});

// Expose Port
app.listen(port, () => {
  console.log(`Posts Apps listening on port ${port}`);
});
