const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  //.use('/professional', professionalRoutes);
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to Mongo DB and listening on port ${port}`);
  }
});

/*
app.get('/', (req, res) => {
  res.send('Hello REST 2.0');
});

app.listen(process.env.PORT || 8080);
console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
*/