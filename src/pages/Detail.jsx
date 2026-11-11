import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading, error } = useFetch('https://raw.githubusercontent.com/rbeltrancallejas-droid/api-videojuegos/main/db.json');

    if (loading) {
        return (
            <div className="loader-container">
                <div className="spinner"></div>
                <p>Recuperando registro...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="loader-container">
                <p style={{ color: '#dc2626' }}>Ocurrió un problema: {error}</p>
                <button onClick={() => navigate('/')} className="btn-card" style={{ marginTop: '1rem' }}>
                    Volver al Catálogo
                </button>
            </div>
        );
    }

    const item = Array.isArray(data) ? data.find(el => String(el.id) === String(id)) : null;

    if (!item) {
        return (
            <div className="detail-container">
                <div className="detail-view" style={{ textAlign: 'center' }}>
                    <h2>Elemento no encontrado</h2>
                    <p style={{ color: '#64748b' }}>El identificador especificado no existe en el repositorio.</p>
                    <div>
                        <Link to="/" className="btn-back" style={{ marginTop: '1rem' }}>
                            ← Regresar a la Base de Datos
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="detail-container fade-in">
            <div className="detail-view">
                <div className="detail-image-section">
                    <img 
                        src={item.imagen} 
                        alt={item.titulo} 
                        className="detail-img" 
                        onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80";
                        }}
                    />
                </div>
                
                <div className="detail-info-section">
                    <h2 className="detail-title">{item.titulo}</h2>
                    
                    {/* Etiquetas con la paleta Hollow Knight: Azul Alma, Jade Hallownest y Acero */}
                    <div className="meta-tags">
                        <span className="tag-hk tag-genre-hk">{item.genero || 'Género no definido'}</span>
                        <span className="tag-hk tag-platform-hk">{item.plataforma || 'Plataforma estándar'}</span>
                        <span className="tag-hk tag-year-hk">{item.año || 'Año desconocido'}</span>
                    </div>

                    <div className="info-block">
                        <div className="info-row">
                            <span className="info-label">Protagonista:</span>
                            <span className="info-value">{item.personaje_principal || 'No especificado'}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Desarrollador:</span>
                            <span className="info-value">{item.desarrolladora || 'No especificado'}</span>
                        </div>
                    </div>

                    <div className="synopsis-block">
                        <h3>Sinopsis</h3>
                        <p>{item.descripcion}</p>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <Link to="/" className="btn-back">
                            ← Volver al Catálogo Principal
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};