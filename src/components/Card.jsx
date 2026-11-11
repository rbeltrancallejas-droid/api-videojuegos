import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
    if (!item) return null;

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";
        e.target.alt = "Imagen alternativa";
    };

    return (
        <article className="card">
            <div className="card-image-wrapper">
                <img 
                    src={item.imagen} 
                    alt={item.titulo || 'Videojuego'} 
                    className="card-img" 
                    onError={handleImageError} 
                    loading="lazy"
                />
                <span className="badge-genre">{item.genero || 'General'}</span>
            </div>
            
            <div className="card-content">
                <h3 className="card-title" title={item.titulo}>{item.titulo}</h3>
                <p className="card-desc-preview">
                    {item.descripcion ? `${item.descripcion.substring(0, 85)}...` : 'Sin descripción registrada.'}
                </p>
                
                <div className="card-footer">
                    <span className="platform-pill">{item.plataforma || 'Multiplataforma'}</span>
                    <Link to={`/item/${item.id}`} className="btn-card">
                        Ver Ficha Técnica
                    </Link>
                </div>
            </div>
        </article>
    );
};