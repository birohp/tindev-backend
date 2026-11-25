const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error('MONGODB_URI environment variable is not set');
}

mongoose.connect(mongoUri);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
