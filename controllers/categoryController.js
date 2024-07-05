import { ObjectId } from 'mongodb';
import dbClient from '../utils/db.js';

export default class CategoryController {
    static async postCategory(req, res) {
        const { title } = req.body;

        try {
            const newCategory = dbClient.categoryCollection.insertOne(
                { title }
            );
            if (!newCategory) return res.status(401).send({ error: 'An error occurred' });

            return res.status(201).send({ Message: `Category ${title} created successfully` });
        } catch(err) {
            console.error(err);
            return res.status(500).send({ error: 'Server error' });
        }
    }

    static async getAll(req, res) {
        try {
            const categoriesCursor = dbClient.categoryCollection.find();
            const categories = categoriesCursor.toArray();

            return res.status(200).send(categories);
        } catch (err) {
            console.error(err);
            return res.status(500).send({ error: 'Server error' });
        }
    }

    static async getCategory(req, res) {
        // const { id } = req.params;

        // try {
        //     const category = await dbClient.categoryCollection.find(
        //         { _id: new ObjectId(id) }
        //     );
        //     res.status(200).send(category);
        // } catch(err) {
        //     console.error(err);
        //     return res.status(500).send({ error: 'Server error' });
        // }
    }
}
