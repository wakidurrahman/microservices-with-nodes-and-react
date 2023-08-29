const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');


// Express Apps instantiated.
const app = express();
// BodyParser  instantiated.
app.use(bodyParser.json());
// Posts PORT
const port = 4003;



// Expose Moderated Service
app.listen(port, () => {
    console.log(`Moderated Apps listening on port ${port}`);
  });