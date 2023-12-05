import React from "react";
import {Link, useLocation} from "react-router-dom"
import "./TaroScreen.css";

const TaroScreen = () =>{
    const location = useLocation();
    return (
        <div className="container">
            <div className="navbar">
            <Link
                        style={{backgroundColor: location.pathname === '/' ? 'rgba(23, 23, 23, 0.80)' : 'rgba(51, 51, 51, 0.60)'}}
                        className='navigation-btn'
                        to={'/'}
                    >
                        Главная
                    </Link>
                    <Link
                        style={{backgroundColor: location.pathname === '/taro' ? 'rgba(23, 23, 23, 0.80)' : 'rgba(51, 51, 51, 0.60)'}}
                        className='navigation-btn'
                        to={'/taro'}
                    >
                        Значения карт
                    </Link>
            </div>
            <div className="header">
            </div>
        </div>
    )
}

export default TaroScreen;