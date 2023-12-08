import React, {useEffect, useState} from 'react';
import SkyBackground from "../../components/SkyBackground";
import NavBar from "../../components/NavBar";
import "./TarpCardScreen.css"
import tarotCards from "../../images/taro.json";
import {useParams} from "react-router-dom";

const TaroCardScreen = () => {

    const params = useParams();
    const [card, setCard] = useState(null)

    useEffect(() => {
        setCard(tarotCards.tarot_cards.find((card) => card.link === params.link));
        console.log(card)
    },[])


    return (
        <div className="container">
            <SkyBackground/>
            <NavBar/>
            {card !== null ?
                <div className="taro-container">

                    {card.image ?
                        <div className="taro-img-card">
                            <img src={card.image} alt={card.title}/>
                        </div> : null}

                    <h2 style={{color: "rgb(201, 201, 201)", marginTop: "10px"}}>{card.title}</h2>
                    <div className="taro-main-text">
                        {card.description ? (
                                <div>
                                    <h2>Краткое описание</h2>
                                    <p>{card.description}</p>
                                </div>
                            )
                            : null}

                        {card.rusklad ?
                            <div>
                                <h2>Общее значение в раскладе</h2>
                                <p>{card.rusklad}</p>
                            </div>
                            : null}

                        {card.job ?
                            <div>
                                <h2>Профессиональная ситуация</h2>
                                <p>{card.job}</p>
                            </div>
                            : null}

                        {card.love ?
                            <div>
                                <h2>Личные отношения</h2>
                                <p>{card.love}</p>
                            </div>
                            : null}

                        {card.personalCharacteristics ?
                            <div>
                                <h2>Характеристика личности</h2>
                                <p>{card.personalCharacteristics}</p>
                            </div>
                            : null}

                    </div>
                </div>
                : null}
        </div>
    );
};

export default TaroCardScreen;