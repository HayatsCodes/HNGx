const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    _id: Number,
    name: String,
});

module.exports = mongoose.model('PersonModel', personSchema);