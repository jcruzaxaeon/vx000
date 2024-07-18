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
        <div
            ref={cardRef}
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
        >
            <div className="card-inner">
                <div className="card-front">
                    <div className="card-frame">
                        <div className="frame-header">
                            <h2 className="card-name">{alias}</h2>
                            <div className="mana-cost">{score}</div>
                        </div>
                        <div className="frame-art">
                            {/* Placeholder for card art */}
                            <div className="art-placeholder" />
                        </div>
                        <div className="frame-type-line">
                            {categories.split(',')[0]} — {tags.split(',')[0]}
                        </div>
                        <div className="frame-text-box">
                            <p className="flavor-text">{brief}</p>
                            <p className="card-text">
                                Categories: {categories}<br />
                                Tags: {tags}
                            </p>
                        </div>
                        <div className="frame-bottom-info">
                            <div className="info-left">EN-001</div>
                            <div className="info-right">&#9679; EN</div>
                        </div>
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
            <style jsx>{`
                .card {
                    width: 63mm;
                    height: 88mm;
                    perspective: 1000px;
                    font-family: 'Beleren', serif;
                    cursor: pointer;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                }
                .card.flipped {
                    transform: rotateY(180deg);
                }
                .card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    border-radius: 4.75% / 3.5%;
                }
                .card-front, .card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    border-radius: 4.75% / 3.5%;
                    overflow: hidden;
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                }
                .card-front {
                    background-color: #f8f8f8;
                }
                .card-back {
                    background-color: #0e68ab;
                    transform: rotateY(180deg);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    color: white;
                }
                .card-frame {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 3px;
                    box-sizing: border-box;
                }
                .frame-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 8%;
                    padding: 0 5%;
                    background-color: #bbb;
                    border-radius: 5px;
                }
                .card-name {
                    font-size: 0.9em;
                    margin: 0;
                }
                .mana-cost {
                    font-size: 0.9em;
                    font-weight: bold;
                }
                .frame-art {
                    height: 43%;
                    margin: 1% 2%;
                    border-radius: 4% / 3%;
                    overflow: hidden;
                }
                .art-placeholder {
                    width: 100%;
                    height: 100%;
                    background-color: #ddd;
                }
                .frame-type-line {
                    height: 6%;
                    background-color: #bbb;
                    display: flex;
                    align-items: center;
                    padding: 0 5%;
                    font-size: 0.7em;
                    border-radius: 5px;
                }
                .frame-text-box {
                    height: 38%;
                    margin: 1% 2%;
                    padding: 2%;
                    font-size: 0.65em;
                    text-align: left;
                    background-color: #d6d6d6;
                    border-radius: 3% / 3%;
                    overflow: auto;
                }
                .flavor-text {
                    font-style: italic;
                    margin-bottom: 0.5em;
                }
                .frame-bottom-info {
                    height: 4%;
                    background-color: #bbb;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 5%;
                    font-size: 0.6em;
                    border-radius: 5px;
                }
                .back-title {
                    color: white;
                    margin-bottom: 1em;
                }
                .back-content {
                    padding: 0 10%;
                    font-size: 0.8em;
                    overflow: auto;
                }
            `}</style>
        </div>
    );
};

export default Card;