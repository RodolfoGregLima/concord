import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import http from 'http';
import socket from 'socket.io';

import index from './routes/index'

const app = express();
const server = http.Server(app);
const io = socket(server);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', index)

io.on("connection", (socket) => {
    console.log("a user has been connected")  
})

server.listen(3000, () => {
    console.log('concord runing at port *3000');
});

export default app;