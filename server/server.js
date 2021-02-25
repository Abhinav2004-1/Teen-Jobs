import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import socket from 'socket.io';
import bodyparser from 'body-parser';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const ExpressGraphQL = require('express-graphql').graphqlHTTP;
import RootSchema from './Schema/BooksSchema.js';

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
}))

// db connection;
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('connected to mongoDB');
}).catch(() => {
    console.log('not connected to mongoDB')
})

server.listen(PORT, () => {
    console.log(`connected to localhost: ${PORT}`)
})