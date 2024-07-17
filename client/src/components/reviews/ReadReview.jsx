

// ./client/src/components/reviews/ReadReview.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getToken } from '../../services/auth.js';
import Card from '../Card.jsx';  // Adjust the import path as necessary

const apiUrl = import.meta.env.VITE_API_URL;

function ReadReview() {
    const [review, setReview] = useState(null);
    const [error, setError] = useState(null);
    const { reviewId } = useParams();  // This assumes you're using react-router and have a route parameter for reviewId

    useEffect(() => {
        fetchReview();
    }, [reviewId]);

    const fetchReview = async () => {
        try {
            const token = getToken();
            const response = await axios.get(`${apiUrl}/v1/api/reviews/${reviewId}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setReview(response.data);
        } catch (err) {
            console.error('Error fetching review:', err);
            setError('Failed to fetch review. Please try again later.');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!review) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%' 
        }}>
            <h2>Review Details</h2>
            <Card
                alias={review.alias}
                score={review.score}
                categories={review.categories}
                tags={review.tags}
                brief={review.brief}
                comment={review.comment}
            />
        </div>
    );
}

export default ReadReview;

