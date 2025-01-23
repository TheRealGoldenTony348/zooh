import React, { useState } from 'react';
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <header>
            <Menu
                right
                isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)}
            >
                <a className="menu-item" href="#home" onClick={() => closeMenu()}>Home</a>
                <a className="menu-item" href="#about" onClick={() => closeMenu()}>About</a>
                <a className="menu-item" href="#services" onClick={() => closeMenu()}>Services</a>
                <a className="menu-item" href="#contact" onClick={() => closeMenu()}>Contact</a>
            </Menu>
            <header className="App-header">
                <div className="title">My Website</div>
                <div className="hamburger-menu" onClick={toggleMenu}></div>
            </header>
            <h1>Zooh!</h1>
            <nav>
                <Link className="pageLink" to="/">Home</Link>
                <Link className="pageLink" to="/pageone">Page 1</Link>
                <Link className="pageLink" to="/pagetwo">Page 2</Link>
            </nav>
            <button className="menuButton">=</button>
        </header>
    );
}

export default Header;