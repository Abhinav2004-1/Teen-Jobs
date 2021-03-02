import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import socket from 'socket.io';
import bodyparser from 'body-parser';
import RegisterRoute from './Routes/Register-route.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ExpressGraphQL = require('express-graphql').graphqlHTTP;
import RootSchema from './Schema/MainSchema.js';

import dotenv from 'dotenv';
dotenv.config()

const app = express();
const server = http.createServer(app);
const io = socket();
const PORT = process.env.PORT || 8000;

// middleware;
app.use(bodyparser.json({limit: '50mb'}));

// socket-connection;

io.on('connect', socket => {
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

// GraphQL endpoints;

// api endpoint;
app.use('/graphql', ExpressGraphQL({
    graphiql: true,
    schema: RootSchema
}));
app.use('/register', RegisterRoute);

// db connection;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected to mongoDB');
}).catch(() => {
    console.log('not connected to mongoDB')
})

server.listen(PORT, () => {
    console.log(`connected to localhost: ${PORT}`)
})