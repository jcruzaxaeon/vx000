import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './ReadReviewsPublic.css';

const apiUrl = import.meta.env.VITE_API_URL;

const ReadReviewsPublic = () => {
    const [reviews, setReviews] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState('desc');
    const [tier, setTier] = useState('');

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${apiUrl}/v1/api/reviews/public`, {
                params: {
                    page,
                    limit: 20,
                    sortBy,
                    sortOrder,
                    tier: tier || undefined,
                },
            });
            const newReviews = response.data.reviews;
            setReviews(prevReviews => {
                // Create a Set of existing review IDs for efficient lookup
                const existingIds = new Set(prevReviews.map(review => review.review_id));

                // Filter out any reviews that already exist in the current state
                const uniqueNewReviews = newReviews.filter(review => !existingIds.has(review.review_id));

                // Return the combined array of existing and new unique reviews
                return [...prevReviews, ...uniqueNewReviews];
            });
            setHasMore(newReviews.length === 20);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        console.log('Current reviews:', reviews);
    }, [reviews]);

    useEffect(() => {
        resetAndFetchReviews();
        fetchReviews();
    }, [sortBy, sortOrder, tier]);

    const handleSort = (field) => {
        if (field === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
        resetAndFetchReviews();
    };

    const SortIcon = ({ field }) => (
        <FontAwesomeIcon
            icon={sortBy === field ? (sortOrder === 'asc' ? faSortUp : faSortDown) : faSortUp}
            className={sortBy === field ? 'sort-icon active' : 'sort-icon'}
        />
    );

    const resetAndFetchReviews = () => {
        setReviews([]);
        setPage(1);
        setHasMore(true);
    };

    return (
        <div className="public-reviews">
            <h1>Public Reviews</h1>
            <div className="filters">
                <select value={tier} onChange={(e) => setTier(e.target.value)}>
                    <option value="">All Tiers</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
            </div>
            <div className="review-header">
                <div className="header-item" onClick={() => handleSort('alias')}>
                    <span>Item</span>
                    <SortIcon field="alias" />
                </div>
                <div className="header-item" onClick={() => handleSort('disambiguation')}>
                    <span>List</span>
                    <SortIcon field="disambiguation" />
                </div>
                <div className="header-item" onClick={() => handleSort('User.name')}>
                    <span>Username</span>
                    <SortIcon field="User.name" />
                </div>
                <div className="header-item" onClick={() => handleSort('createdAt')}>
                    <span>Date</span>
                    <SortIcon field="createdAt" />
                </div>
                <div className="header-item" onClick={() => handleSort('tier')}>
                    <span>Tier</span>
                    <SortIcon field="tier" />
                </div>
            </div>
            <InfiniteScroll
                dataLength={reviews.length}
                next={fetchReviews}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                {reviews.map((review) => (
                    <div key={review.review_id} className="review-card">
                        <div className="review-content">
                            <strong>{review.alias}</strong>
                            <em>{review.disambiguation}</em>
                            <span>{review.User?.name || 'Anonymous'}</span>
                            <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                        </div>
                        <div className="review-tier">{review.tier}</div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default ReadReviewsPublic;