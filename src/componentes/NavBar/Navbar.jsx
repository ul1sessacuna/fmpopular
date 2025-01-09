import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="custom-navbar">
            <div className="navbar-container">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
                    <li>
                        <Link className="nav-link" to="/inicio" onClick={() => setIsOpen(false)}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/programas" onClick={() => setIsOpen(false)}>
                            Programas
                        </Link>
                    </li>
                    {/* <li>
                        <Link className="nav-link" to="/noticias" onClick={() => setIsOpen(false)}>
                            Noticias
                        </Link>
                    </li> */}
                    <li>
                        <Link className="nav-link" to="/candidatos" onClick={() => setIsOpen(false)}>
                            Candidatos 2025
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contacto" onClick={() => setIsOpen(false)}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
