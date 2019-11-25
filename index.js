const express = require('express');
const cors = require('cors');
const { router } = require('./server/config/routes');

const { mongoose } = require('./server/config/db');

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log('Server running on port 5000');
});
