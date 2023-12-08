import React, {useState} from "react";
import "./TaroScreen.css";
import SkyBackground from "../../components/SkyBackground";
import NavBar from "../../components/NavBar";
import TaroCardList from "../../components/TaroCardList";

const TaroScreen = () => {

    const [searchValue, setSearchValue] = useState("")
    const setSearch = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="container">
            <SkyBackground/>
            <NavBar/>
            <div className="main-text tarot-text">
                <p> Исследуйте значения каждой карты, ознакомьтесь с их описаниями и узнайте, как они могут вдохновить и
                    направить вас на вашем уникальном пути самопознания. Каждая карта представлена в виде карточки,
                    которую можно раскрыть, чтобы увидеть более подробное описание.</p>
            </div>
            <input className='search-input'
                   type="text"
                   placeholder={"Введите название искомой карты"}
                   value={searchValue}
                   onChange={event => {
                       setSearch(event)
                   }}
            />
            <TaroCardList searchValue={searchValue}/>
        </div>
    )
}

export default TaroScreen;