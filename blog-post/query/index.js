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
const QueryStore = {};
// Posts PORT
const port = 4002;

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { postId, title } = data;

    QueryStore[postId] = { postId, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { commentId, postId, content, commentStatus } = data;

    const postTemp = QueryStore[postId];
    postTemp.comments.push({ commentId, commentStatus, content });
  }

  if (type === 'CommentUpdated') {
    const { commentId, postId, content, commentStatus } = data;

    const postTemp = QueryStore[postId];
    const updateComment = postTemp.comments.find(
      (comment) => comment.commentId === commentId
    );
    updateComment.commentStatus = commentStatus;
    updateComment.content = content;
  }
};

app.get('/posts', (req, res) => {
  res.status(200).json({
    // JSend envelope data
    status: 'success',
    message: 'Query post get  successfully',
    data: QueryStore,
  });
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.status(201).send({});
  //   res.status(201).json({
  //     // JSend envelope data
  //     status: 'success',
  //     message: 'Query post get  successfully',
  //     data: QueryStore,
  //   });
});

//
app.listen(port, async () => {
  console.log(`Query Apps listening on port ${port}`);
  try {
    const res = await axios.get('http://localhost:4005/events');

    for (const event of res.data) {
      console.log('Processing Event: ', event.type);
      
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.error(error.message);
  }
});
