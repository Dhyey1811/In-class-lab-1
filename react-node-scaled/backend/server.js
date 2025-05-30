const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Node API!');
});
app.listen(5000, () => console.log('Node API running on port 5000'));
