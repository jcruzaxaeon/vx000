// ./client/src/components/Home.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken, verifyToken } from '../services/auth.js';
import Card from './Card.jsx';
import CreateReviewBasic from './reviews/CreateReviewBasic.jsx';
const apiUrl = import.meta.env.VITE_API_URL;
import '../styles/normalize.css';
import '../styles/global.css';
import SearchBar from './SearchBar.jsx';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    // VALIDATION
    // import { getToken, verifyToken } from '../services/auth.js';
    //
    const [isTokenValid, setIsTokenValid] = useState(false);
    useEffect(() => {
        (async () => {
            const valid = await verifyToken();
            setIsTokenValid(valid);
        })();
    }, []);

    // REVIEWS
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchPublicReviews();
    }, []);

    const fetchPublicReviews = async () => {
        try {
            const response = await axios.get(`${apiUrl}/v1/api/reviews/public`, {
                params: {
                    limit: 3,
                    sortBy: 'createdAt',
                    sortOrder: 'desc'
                }
            });

            if (response.data && response.data.reviews) {
                setReviews(response.data.reviews);
            } else {
                setReviews([]);
            }
        } catch (err) {
            console.error('Error fetching public reviews:', err);
            setError('Failed to fetch public reviews. Please try again later.');
        }
        // try {
        //     const token = getToken();
        //     const response = await axios.get(`${apiUrl}/v1/api/reviews`, {
        //         headers: { 'Authorization': `Bearer ${token}` }
        //     });
        //     const recentReviews = response.data.slice(-3).reverse();
        //     setReviews(recentReviews);
        // } catch (err) {
        //     console.error('Error fetching reviews:', err);
        //     setError('Failed to fetch reviews. Please try again later.');
        // }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search functionality
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className='page-container'>

            {/* CREATE BASIC REVIEW COMPONENT */}
            {console.log("Verify token:", isTokenValid)}
            <SearchBar />
            {isTokenValid ? <CreateReviewBasic /> : null}
            {/* <br /> */}

            {/* NAVIGATION */}
            <div className='container1'>
                <div className='container2'>
                    <div className="button-container">
                        <Link to="/reviews" className="button button--blue">My Reviews</Link>
                        <Link to="/reviews/public" className="button button--blue">Public Reviews</Link>
                    </div>
                </div>
            </div>


            {/* [ ] SEARCH - "implement search feature" */}
            {/* <form onSubmit={handleSearch} style={styles.searchForm}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search reviews..."
                    style={styles.searchInput}
                />
                <button type="submit" style={styles.searchButton}>Search</button>
            </form> */}
            <h2 className='subtitle'>Featured Tierlists</h2>
            <div className='card-container'>
                {reviews.map((review, index) => (
                    <Card
                        key={index}
                        review_id={review.review_id}
                        review_type={review.review_type}
                        alias={review.alias}
                        disambiguation={review.disambiguation}
                        score={review.score}
                        tier={review.tier}
                        category={review.category}
                        type={review.type}
                        categories={review.categories} // .join(', ')
                        tags={review.tags}
                        brief={review.brief}
                        comment={review.comment}
                        item={review.item}
                        tierlist={review.tierlist}
                    />
                ))}
            </div>

            <nav>
                <ul className='link-list'>
                    <li className='link-list__item'><Link className='link' to="/nodes">Node List</Link></li>
                    <li className='link-list__item'><Link className='link' to="/nodes/create">Create Node</Link></li>
                    <li className='link-list__item'><Link className='link' to="/api/nodes/delete">Delete Node</Link></li>
                    <li className='link-list__item'><Link className='link' to="/login">Login</Link></li>
                    <li className='link-list__item'><Link className='link' to="/reviews/create">Create Review</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;