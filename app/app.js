const express = require('express');
const books = require('./routes/book.routes');
const auth = require('./routes/auth.routes');
const cors = require('cors');
const bodyParser = require("body-parser");
const winston = require('winston');
const expressWinston = require('express-winston');
const db = require("./models");

const app = express();

// Synchronize models with the database
db.sequelize.sync();

// Logging messages when new requests are received at the server
// (used to monitor, debug and diagnose the service) 
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ]
  }));

// Avoid CORS issues
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('This is an API to a book store');
});

// Routes
app.use('/books', books);
app.use('/', auth);

module.exports = app;