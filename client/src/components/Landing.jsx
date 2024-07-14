// ./client/src/components/Landing.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';
import Card from './Card.jsx';

const Landing = () => {
    return (
        <div style={styles.container}>
            <Header />
            <main style={styles.main}>
                <h2 style={styles.tagline}>Rate Anything, Anytime, Anywhere</h2>
                <p style={styles.description}>
                    TYRLYST is your go-to platform for rating and reviewing everything from books to restaurants and beyond.
                </p>
                <div style={styles.ctaContainer}>
                    <Link to="/register" style={styles.ctaButton}>Start Rating</Link>
                </div>
                <div style={styles.featuresContainer}>
                    <div style={styles.featureCard}>
                        <h3>Rate Books</h3>
                        <p>Share your thoughts on your latest reads</p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>Review Restaurants</h3>
                        <p>Help others discover great dining experiences</p>
                    </div>
                    <div style={styles.featureCard}>
                        <h3>Rate Products</h3>
                        <p>Inform purchasing decisions with your ratings</p>
                    </div>
                    <div>
                        <Card
                            name="The Catcher in the Rye"
                            rating={4.5}
                            description="A classic novel by J.D. Salinger about teenage angst and alienation."
                            image="url_to_book_cover_image"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    tagline: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    description: {
        fontSize: '1.2rem',
        maxWidth: '600px',
        marginBottom: '2rem',
    },
    ctaContainer: {
        marginBottom: '2rem',
    },
    ctaButton: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    featuresContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '800px',
    },
    featureCard: {
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    // Media query for larger screens
    '@media (min-width: 768px)': {
        featuresContainer: {
            flexDirection: 'row',
        },
        featureCard: {
            flex: 1,
        },
    },
};

export default Landing;