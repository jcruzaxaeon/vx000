

// CREATE REVIEW: BASIC
//
// ./client/src/components/reviews/CreateReviewStandard.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../services/auth.js';
import { jwtDecode } from 'jwt-decode';
import '../../styles/CreateReview.css';
import { useMessage } from '../../contexts/MessageContext.jsx';

const apiUrl = import.meta.env.VITE_API_URL;
const defaultReview = {
    review_type: 'Basic',
    alias: '',
    disambiguation: '',
    tier: 'C',
    // category: '',
    // type: '',
    brief: '',
    user_fk: 1,
    node_fk: 1,
};

const CreateReviewBasic = () => {
    const [reviewData, setReviewData] = useState(defaultReview);
    const { addMessage } = useMessage();


    async function createNode() {
        const token = getToken();
        const userId = parseInt(jwtDecode(token).userId, 10);

        const node = {
            name: `${reviewData.alias} ${reviewData.disambiguation}`,
            // category: reviewData.category,
            // type: reviewData.type,
            brief: reviewData.brief,
            owner_fk: userId,
        };

        try {
            const response = await axios.post(`${apiUrl}/api/nodes`, node, {
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                    'Authorization': `Bearer ${token}`
                },
            });

            const ok = response.status >= 200 && response.status < 300; //!!!
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
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = getToken();
            const userId = jwtDecode(token).userId;
            const nodeId = await createNode();

            const response = await axios.post(`${apiUrl}/v1/api/reviews`,
                { ...reviewData, user_fk: userId, node_fk: nodeId },
                { headers: { 'Authorization': `Bearer ${token}` } }, //[ ]TODO - Update for user-wall
            );
            addMessage('Review created!', 'success');
            // Reset form or redirect user
            setReviewData(defaultReview);
        } catch (error) {
            console.error('Failed to create review [ERR001]:', error.response?.data || error.message);
            // Handle error (show message to user)
        }
    };

    return (
        <div className='create-review-container'>
            <form onSubmit={handleSubmit} className='create-review-form'>
                <div className='form-group'>
                    <label htmlFor='disambiguation'>List Name:</label>
                    <input
                        type='text'
                        id='disambiguation'
                        name='disambiguation'
                        value={reviewData.disambiguation}
                        onChange={handleChange}
                        // placeholder='Parks in Los Angeles'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="alias">Item Name:</label>
                    <input
                        type="text"
                        id="alias"
                        name="alias"
                        value={reviewData.alias}
                        onChange={handleChange}
                        // placeholder='Mar Vista Park'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tier">Tier</label>
                    <select
                        id="tier"
                        name="tier"
                        value={reviewData.tier}
                        onChange={handleChange}
                        required
                    >
                        <option value="S">S - Exceptional</option>
                        <option value="A">A - Excellent</option>
                        <option value="B">B - Good</option>
                        <option value="C">C - Average</option>
                        <option value="D">D - Deficient</option>
                        <option value="E">E - Poor</option>
                        <option value="F">F - Failure</option>
                    </select>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="brief">Brief</label>
                    <textarea
                        id="brief"
                        name="brief"
                        value={reviewData.brief}
                        onChange={handleChange}
                        required
                    />
                </div> */}
                <button type="submit" className="submit-btn">Submit Review</button>
                <hr />
            </form>
        </div>
    );
};

export default CreateReviewBasic;

