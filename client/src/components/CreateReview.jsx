

// ./client/src/components/CreateReview.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../services/auth.js';
import { jwtDecode } from 'jwt-decode';

const apiUrl = import.meta.env.VITE_API_URL;
const defaultReview = {
    alias: 'Node Name',
    tier: '',
    category: '',
    type: '',
    score: 0,
    disambiguation: 'Perfect disambiguation',
    categories: 'Category 1, Category 2',
    tags: '#tag1, #tag2',
    brief: '',
    comment: '',
    user_fk: 1,
    node_fk: 1,
    rubric_fk: 1,
    // createdAt is set @ backend
    // updatedAt is set @ backend
};

const CreateReview = () => {
    const [reviewData, setReviewData] = useState(defaultReview);

    async function createNode() {
        const token = getToken();
        const userId = parseInt(jwtDecode(token).userId, 10);

        const node = {
            name: `${reviewData.alias} ${reviewData.disambiguation}`,
            category: reviewData.category,
            type: reviewData.type,
            brief: reviewData.brief,
            // categories: reviewData.categories,
            owner_fk: userId,
        };

        try {
            const response = await axios.post(`${apiUrl}/api/nodes`, node, {
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                    'Authorization': `Bearer ${token}`
                },
            });

            const ok = response.status <= 200 || response.status < 300;
            console.log("New Node Response:", ok);
            if (!ok) throw new Error('Failed to create node');

            const data = await response.data;
            return data.node_id;
        } catch (error) {
            console.error('Error creating node:', error);
            throw error;
        }
    }

    const handleChange = (e) => {
        const value = (e.target.type === 'number')
            ? parseInt(e.target.value)
            : e.target.value;
        setReviewData({ ...reviewData, [e.target.name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = getToken();
            const userId = jwtDecode(token).userId;
            const nodeId = await createNode();

            const response = await axios.post(`${apiUrl}/v1/api/reviews`,
                { ...reviewData, user_fk: userId, node_fk: nodeId },
                { headers: { 'Authorization': `Bearer ${token}` } },
            );
            console.log('Review created successfully', response.data);
            // Reset form or redirect user
            setReviewData(defaultReview);
        } catch (error) {
            console.error('Failed to create review', error.response?.data || error.message);
            // Handle error (show message to user)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="alias">Alias:</label>
                    <input
                        type="text"
                        id="alias"
                        name="alias"
                        placeholder='Node Name'
                        // value={reviewData.alias}
                        onChange={handleChange}
                        required
                    />
                </li>
                <li>
                    <label htmlFor="disambiguation">Disambiguation:</label>
                    <input
                        type="text"
                        id="disambiguation"
                        name="disambiguation"
                        placeholder='Perfect disambiguation'
                        onChange={handleChange}
                        required
                    />
                </li>
                <li>
                    <label htmlFor="score">Score:</label>
                    <input
                        type="number"
                        id="score"
                        name="score"
                        placeholder='0'
                        // value={reviewData.score}
                        onChange={handleChange}
                        required
                    />
                </li>
                <li>
                    <label htmlFor="categories">Categories:</label>
                    <input
                        type="text"
                        id="categories"
                        name="categories"
                        placeholder='Category 1, Category 2'
                        // value={reviewData.categories}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="tags">Tags:</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        placeholder='#tag1 #tag2'
                        // value={reviewData.tags}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="brief">Brief:</label>
                    <input
                        type="text"
                        id="brief"
                        name="brief"
                        placeholder='Brief description.'
                        // value={reviewData.brief}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder='Long comment.'
                        // value={reviewData.comment}
                        onChange={handleChange}
                    />
                </li>
                {/* <li>
                    <label htmlFor="node_fk">Node ID:</label>
                    <input
                        type="number"
                        id="node_fk"
                        name="node_fk"
                        value={reviewData.node_fk}
                        onChange={handleChange}
                        required
                    />
                </li>
                <li>
                    <label htmlFor="rubric_fk">Rubric ID:</label>
                    <input
                        type="number"
                        id="rubric_fk"
                        name="rubric_fk"
                        value={reviewData.rubric_fk}
                        onChange={handleChange}
                    />
                </li> */}
            </ul>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default CreateReview;

