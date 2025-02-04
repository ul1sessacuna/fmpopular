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
                    {isOpen ? 'X' : '☰'}
                </button>
                <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
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
                    {/* <li>
                        <Link className="nav-link" to="/artistas" onClick={() => setIsOpen(false)}>
                            Festival
                        </Link>
                    </li> */}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
