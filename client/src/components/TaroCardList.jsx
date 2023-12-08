import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import tarotCards from "../images/taro.json";
import './styles.css'
import TaroItem from "./TaroItem";

const TaroCardList = ({searchValue}) => {

    const location = useLocation();
    const [tarotArr, setTarotArr] = useState(tarotCards.tarot_cards)
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleCardClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    useEffect(() => {
        setTarotArr(tarotCards.tarot_cards.filter((card) =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
        ));
    }, [searchValue])

    return (
        <div className="tarot-card-list">
            {tarotArr.map((card, index) => (
                <TaroItem
                    key={index}
                    card={card}
                    index={index}
                    expandedIndex={expandedIndex}
                    handleCardClick={handleCardClick}
                    location={location}
                />
            ))}
        </div>
    );
};

export default TaroCardList;