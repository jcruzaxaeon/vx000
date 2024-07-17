

// ./client/src/components/reviews/ReadReviews.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../services/auth.js';

const apiUrl = import.meta.env.VITE_API_URL;

function ReadReviews() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const token = getToken();
            const response = await axios.get(`${apiUrl}/v1/api/reviews`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            setReviews(response.data);
        } catch (err) {
            console.error('Error fetching reviews:', err);
            setError('Failed to fetch reviews. Please try again later.');
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>All Reviews</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Alias</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Score</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Categories</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Tags</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Brief</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                        <tr key={review.review_id}>
                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{review.alias}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{review.score}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{review.categories}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{review.tags}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{review.brief}</td>
                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{review.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        // <div>
        //     <h2>All Reviews</h2>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Alias</th>
        //                 <th>Score</th>
        //                 <th>Categories</th>
        //                 <th>Tags</th>
        //                 <th>Brief</th>
        //                 <th>Comment</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {reviews.map((review) => (
        //                 <tr key={review.review_id}>
        //                     <td>{review.alias}</td>
        //                     <td>{review.score}</td>
        //                     <td>{review.categories}</td>
        //                     <td>{review.tags}</td>
        //                     <td>{review.brief}</td>
        //                     <td>{review.comment}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default ReadReviews;

