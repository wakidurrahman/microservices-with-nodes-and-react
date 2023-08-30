const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Express Apps instantiated.
const app = express();
// BodyParser  instantiated.
app.use(bodyParser.json());
// Posts PORT
const port = 4003;

app.post('/events', async (req, res) => {
  const { type, data } = req.body;
  if (type === 'CommentCreated') {
    const commentStatus = data.content.includes('orange')
      ? 'rejected'
      : 'approved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        commentId: data.commentId,
        postId: data.postId,
        commentStatus,
        content: data.content,
      },
    });
  }
  res.status(201).json({
    // JSend envelope data
    status: 'success',
    message: 'Comments Moderated successfully',
    data: {},
  });
});

// Expose Moderated Service
app.listen(port, () => {
  console.log(`Moderated Apps listening on port ${port}`);
});
