

// ./client/src/components/reviews/UpdateReview.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getToken } from '../../services/auth.js';
import '../../styles/global.css';
import '../../styles/UpdateReview.css';

const apiUrl = import.meta.env.VITE_API_URL;

const reviewReset = {
    review_type: '',
    alias: '',
    disambiguation: '',
    tier: '',
    category: '',
    type: '',
    score: '',
    categories: '',
    tags: '',
    brief: '',
    comment: ''
};

const UpdateReview = () => {
    const [reviewData, setReviewData] = useState(reviewReset);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { reviewId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchReview();
    }, [reviewId]);

    const fetchReview = async () => {
        try {
            const token = getToken();
            console.log(`param: ${reviewId}`);
            const response = await axios.get(`${apiUrl}/v1/api/reviews/${reviewId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.data;
            const sanitizedData = {
                review_type: data.review_type || '',
                alias: data.alias || '',
                disambiguation: data.disambiguation || '',
                tier: data.tier || '',
                category: data.category || '',
                type: data.type || '',
                score: data.score || 0,
                categories: data.categories || '',
                tags: data.tags || '',
                brief: data.brief || '',
                comment: data.comment || ''
            };
            // console.log("Data:", data);
            setReviewData(sanitizedData);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching review:', err);
            setError('Failed to fetch review data');
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prevData => ({
            ...prevData,
            [name]: value || ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = getToken();
            await axios.put(`${apiUrl}/v1/api/reviews/${reviewId}`, reviewData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            navigate(`/reviews/${reviewId}`);
        } catch (err) {
            console.error('Error updating review:', err);
            setError('Failed to update review');
        }
    };

    const onCancel = () => {
        // ALTERNATIVE CANCEL HANDLING
        //
        // if(window.history.length > 1) navigate(-1);
        // else navigate('/');
        navigate(`/reviews/${reviewId}`);
    };

    const onDelete = () => {
        navigate(`/reviews/${reviewId}/delete`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="update-review-container">
            <h2>Update Review</h2>
            <form onSubmit={handleSubmit} className="update-review-form">
                <div className="form-group">
                    <label htmlFor="review_type">Review Type:</label>
                    <input
                        type="text"
                        id="review_type"
                        name="review_type"
                        value={reviewData.review_type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="alias">Alias:</label>
                    <input
                        type="text"
                        id="alias"
                        name="alias"
                        value={reviewData.alias}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="disambiguation">Disambiguation:</label>
                    <input
                        type="text"
                        id="disambiguation"
                        name="disambiguation"
                        value={reviewData.disambiguation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tier">Tier:</label>
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
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={reviewData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={reviewData.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="score">Score:</label>
                    <input
                        type="number"
                        id="score"
                        name="score"
                        value={reviewData.score}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories:</label>
                    <input
                        type="text"
                        id="categories"
                        name="categories"
                        value={reviewData.categories}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags:</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={reviewData.tags}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="brief">Brief:</label>
                    <textarea
                        id="brief"
                        name="brief"
                        value={reviewData.brief}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={reviewData.comment}
                        onChange={handleChange}
                    />
                </div>
                <div className='button-container'>
                    <button type="submit" className="btn">Submit Update</button>
                    <button type='button' onClick={onCancel} className='btn'>Cancel</button>
                    <button type="button" onClick={onDelete} className="btn btn--delete">Delete Review</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;