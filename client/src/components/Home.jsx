// ./client/src/components/Home.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from '../services/auth.js';
import Card from './Card.jsx';
import CreateReviewBasic from './reviews/CreateReviewBasic.jsx';
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
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
            const recentReviews = response.data.slice(-3).reverse();
            setReviews(recentReviews);
        } catch (err) {
            console.error('Error fetching reviews:', err);
            setError('Failed to fetch reviews. Please try again later.');
        }
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
        <div style={styles.container}>
            {/* <h1 style={styles.title}>TYRLYST</h1> */}
            <CreateReviewBasic />
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

            <h2 style={styles.subtitle}>Featured Reviews</h2>
            <div style={styles.cardContainer}>
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
                    />
                ))}
            </div>

            <Link to="/reviews" style={styles.viewAllLink}>Read All Reviews</Link>
            <nav>
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to="/api/users">User List</Link></li> */}
                    <li><Link to="/nodes">Node List</Link></li>
                    {/* <li><Link to="/grades">Grade List</Link></li> */}
                    <li><Link to="/nodes/create">Create Node</Link></li>
                    <li><Link to="/api/nodes/delete">Delete Node</Link></li>
                    {/* <li><Link to="/grade/create">Create Grade</Link></li> */}
                    {/* <li><Link to="/register">Create an account</Link></li> */}
                    <li><Link to="/login">Login</Link></li>
                    {/* <li><Link to="/reviews">Read All Reviews</Link></li> */}
                    <li><Link to="/reviews/create">Create Review</Link></li>
                    {/* <li><Link to="/create">Create User</Link></li> */}
                </ul>
            </nav>
        </div>
        // <div style={styles.container}>
        //     <Header />
        //     <main style={styles.main}>
        //         <h2 style={styles.tagline}>Rate Anything, Anytime, Anywhere</h2>
        //         <p style={styles.description}>
        //             TYRLYST is your go-to platform for rating and reviewing everything from books to restaurants and beyond.
        //         </p>
        //         <div style={styles.ctaContainer}>
        //             <Link to="/register" style={styles.ctaButton}>Start Rating</Link>
        //         </div>
        //         <div style={styles.featuresContainer}>
        //             <div style={styles.featureCard}>
        //                 <h3>Rate Books</h3>
        //                 <p>Share your thoughts on your latest reads</p>
        //             </div>
        //             <div style={styles.featureCard}>
        //                 <h3>Review Restaurants</h3>
        //                 <p>Help others discover great dining experiences</p>
        //             </div>
        //             <div style={styles.featureCard}>
        //                 <h3>Rate Products</h3>
        //                 <p>Inform purchasing decisions with your ratings</p>
        //             </div>
        //             {/* <div>
        //                 <Card
        //                     name="The Catcher in the Rye"
        //                     rating={4.5}
        //                     description="A classic novel by J.D. Salinger about teenage angst and alienation."
        //                     image="url_to_book_cover_image"
        //                 />
        //             </div> */}
        //         </div>
        //     </main>
        // </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
    },
    searchForm: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px',
    },
    searchInput: {
        width: '70%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px 0 0 4px',
    },
    searchButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
    },
    subtitle: {
        textAlign: 'center',
        color: '#555',
        marginBottom: '20px',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '30px',
    },
    viewAllLink: {
        display: 'block',
        textAlign: 'center',
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

// const styles = {
//     container: {
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     main: {
//         flex: 1,
//         padding: '2rem',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//     },
//     tagline: {
//         fontSize: '2rem',
//         marginBottom: '1rem',
//     },
//     description: {
//         fontSize: '1.2rem',
//         maxWidth: '600px',
//         marginBottom: '2rem',
//     },
//     ctaContainer: {
//         marginBottom: '2rem',
//     },
//     ctaButton: {
//         backgroundColor: '#007bff',
//         color: 'white',
//         padding: '0.75rem 1.5rem',
//         borderRadius: '5px',
//         textDecoration: 'none',
//         fontSize: '1.2rem',
//         fontWeight: 'bold',
//     },
//     featuresContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1rem',
//         width: '100%',
//         maxWidth: '800px',
//     },
//     featureCard: {
//         backgroundColor: '#f8f9fa',
//         borderRadius: '5px',
//         padding: '1rem',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     },
//     // Media query for larger screens
//     '@media (min-width: 768px)': {
//         featuresContainer: {
//             flexDirection: 'row',
//         },
//         featureCard: {
//             flex: 1,
//         },
//     },
// };

export default Home;