import React from 'react';
import './ReviewTable.css';

const ReviewTable = ({ reviews, size = 'basic' }) => {
    console.log("In ReviewTable:", reviews);
    return (
        <div className="review-table">
            {reviews.map((review, index) => (
                <div key={review.id || index} className={`review-row ${index % 2 === 0 ? 'even' : 'odd'}`}>
                    <div className="review-content">
                        <div className="review__title">{review.item}</div>
                        <div className="review__subtitle">{review.details}</div>
                        <div>{review.tierlist}</div>
                    </div>
                    {/* <div className="review-meta"> */}
                    <div className="review__icon-column">
                        <div className="review__tier">{review.tier}</div>
                        <div className="review-icon">
                            {/* Placeholder for icon */}
                            <span role="img" aria-label="icon placeholder">🔍</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewTable;