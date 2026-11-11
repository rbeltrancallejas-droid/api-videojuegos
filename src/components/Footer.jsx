import React from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span>⚡</span> GameVault
                </div>
                <p className="footer-description">
                    Plataforma integradora para la exploración y consulta de bases de datos interactivas de videojuegos.
                </p>
                <div className="footer-meta">
                    <p>&copy; {currentYear} Catálogo de Videojuegos. Proyecto Integrador React.</p>
                    <p className="footer-subtext">Desarrollado con React, React Router y Vite &bull; Alojado en Netlify</p>
                </div>
            </div>
        </footer>
    );
};