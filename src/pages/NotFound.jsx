import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <main className="home-container fade-in">
            <div className="about-card" style={{ textAlign: 'center', maxWidth: '650px', margin: '4rem auto' }}>
                <span style={{ fontSize: '3.5rem' }}>⚔️</span>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: 'var(--hk-blue-dark)' }}>
                    Error <span>404</span>
                </h1>
                <h2 style={{ fontSize: '1.3rem', color: 'var(--hk-blue-primary)', marginBottom: '1rem', border: 'none' }}>
                    Área no descubierta en Hallownest
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
                    La ruta o recurso al que intentas acceder no existe en la base de datos o ha sido reubicada.
                </p>
                <Link to="/" className="btn-back">
                    ← Regresar al Catálogo Principal
                </Link>
            </div>
        </main>
    );
};