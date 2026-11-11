import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ submitted: false, error: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación defensiva con expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus({ submitted: false, error: 'Por favor, rellena todos los campos obligatorios (*).' });
            return;
        }

        if (!emailRegex.test(formData.email)) {
            setStatus({ submitted: false, error: 'Ingresa un formato de correo electrónico válido.' });
            return;
        }

        setStatus({ submitted: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
            setStatus({ submitted: false, error: '' });
        }, 5000);
    };

    return (
        <main className="contact-container fade-in">
            <div className="contact-grid">
                <div className="contact-info-panel">
                    <h1>Soporte <span>Técnico</span></h1>
                    <p>
                        Página desarrollada para el desarrollo integral del proyecto. Si tienes dudas sobre la arquitectura implementada, encuentras alguna inconsistencia en el JSON o deseas proponer optimizaciones al catálogo, estamos a tu total disposición.
                    </p>
                    
                    <div className="info-items">
                        <div className="info-item">
                            <span>📍</span>
                            <p>Autlán, Jalisco, México</p>
                        </div>
                        <div className="info-item">
                            <span>📧</span>
                            <p>rbeltrancallejas@gmail.com</p>
                        </div>
                        <div className="info-item">
                            <span>🐙</span>
                            <a href="https://github.com/rbeltrancallejas-droid" target="_blank" rel="noopener noreferrer">
                                github.com/rbeltrancallejas-droid
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card">
                    {status.submitted && (
                        <div className="alert-box alert-success">
                            ✓ Petición enviada correctamente. Se procesará a la brevedad.
                        </div>
                    )}
                    {status.error && (
                        <div className="alert-box alert-error">
                            ⚠ {status.error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre Completo *</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Ej. Roberto Beltrán" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico *</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="rbeltrancallejas@gmail.com" 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input 
                                type="text" 
                                id="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                placeholder="Motivo de la comunicación" 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje *</label>
                            <textarea 
                                id="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                rows="4" 
                                placeholder="Describe el reporte o solicitud..." 
                                required 
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-submit">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};