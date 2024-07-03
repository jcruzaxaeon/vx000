

// ./api/routes/target-routes.js

import express from 'express';
import Target from '../models/Target.js';

const router = express.Router();

// ### GET, 200 - OK
// - [ ] (!!!) recode to return (recent / favorite / random)
// - [ ] (!!!) update endpoint to `/v1/api/targets` ... plural since list of them?
// - Return a paginated list of targets
router.get('/api/targets', async (req, res) => {
    try {
        const targetList = await Target.findAll();
        res.json(targetList);
    }
    catch {
        console.log("Error");
    }
});

// ### POST - 201 Posted?
// - Create a new target
// - [ ] (!!!) update endpoint to `/v1/api/target`?
// - api/targets
router.post('/api/targets', async (req, res) => {
    const { name, categories, userId } = req.body;
    
    try {
        const newTarget = await Target.create({
            name,
            categories,
            owner_user_key: userId,
        });
        res.status(201).json(newTarget);
    } catch (err) {
        console.error('Error creating user\n\n', err);
        res.status(500).send('Internal Server Error');
    }
});

// ### DELETE ?204?
// - [ ] (!!!) update endpoint to `/v1/api/target`?
// - api/targets/:id
router.delete('/api/targets/delete/:id', async (req, res) => {    
    try {
        await Target.findByPk(req.params.id);
        await Target.destroy({ where: {id: req.params.id}});
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting target\n\n', err);
    }
});

export default router;

