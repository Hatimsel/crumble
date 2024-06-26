import express from 'express';
import { User } from '../controllers/models.js';

const userRouter = express.Router();

const users = [];

userRouter.get('/', (req, res) => {
    res.send(users);
})

userRouter.post('/', (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const user = new User(data['firstName'], data['lastName'], data['type']);
        users.push(user);

        res.status(201).send('User created successfully');
    } catch(err) {
        res.status(500).send(`An error occured: ${err}`);
    }
})

userRouter.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const user = users.find((user) => user.id === id);
        res.send(user);
    } catch(err) {
        console.log(err);
        res.status(404).send('User not found!');
    }
})

userRouter.patch('/:id', (req, res) => {})

export default userRouter;
// export userRouter;
