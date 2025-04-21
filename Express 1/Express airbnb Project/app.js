// External Module
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});