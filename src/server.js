import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import index from './routes/index'

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/', index)

app.listen(3000, () => {
    console.log('concord ta ligado! uhu');
});

export default app;