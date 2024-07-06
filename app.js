import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js';
import categoryRouter from './routes/categories.js';
import productRouter from './routes/products.js';

const app = express();

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 5000;

app.use(bodyParser.json());
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);

app.get('/', (req, res) => res.send('Welcome to Crumble!'));

app.listen(port, () => {
    console.log(`Crumble starting at http://${host}:${port}`);
});
