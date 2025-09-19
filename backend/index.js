const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Scrabble backend API is running!');
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
