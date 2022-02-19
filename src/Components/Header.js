import { React, useState, useEffect } from 'react';
import './Header.css';
import MenuItems from './MenuItems';

function Header() {
    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">HOME</a>
                        <a className="nav-item nav-link" href="/members">MEMBERS</a>
                        <a className="nav-item nav-link" href="/achievements">ACHIEVEMENTS</a>
                        <a className="nav-item nav-link" href="performances">PERFORMANCES</a>
                    </div>
                </div>
            </nav>
            {/* <nav className="navbar" style={{ backgroundColor: 'transparent' }}>
                <ul className="navbar-nav ml-auto">
                        <a className="icon" onClick={clickHandler}>
                            <i className={click ? "fas fa-times" : "fa fa-bars"}></i>
                        </a>
                </ul>
            </nav> */}
            {click && <MenuItems />}
        </>
    );
}

export default Header;
