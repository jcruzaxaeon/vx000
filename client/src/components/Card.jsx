

// 
// ./client/scr/components/Card.jsx

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ review_id, review_type, alias, disambiguation, tier, category, type, score, categories, tags, brief, comment }) => {
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
        const walk = (currentX - startX) / 3;
        if (Math.abs(walk) > 20) {
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
        <Link to={`/reviews/${review_id}/edit`}>
        <div
            ref={cardRef}
            className={`${review_type !== 'Basic' ? 'card' : 'card__basic'} ${isFlipped ? 'flipped' : ''}`}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onTouchStart={handleStart}
            onTouchMove={handleMove}>
            <div className="card-inner">
                <div className="card-front">
                    <div className="card-frame">
                        <div className="frame-header">
                            <div className='line-1'>
                                <h2 className="card-name">{alias}</h2>
                                <div className="mana-cost">{tier}</div>
                            </div>
                            <div className='line-2'>
                                <p>{disambiguation}</p>
                            </div>
                        </div>
                        { review_type !== 'Basic'
                            ? <><div className="frame-art">
                                    {/* Placeholder for card art */}
                                    <div className="art-placeholder" />
                                </div>
                                <div className="frame-type-line">
                                    {category} — {type}
                                    {/* {categories.split(',')[0]} — {tags.split(',')[0]} */}
                                </div>
                                <div className="frame-text-box">
                                    <p className="flavor-text">{brief}</p>
                                    {/* <p className="card-text">
                                    Categories: {categories}<br />
                                    Tags: {tags}
                                    </p> */}
                                </div>
                                <div className="frame-bottom-info">
                                    <div className="info-left">EN-001</div>
                                    <div className="info-right">&#9679; EN</div>
                                </div></>
                            : null
                        }
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-frame">
                        <h3 className="back-title">{alias}</h3>
                        <div className="back-content">
                            <p>{comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div></Link>
    );
};

export default Card;