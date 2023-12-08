import React from 'react';
import {Link} from "react-router-dom";
import "./styles.css"

const TaroItem = ({card, index, expandedIndex, handleCardClick, location}) => {
    return (
        <div
            key={index}
            className={`tarot-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleCardClick(index)}
        >
            <div className="card-info">
                <div className="card-title">
                    <h3>{card.title}</h3>
                    <div className={`card-title-ico ${expandedIndex === index ? 'rotate' : ''}`}>
                                    <span style={{
                                        display: 'inline-block',
                                        width: '3px',
                                        height: '15px',
                                        marginRight: '-2.7px',
                                        background: `${expandedIndex === index ? '#b2b2b2' : 'gray'}`,
                                        borderRadius: '2px',
                                        transition: 'transform 0.3s',
                                        transform: `translate(-50%, -50%) rotate(${expandedIndex === index ? '90deg' : '90deg'})`
                                    }}></span>
                        <span style={{
                            display: 'inline-block',
                            width: '3px',
                            height: '15px',
                            background: `${expandedIndex === index ? '#b2b2b2' : 'gray'}`,
                            borderRadius: '2px',
                            transition: 'transform 0.3s',
                            transform: `translate(-50%, -50%) rotate(${expandedIndex === index ? '-90deg' : '180deg'})`
                        }}></span>
                    </div>
                </div>
                {expandedIndex === index &&
                    <div className="card-description">
                        <img src={card.image} alt={card.title}/>
                        <div className="card-description-text">
                            <p style={{margin: 0}}>{card.description}</p>
                            <div style={{
                                marginTop: "45px",
                                cursor: "pointer",
                            }}>
                                <Link to={`${location.pathname}/${card.link}`}
                                      style={{
                                          textDecoration: "none",
                                          color: "white"
                                      }}
                                >
                                    Посмотреть подробнее
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default TaroItem;