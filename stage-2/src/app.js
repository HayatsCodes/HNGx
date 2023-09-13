const express = require('express');
const personRouter = require('./routes/person.route');

const app = express();

app.use(express.json());
app.use('/api', personRouter);

module.exports = app;