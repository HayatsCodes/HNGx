const express = require('express');
const morgan = require('morgan');
const personRouter = require('./routes/person.route');

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use('/api', personRouter);

module.exports = app;