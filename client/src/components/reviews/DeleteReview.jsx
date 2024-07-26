

// DELETE A REVIEW
//
// ./client/src/components/reviews/DeleteReview.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getToken } from '../../services/auth.js';
import '../../styles/global.css';

const apiUrl = import.meta.env.VITE_API_URL;

const DeleteReview = () => {
    const [confirmationInput, setConfirmationInput] = useState('');
    const [error, setError] = useState('');
    const [reviewData, setReviewData] = useState({
        alias: '',
        disambiguation: ''
    });
    const [loading, setLoading] = useState(true);
    const { reviewId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchReview();
    }, [reviewId]);

    const fetchReview = async () => {
        try {
            const token = getToken();
            const response = await axios.get(`${apiUrl}/v1/api/reviews/${reviewId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = response.data;
            setReviewData({
                alias: data.alias || '',
                disambiguation: data.disambiguation || ''
            });
            setLoading(false);
        } catch (err) {
            console.error('Error fetching review:', err);
            setError('Failed to fetch review data');
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setConfirmationInput(e.target.value);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const expectedConfirmation = `${reviewData.alias} ${reviewData.disambiguation}`;
        if (confirmationInput.trim() !== expectedConfirmation) {
            setError('Confirmation does not match. Please try again.');
            return;
        }

        try {
            const token = getToken();
            await axios.delete(`${apiUrl}/v1/api/reviews/${reviewId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            navigate('/reviews'); // Redirect to reviews list after successful deletion
        } catch (err) {
            console.error('Error deleting review:', err);
            setError('Failed to delete review');
        }
    };

    const onCancel = () => {
        navigate(`/reviews/${reviewId}`);
    };

    if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return (
        <div className="container">
            <h2>Delete Review Confirmation</h2>
            {error && <p className="error">{error}</p>}
            <p>Type <span><code className='code-inline--modern-light'>{`${reviewData.alias} ${reviewData.disambiguation}`}</code> to confirm deletion.</span></p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={confirmationInput}
                    onChange={handleInputChange}
                />
                <div className="button-container">
                    <button type="submit" className='btn btn--delete'>Delete Review</button>
                    <button type='button' onClick={onCancel} className='btn btn--cancel'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default DeleteReview;