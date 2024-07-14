

// ./api/routes/node-routes.js

import express from 'express';
import Node from '../models/Node.js';

const router = express.Router();

// ### GET, 200 - OK
// - [ ] (!!!) recode to return (recent / favorite / random)
// - [ ] (!!!) update endpoint to `/v1/api/nodes` ... plural since list of them?
// - Return a paginated list of nodes
router.get('/api/nodes', async (req, res) => {
    try {
        const nodeList = await Node.findAll();
        res.json(nodeList);
    }
    catch {
        console.log("Error");
    }
});

// ### POST - 201 Posted?
// - Create a new node
// - [ ] (!!!) update endpoint to `/v1/api/node`?
// - api/nodes
router.post('/api/nodes', async (req, res) => {
    const { name, categories, userId } = req.body;
    
    try {
        const newNode = await Node.create({
            name,
            categories,
            owner_user_key: userId,
        });
        res.status(201).json(newNode);
    } catch (err) {
        console.error('Error creating user\n\n', err);
        res.status(500).send('Internal Server Error');
    }
});

// ### DELETE ?204?
// - [ ] (!!!) update endpoint to `/v1/api/node`?
// - api/nodes/:id
router.delete('/api/nodes/delete/:id', async (req, res) => {    
    try {
        await Node.findByPk(req.params.id);
        await Node.destroy({ where: {id: req.params.id}});
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting node\n\n', err);
    }
});

export default router;

