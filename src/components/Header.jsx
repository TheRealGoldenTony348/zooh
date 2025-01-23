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
        <>
            <Menu
                right
                isOpen={menuOpen}
                onStateChange={(state) => handleStateChange(state)}
            >
                <a className="menu-item" href="/" onClick={() => closeMenu()}>Home</a>
                <a className="menu-item" href="/" onClick={() => closeMenu()}>About</a>
                <a className="menu-item" href="/" onClick={() => closeMenu()}>Services</a>
                <a className="menu-item" href="/" onClick={() => closeMenu()}>Contact</a>
            </Menu>
            <header className="App-header">
                <h1 className='title'>Zooh!</h1>
                <nav>
                    <Link className="pageLink" to="/">Home</Link>
                    <Link className="pageLink" to="/pageone">Page 1</Link>
                    <Link className="pageLink" to="/pagetwo">Page 2</Link>
                </nav>
                <div className="hamburger-menu" onClick={toggleMenu}></div>
            </header>
        </>
    );
}

export default Header;