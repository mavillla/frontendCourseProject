import React from 'react';
import "./styles.css"

const SpreadItem = ({spread, index, expandedIndex, handleSpreadClick}) => {

    return (
        <div
            key={index}
            className={`tarot-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleSpreadClick(index)}
        >
            <div className="spread-info">
                <div className="spread-title">
                    <h3>{spread.title}</h3>
                    <div className={`spread-title-ico ${expandedIndex === index ? 'rotate' : ''}`}>
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
                    spread.spreads.map((item, subIndex) => {
                        return (
                            <div className="spread-description" key={subIndex}>
                                <h4>{item.spread_title}</h4>
                                <p>{item.spread_description}</p>
                                <div className="spread-description-image">
                                    <img src={item.spread_image} alt={item.spread_title}/>
                                </div>
                                <p>{item.spread_explanation}</p>
                                {subIndex !== spread.spreads.length - 1 && (
                                    <hr style={{color:"#b2b2b2", width:"100%", margin:"35px 0 5px 0"}}></hr>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SpreadItem;