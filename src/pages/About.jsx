import React from 'react';

export const About = () => {
    return (
        <main className="home-container fade-in">
            <div className="about-card">
                <h1>Desarrollo Integral del <span>Proyecto</span></h1>
                
                <section className="about-section">
                    <h2>Propósito del Sistema</h2>
                    <p>
                        Esta aplicación web fue diseñada como proyecto final integrador para certificar y evaluar competencias avanzadas en el ecosistema React. La solución aborda la modularización de software, desacoplamiento de lógica a través de hooks personalizados y persistencia distribuida mediante APIs servidas desde GitHub.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Competencias Implementadas</h2>
                    <ul className="tech-list-hk">
                        <li><strong>Arquitectura Modular:</strong> Componentes independientes comunicados a través de props estrictamente controladas.</li>
                        <li><strong>Enrutamiento Dinámico:</strong> Navegación SPA con React Router v6, parámetros dinámicos para IDs y detección de rutas no encontradas.</li>
                        <li><strong>Consumo Asíncrono de API:</strong> Integración de Axios y AbortController para prevenir memory leaks y manejar estados de carga y error.</li>
                        <li><strong>Custom Hook Reactivo:</strong> Encapsulación de la lógica de red en el hook <code>useFetch</code> para maximizar la reutilización del código.</li>
                        <li><strong>Diseño Coherente y Responsivo:</strong> Interfaz adaptativa a cualquier resolución (Mobile-First y Desktop) inspirada en tonalidades sólidas de Hollow Knight.</li>
                    </ul>
                </section>
            </div>
        </main>
    );
};