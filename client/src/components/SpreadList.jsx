import React, {useEffect, useState} from 'react';
import spread from "../images/spread.json";
import './styles.css'
import SpreadItem from "./SpreadItem";

const SpreadList = ({searchValue}) => {

    const [spreadArr, setSpreadArr] = useState(spread.spreads)
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleSpreadClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    useEffect(() => {
        setSpreadArr(spread.spreads.filter((spread) =>
            spread.title.toLowerCase().includes(searchValue.toLowerCase())
        ));
    }, [searchValue])

    return (
        <div className="spread-card-list">
            {spreadArr.map((spread, index) => (
                <SpreadItem
                    key={index}
                    spread={spread}
                    index={index}
                    expandedIndex={expandedIndex}
                    handleSpreadClick={handleSpreadClick}
                />
            ))}
        </div>
    );
};

export default SpreadList;