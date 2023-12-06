import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "./styles.css"
import navBarLogo from "../images/taro-main-logo.png"

const NavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <>
            <div className="navbar">
                <div className="navbar-block">
                    <Link to={'/'} className="navbar-logo">
                        <img src={navBarLogo} alt="Taro Logo"/>
                    </Link>
                    <div className="navbar-links">
                        <Link
                            className={`navigation-btn ${isActive('/')}`}
                            to={'/'}
                        >
                            ГЛАВНАЯ
                        </Link>
                        <Link
                            className={`navigation-btn ${isActive('/taro')}`}
                            to={'/taro'}
                        >
                            ЗНАЧЕНИЯ КАРТ
                        </Link>
                        <Link
                            className={`navigation-btn ${isActive('/spreads')}`}
                            to={'/spreads'}
                        >
                            РАСКЛАДЫ
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default NavBar;