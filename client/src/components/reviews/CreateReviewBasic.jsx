import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../../services/auth.js';
import { jwtDecode } from 'jwt-decode';
import '../../styles/CreateReview.css';
import '../../styles/global.css';
import { useMessage } from '../../contexts/MessageContext.jsx';

const apiUrl = import.meta.env.VITE_API_URL;
const defaultBasicReview = {
    review_type: 'basic',
    tierlist: '',
    item: '',
    details: '',
    tier: 'C',
    visibility: 'private',
    user_fk: 1,
    node_fk: 1,
};

const CreateReviewBasic = () => {
    const [reviewData, setReviewData] = useState(defaultBasicReview);
    const { addMessage } = useMessage();

    async function createNode() {
        const token = getToken();
        const userId = parseInt(jwtDecode(token).userId, 10);

        const node = {
            name: `${reviewData.item} (${reviewData.tierlist})`,
            brief: reviewData.details,
            owner_fk: userId,
        };

        try {
            const response = await axios.post(`${apiUrl}/api/nodes`, node, {
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                    'Authorization': `Bearer ${token}`
                },
            });

            const ok = response.status >= 200 && response.status < 300;
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
                { headers: { 'Authorization': `Bearer ${token}` } },
            );
            addMessage('Review created!', 'success');
            setReviewData(defaultBasicReview);
        } catch (error) {
            console.error('Failed to create review [ERR001]:', error.response?.data || error.message);
        }
    };

    return (
        <div className='create-review-container'>
            {/* <h2>Basic Review</h2>
            <hr /> */}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='tierlist'>Tier List:</label>
                    <input
                        type='text'
                        id='tierlist'
                        name='tierlist'
                        value={reviewData.tierlist}
                        onChange={handleChange}
                        // placeholder='e.g., Parks in Los Angeles'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="item">Item:</label>
                    <input
                        type="text"
                        id="item"
                        name="item"
                        value={reviewData.item}
                        onChange={handleChange}
                        // placeholder='e.g., Mar Vista Park'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details:</label>
                    <textarea
                        id="details"
                        name="details"
                        value={reviewData.details}
                        onChange={handleChange}
                        // placeholder='Brief description or context'
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
                <div className="form-group">
                    <label htmlFor="visibility">Visibility</label>
                    <select
                        id="visibility"
                        name="visibility"
                        value={reviewData.visibility}
                        onChange={handleChange}
                        required
                    >
                        <option value="private">Private</option>
                        <option value="shared">Shared</option>
                        <option value="public">Public</option>
                    </select>
                </div>
                <div className="button-container">
                    <button type="submit" className="button button--blue">Save Basic Review</button>
                    <button type="submit" className="button button--blue">Next &gt;&gt;&gt;</button>
                </div>
            </form>
        </div>
    );
};

export default CreateReviewBasic;