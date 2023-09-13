const express = require('express');
const personRouter = express.Router();

const {httpAddPerson, httpGetPerson, httpUpdatePerson, httpDeletePerson} = require('./person.controller');

personRouter.post('/', httpAddPerson);
personRouter.get('/:id', httpGetPerson);
personRouter.patch('/:id', httpUpdatePerson);
personRouter.delete('/:id', httpDeletePerson);

module.exports = personRouter;