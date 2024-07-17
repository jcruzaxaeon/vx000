

// ./client/src/components/Card.jsx

import React, { useState, useRef, useEffect } from 'react';

// const Card = ({ name, rating, description, image }) => {
const Card = ({ alias, score, categories, tags, brief, comment }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const cardRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - cardRef.current.offsetLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - cardRef.current.offsetLeft;
        const walk = (x - startX) / 3; // Adjust sensitivity
        if (Math.abs(walk) > 20) { // Threshold to trigger flip
            setIsFlipped(!isFlipped);
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            style={{
                ...styles.card,
                transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
        >
            <div style={styles.cardInner}>
                <div style={styles.cardFront}>
                    {/* <img src={image} alt={name} style={styles.image} /> */}
                    <h3 style={styles.alias}>{alias}</h3>
                    <div style={styles.rating}>Score: {score}</div>
                    <p>Categories: {categories}</p>
                    <p>Tags: {tags}</p>
                    <p>Brief: {brief}</p>
                </div>
                <div style={styles.cardBack}>
                    <h3 style={styles.alias}>{alias}</h3>
                    <p style={styles.description}>{comment}</p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: '250px',
        height: '350px',
        perspective: '1000px',
        cursor: 'grab',
        fontFamily: 'Arial, sans-serif',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
    },
    cardInner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    cardFront: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        backgroundColor: '#f8f8f8',
        borderRadius: '10px',
        padding: '10px',
        boxSizing: 'border-box',
    },
    cardBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        backgroundColor: '#e8e8e8',
        transform: 'rotateY(180deg)',
        borderRadius: '10px',
        padding: '10px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '60%',
        objectFit: 'cover',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    alias: {
        margin: '0 0 10px 0',
        fontSize: '1.2em',
    },
    rating: {
        fontSize: '1.1em',
        fontWeight: 'bold',
        color: '#007bff',
    },
    description: {
        fontSize: '0.9em',
        overflow: 'auto',
        maxHeight: '80%',
    },
};

export default Card;