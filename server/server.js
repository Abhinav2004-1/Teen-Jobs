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
import LoginRoute from './Routes/login-route.js';
import DeleteRoute from './Routes/deleter.js';

import dotenv from 'dotenv';
dotenv.config()

const app = express();
const server = http.createServer(app);
const io = socket(server);
const PORT = process.env.PORT || 8000;

// middleware;
app.use(bodyparser.json({limit: '50mb'}));

// socket-connection;

io.on('connect', socket => {
    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

// GraphQL endpoint;
app.use('/graphql', ExpressGraphQL({
    graphiql: true,
    schema: RootSchema
}));

// api endpoint;
app.use('/register', RegisterRoute);
app.use('/login', LoginRoute);

// deleter
app.use('/deleter', DeleteRoute);

// db connection;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected to mongoDB');
}).catch(() => {
    console.log('not connected to mongoDB')
})

server.listen(PORT, () => {
    console.log(`connected to localhost: ${PORT}`)
})