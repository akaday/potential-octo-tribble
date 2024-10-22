const express = require('express');
const app = express();
const port = 3000;

// Update the response message
app.get('/', (req, res) => {
  res.send('Welcome to the world of potential octo-tribbles! node by @akaday');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
