import React, {useState} from "react";
import SkyBackground from "../../components/SkyBackground";
import NavBar from "../../components/NavBar";
import SpreadList from "../../components/SpreadList";

const SpreadScreen = () => {

    const [searchValue, setSearchValue] = useState("")
    const setSearch = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="container">
            <SkyBackground/>
            <NavBar/>
            <div className="main-text tarot-text">
                <p> На странице с раскладами Таро предоставляется уникальная возможность исследования различных раскладов карт Таро для получения инсайтов и ответов на вопросы. Каждый расклад представлен в виде карточки, содержащей информацию о его назначении, распределении карт и интерпретации. Пользователи могут выбирать расклады в соответствии с их запросами, получая ценные подсказки и направление от таинственного мира Таро. Погрузитесь в атмосферу мудрости и загадки, расшифруйте послания карт и обнаружьте скрытые аспекты своего пути.</p>
            </div>
            <input className='search-input'
                   type="text"
                   placeholder={"Введите название искомой карты"}
                   value={searchValue}
                   onChange={event => {
                       setSearch(event)
                   }}
            />
            <SpreadList searchValue={searchValue}/>
        </div>
    )
}

export default SpreadScreen;