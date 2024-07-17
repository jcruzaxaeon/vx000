

// ./client/src/components/Card.jsx

import React, { useState, useRef, useEffect } from 'react';

const Card = ({ alias, score, categories, tags, brief, comment }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const cardRef = useRef(null);

    const handleStart = (e) => {
        setIsDragging(true);
        setStartX(e.type.includes('mouse') ? e.pageX : e.touches[0].pageX);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const walk = (currentX - startX) / 3; // Adjust sensitivity
        if (Math.abs(walk) > 20) { // Threshold to trigger flip
            setIsFlipped(!isFlipped);
            setIsDragging(false);
        }
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchend', handleEnd);
        return () => {
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchend', handleEnd);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            style={{
                ...styles.card,
                transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
            }}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
        >
            <div style={styles.cardInner}>
                <div style={styles.cardFront}>
                    <h3 style={styles.alias}>{alias}</h3>
                    <div style={styles.rating}>Score: {score}</div>
                    <p>Categories: {categories}</p>
                    <p>Tags: {tags}</p>
                    <p>Brief: {brief}</p>
                </div>
                <div style={styles.cardBack}>
                    <h3 style={styles.alias}>{alias}</h3>
                    <p style={styles.comment}>{comment}</p>
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
    comment: {
        fontSize: '0.9em',
        overflow: 'auto',
        maxHeight: '80%',
    },
};

export default Card;