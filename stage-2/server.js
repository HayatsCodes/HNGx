const http = require('http');
const https = require('https');
require('dotenv');
const mongoConnect = require('./src/config/mongodb');
const app = require('./src/app');
const PORT = process.env.PORT;

let server;

if (process.env.production) {
    server = https.createServer(app);
} else {
    server = http.createServer(app);
}

async function startServer() {
    await mongoConnect();
    server.listen(PORT, () => {
        console.log(`Server started running at port ${PORT}`);
    });
}

startServer();