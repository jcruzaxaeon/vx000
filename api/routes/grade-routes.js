

// ./api/routes/grade-route.js

import express from 'express';
import Grade from '../models/Grade.js';

const router = express.Router();

// ### GET all grades (paginated?) - 200 OK
// - Update endpoint to `/v1/api/grades`
router.get('/v1/api/grades', async (req, res) => {
  try {
    // TODO: Implement pagination logic if needed
    const grades = await Grade.findAll({
      // Add pagination options here (e.g., limit, offset)
    });
    res.json(grades);
  } catch (err) {
    console.error('Error fetching grades:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ### GET specific grade by ID - 200 OK
// - Update endpoint to `/v1/api/grades/:id`
router.get('/v1/api/grades/:id', async (req, res) => {
  const gradeId = req.params.id;
  try {
    const grade = await Grade.findByPk(gradeId);
    if (grade) {
      res.json(grade);
    } else {
      res.status(404).send('Grade not found');
    }
  } catch (err) {
    console.error('Error fetching grade:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ### POST a new grade - 201 Created
// - Update endpoint to `/v1/api/grades`
router.post('/v1/api/grades', async (req, res) => {
  const { grade, categories, comment, tags, fk_user, fk_target } = req.body;

  try {
    const newGrade = await Grade.create({
      grade,
      categories,
      comment,
      tags,
      fk_user,
      fk_target,
    });
    res.status(201).json(newGrade);
  } catch (err) {
    console.error('Error creating grade:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ### DELETE a grade by ID - 204 No Content
// - Update endpoint to `/v1/api/grades/:id`
router.delete('/v1/api/grades/:id', async (req, res) => {
  const gradeId = req.params.id;
  try {
    const deletedCount = await Grade.destroy({
      where: { id: gradeId },
    });
    if (deletedCount > 0) {
      res.status(204).send(); // No content to return on successful delete
    } else {
      res.status(404).send('Grade not found');
    }
  } catch (err) {
    console.error('Error deleting grade:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

