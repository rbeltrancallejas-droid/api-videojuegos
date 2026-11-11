import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="nav-brand">
                    <span className="brand-icon">⚡</span>
                    <span className="brand-text">Game<span>Vault</span></span>
                </NavLink>

                <nav className="nav-links">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        end
                    >
                        Inicio
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Acerca de
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Soporte Técnico
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};