const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const index = require('./routes/index')
const users = require('./routes/users')

app.use('/api/v1', index)
app.use('/api/v1', users)


const app = express();



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../client')));


app.use('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client')
  })
})

// error handler
app.use(function(err, req, res, next) {
  const response = { message: err.message }
  if (req.app.get('env') === 'development') {
    response.stack = err.stack
  }
  res.status(err.status || 500).json(response)
});

module.exports = app;
