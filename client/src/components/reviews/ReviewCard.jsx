

// .client/src/components/reviews/ReviewCard.jsx

import React from 'react';
import '../../styles/ReviewCard.css';
import './ReviewCard.css';

const ReviewCard = ({ review, size = 'basic' }) => {
    const { alias, disambiguation, tier, User, createdAt, content } = review;

    return (
        <div className={`review-card review-card--${size}`}>
            <div className='review-card__inner'>
                <div className="review-card__header">
                    <div className="review-card__title">{alias}</div>
                    <div className="review-card__subtitle">{disambiguation}</div>
                </div>
                <div className="review-card__body">
                    {size === 'basic' && (
                        <div className="review-card__details">
                            <span className="review-card__user">{User?.name || 'Anonymous'}</span>
                            <span className="review-card__date">{new Date(createdAt).toLocaleDateString()}</span>
                        </div>
                    )}
                    <div className="review-card__tier">{tier}</div>
                    {size === 'full' && <p className="review-card__full-content">{content}</p>}
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;