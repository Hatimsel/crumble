import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js';

const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/', (req, res) => res.send('Crumble!'));

app.listen(1234, () => {
    console.log('Crumble starting at http://localhost:1234');
})
