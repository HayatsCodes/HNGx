const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

mongoose.set('strictQuery', false);

async function mongoConnect() {
    await mongoose.connect(process.env.MONGO_URL, {
        connectTimeoutMS: 10000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
};

module.exports = mongoConnect;