const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello REST 2.0');
});

app.listen(process.env.PORT || 8080);
console.log('Web Server is listening at port ' + (process.env.PORT || 8080));