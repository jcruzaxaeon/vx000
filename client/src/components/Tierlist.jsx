import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollingText from './ScrollingText';
import Ring from './Ring';
import TextCarousel from './TextCarousel';
import '../styles/normalize.css';
import '../styles/global.css';

const apiUrl = import.meta.env.VITE_API_URL;

const TierList = ({ tierlistName }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //   const tiers = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
    const tiers = ['S', 'A', 'B', 'C'];

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${apiUrl}/v1/api/reviews?tierlist=${tierlistName}`);
                setReviews(Array.isArray(response.data) ? response.data : []);
                setError(null);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setError('Failed to fetch reviews. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [tierlistName]);

    const getTierReviews = (tier) => {
        return reviews.filter(review => review.tier === tier);
    };

    const renderTierItems = (tier, offset) => {
        const tierReviews = getTierReviews(tier);
        console.log("Tier Reviews:", reviews);
        return tierReviews.slice(0, 5).map( (review, i) => (
            <div key={review.review_id} className="tier-item">
                <ScrollingText
                    className="item-name"
                    text={`${review.item} - ${review.details}`}
                    initialPauseSeconds={2 * (i + offset)}
                    scrollSpeed={0.5}
                    index={i}
                    speed = {40}
                    pauseDuration={1000}
                    // timeOffset={5}
                />
                {/* {review.brief && <span className="item-brief"> - {review.brief}</span>} */}
            </div>
        ));
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="tierlist">
            <span className="tierlist-title">{tierlistName} </span>
            <span className='tierlist-subtitle'>sageways - Song by</span>
            <div className="tierlist-grid">
                {tiers.map( (tier, i) => (
                    <React.Fragment key={tier}>
                        <div className={`tier-letter tier-${tier.toLowerCase()}`}>{tier}</div>
                        <div className={`tier-items--${tier.toLowerCase()}`}>
                            {renderTierItems(tier, i+1)}
                            {getTierReviews(tier).length > 5 && (
                                <div className="more-items">
                                    +{getTierReviews(tier).length - 5} more items
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TierList;