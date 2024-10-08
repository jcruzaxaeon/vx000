

// ./api/routes/review-route.js

import express from 'express';
import Review from '../models/Review.js';
import User from '../models/User.js';
import { authenticateUser } from '../middleware/authentication.js';


const router = express.Router();

// ### GET all reviews belonging to current user (paginated?) - 200 OK
// - 
// authenticateUser, 
router.get('/v1/api/reviews', async (req, res, next) => {
    // try {
    const { tierlist } = req.query;
    let reviews = [];
    console.log(tierlist);
    if (tierlist) {
        // const [rows] = await db.query('SELECT * FROM reviews WHERE tierlist = ?', [tierlist]);
        // reviews = rows;
        Review.findAll({
            where: { tierlist }
        })
            .then(rows => {
                reviews = rows || [];
                console.log("Sending public reviews: ", reviews);
                return res.json(reviews);
            })
            .catch(error => {
                console.error('Error fetching reviews:', error);
                return res.status(500).json({ error: 'Internal server error' });
            });
    } else {
        authenticateUser(req, res, async (err) => {
            if (err) return next(err);
            try {
                console.log("Fetching reviews for user:", req.currentUser.user_id);
                reviews = await Review.findAll({
                    where: { user_fk: req.currentUser.user_id }
                });
                return res.json(reviews);
            }
            catch (err) {
                console.error('Error fetching private reviews:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        });
        // return;
    }
    // reviews = Array.isArray(reviews) ? reviews : [];
    // console.log("Sending reviews:", reviews);
    // res.json(reviews);
    // } catch (err) {
    //     console.error('Error fetching public reviews:', err);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
});

// ### GET Public Reviews - 200 OK
//
router.get('/v1/api/reviews/public', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        if (limit > 50) limit = 50;
        const offset = (page - 1) * limit;

        // Sorting
        const allowedSortFields = ['createdAt', 'tier', 'alias', 'disambiguation', 'score', 'User.name'];
        const sortField = allowedSortFields.includes(req.query.sortBy) ? req.query.sortBy : 'createdAt';
        const sortOrder = req.query.sortOrder === 'asc' ? 'ASC' : 'DESC';

        // Filtering
        const whereClause = {
            visibility: 'public'
        };

        if (req.query.tier) {
            whereClause.tier = req.query.tier;
        }

        // Determine the order array based on the sortField
        let order;
        if (sortField === 'User.name') {
            order = [[{ model: User, as: 'User' }, 'name', sortOrder]];
        } else {
            order = [[sortField, sortOrder]];
        }

        const { count, rows } = await Review.findAndCountAll({
            attributes: ['review_id', 'review_type', 'tierlist', 'item', 'details', 'tier',
                'visibility', 'alias', 'disambiguation', 'score', 'createdAt'],
            where: whereClause,
            limit: limit,
            offset: offset,
            order: order,
            include: [
                {
                    model: User,
                    as: 'User',
                    attributes: ['name'] // Include only necessary user info
                },
            ]
        });

        console.log('ROWS:::::', rows);

        res.json({
            totalItems: count,
            reviews: rows,
            currentPage: page,
            totalPages: Math.ceil(count / limit)
        });
    } catch (err) {
        console.error('Error fetching public reviews:', err);
        res.status(500).send('Internal Server Error');
    }
});
// router.get('/v1/api/reviews/public', async (req, res) => {
//     try {
//         const page = parseInt(req.query.page) || 1;
//         const limit = parseInt(req.query.limit) || 10;
//         if(limit > 50) limit = 50;
//         const offset = (page - 1) * limit;

//         // Sorting
//         const sortField = req.query.sortBy || 'createdAt';
//         const sortOrder = req.query.sortOrder === 'asc' ? 'ASC' : 'DESC';

//         // Filtering
//         const whereClause = {
//             visibility: 'public'
//         };

//         if (req.query.tier) {
//             whereClause.tier = req.query.tier;
//         }

//         // You can add more filters here as needed
//         console.log("Pre find");
//         const { count, rows } = await Review.findAndCountAll({
//             where: whereClause,
//             limit: limit,
//             offset: offset,
//             order: [[sortField, sortOrder]],
//             include: [
//                 {
//                     model: User,
//                     as: 'User',
//                     attributes: ['name'] // Include only necessary user info
//                 },
//             //     {
//             //         model: Node,
//             //         attributes: ['name'] // Include node name if needed
//             //     }
//             ]
//         });

//         console.log(rows);
//         res.json({
//             totalItems: count,
//             reviews: rows,
//             currentPage: page,
//             totalPages: Math.ceil(count / limit)
//         });
//     } catch (err) {
//         console.error('Error fetching public reviews:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });

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
    const { review_type, tierlist, item, details,
        alias, disambiguation, visibility,
        tier, category, type, score, categories, tags, brief, comment, user_fk, node_fk, rubric_fk } = req.body;
    console.log("Request Body:", req.body);

    try {
        const newReview = await Review.create({
            review_type,
            tierlist,
            item,
            details,
            alias,
            disambiguation,
            visibility,
            tier,
            score,
            category,
            type,
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

// ### UPDATE (put) a review by ID - 201 OK
// - Endpoint: `/v1/api/reviews/:id`
router.put('/v1/api/reviews/:id', async (req, res) => {
    const reviewId = req.params.id;
    const { review_type, alias, tierlist, item, details,
        disambiguation, visibility, tier,
        category, type, score, categories, tags,
        brief, comment, user_fk, node_fk, rubric_fk } = req.body;

    try {
        const review = await Review.findByPk(reviewId);

        if (!review) return res.status(404).send('Review not found.');

        await review.update({
            review_type, alias, tierlist, item, details,
            disambiguation, visibility, tier,
            category, type, score, categories, tags,
            brief, comment, user_fk, node_fk, rubric_fk
        });

        const updatedReview = await Review.findByPk(reviewId);
        res.json(updatedReview);
    } catch (error) {
        console.error('Error updating review:', err);
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

