import React, { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { ItemList } from '../components/ItemList';
import { Hero } from '../components/Hero';

export const Home = () => {
    const { data, loading, error } = useFetch('https://raw.githubusercontent.com/rbeltrancallejas-droid/api-videojuegos/main/db.json');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('ALL');

    // Extraer géneros dinámicos para el menú selector
    const genres = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];
        const unique = new Set(data.map(game => game.genero).filter(Boolean));
        return ['ALL', ...Array.from(unique)];
    }, [data]);

    // Filtrado combinado: Género + Término de búsqueda
    const filteredData = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];
        return data.filter(game => {
            const matchesText = 
                game.titulo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                game.plataforma?.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesGenre = selectedGenre === 'ALL' || game.genero === selectedGenre;
            return matchesText && matchesGenre;
        });
    }, [data, searchTerm, selectedGenre]);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="spinner"></div>
                <p>Cargando archivos del archivo...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="loader-container">
                <p style={{ color: '#dc2626', fontWeight: 'bold' }}>Error de sincronización: {error}</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="btn-card"
                    style={{ marginTop: '1rem' }}
                >
                    Reintentar Conexión
                </button>
            </div>
        );
    }

    return (
        <main className="home-container fade-in">
            <Hero />
            
            <section className="catalog-section">
                <div className="catalog-header">
                    <h2>Colección <span>Principal</span></h2>
                    
                    <div className="controls-wrapper">
                        <select 
                            className="genre-filter-select"
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            aria-label="Filtrar por género"
                        >
                            {genres.map(genre => (
                                <option key={genre} value={genre}>
                                    {genre === 'ALL' ? 'Todos los Géneros' : genre}
                                </option>
                            ))}
                        </select>

                        <div className="search-wrapper">
                            <span className="search-icon">🔍</span>
                            <input 
                                type="text" 
                                className="search-input"
                                placeholder="Buscar juego o consola..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button 
                                    className="clear-search" 
                                    onClick={() => setSearchTerm('')}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {filteredData.length > 0 ? (
                    <ItemList items={filteredData} />
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                        <h3>No se encontraron coincidencias para la búsqueda actual</h3>
                        <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Verifica la ortografía o restablece los filtros.</p>
                        <button 
                            className="btn-card" 
                            style={{ marginTop: '1.5rem' }}
                            onClick={() => { setSearchTerm(''); setSelectedGenre('ALL'); }}
                        >
                            Restablecer Filtros
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
};