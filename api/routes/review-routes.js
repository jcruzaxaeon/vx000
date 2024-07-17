

// ./api/routes/review-route.js

import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// ### GET all reviews (paginated?) - 200 OK
// - Update endpoint to `/v1/api/reviews`
router.get('/v1/api/reviews', async (req, res) => {
  try {
    // TODO: Implement pagination logic if needed
    const reviews = await Review.findAll({
      // Add pagination options here (e.g., limit, offset)
    });
    res.json(reviews);
  } catch (err) {
    console.error('Error fetching reviews:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ### GET specific review by ID - 200 OK
// - Update endpoint to `/v1/api/reviews/:id`
router.get('/v1/api/reviews/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const review = await Review.findByPk(reviewId);
    if (review) {
      res.json(review);
    } else {
      res.status(404).send('Review not found');
    }
  } catch (err) {
    console.error('Error fetching review:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ### POST a new review - 201 Created
// - Update endpoint to `/v1/api/reviews`
router.post('/v1/api/reviews', async (req, res) => {
  const { alias, score, categories, tags, brief, comment, user_fk, node_fk, rubric_fk } = req.body;

  try {
    const newReview = await Review.create({
      alias,
      score,
      categories,
      tags,
      brief,
      comment,
      user_fk,
      node_fk,
      rubric_fk,
    });
    res.status(201).json(newReview);
  } catch (err) {
    console.error('Error creating review:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ### DELETE a review by ID - 204 No Content
// - Update endpoint to `/v1/api/reviews/:id`
router.delete('/v1/api/reviews/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const deletedCount = await Review.destroy({
      where: { review_id: reviewId },
    });
    if (deletedCount > 0) {
      res.status(204).send(); // No content to return on successful delete
    } else {
      res.status(404).send('Review not found');
    }
  } catch (err) {
    console.error('Error deleting review:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

