import React, {useEffect, useState} from "react";
import "./TaroScreen.css";
import SkyBackground from "../../components/SkyBackground";
import NavBar from "../../components/NavBar";
import tarotCards from "../../images/taro.json"

const TaroScreen = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [searchValue, setSearchValue] = useState("")
    const [tarotArr, setTarotArr] = useState(tarotCards.tarot_cards)
    const handleCardClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const setSearch = (event) => {
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        setTarotArr(tarotCards.tarot_cards.filter((card) =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
        ));
    }, [searchValue])

    return (
        <div className="container">
            <SkyBackground/>
            <NavBar/>
            <div className="main-text tarot-text">
                <p>Исследуйте значения каждой карты, ознакомьтесь с их описаниями и узнайте, как они могут вдохновить и
                    направить вас на вашем уникальном пути самопознания. Каждая карта представлена в виде карточки,
                    которую можно раскрыть, чтобы увидеть более подробное описание.</p>
            </div>
            <input className='converter-container-column__inputs'
                   type="text"
                   placeholder={"Введите название искомой карты"}
                   value={searchValue}
                   onChange={event => {
                       setSearch(event)
                   }}
            />
            <div className="tarot-card-list">
                {tarotArr.map((card, index) => (
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
                                    <p style={{margin:0}}>{card.description}</p>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaroScreen;