import React from 'react';
import { useNavigate } from 'react-router-dom';

// Datos de perfil
const profileData = {
    name: "Luis A. Gutierrez Deffit",
    role: "Arquitecto de Sistemas Cloud (AWS) & Dev. AI",
    tagline: "Optimizando la infraestructura con algoritmos de vanguardia.",
    imageUrl: "https://placehold.co/150x150/0d0d1a/00f0ff?text=LA", // Placeholder futurista
};

export function BannerProfile() {
    const navigate = useNavigate(); // Hook para navegación
    
    // Colores y fuentes de la estética científica (Orbitron y Roboto Mono)
    const baseStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        color: '#e0f2f7',
    };

    return (
        <header 
            style={{ 
                ...baseStyle,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(10, 10, 20, 0.8)',
                border: '2px solid #00f0ff',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto'
            }}
        >
            {/* ESTE DIV HACE QUE TODO EL CONTENIDO SEA CLICABLE */}
            <div
                onClick={() => navigate('/')} // <-- NAVEGA A LA RUTA PRINCIPAL
                style={{ 
                    cursor: 'pointer', // Indica que es clicable
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center' 
                }}
            >
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid #ff4081', // Borde rosa neón
                    marginBottom: '1rem',
                    boxShadow: '0 0 20px rgba(255, 64, 129, 0.7)'
                }}>
                    <img 
                        src={profileData.imageUrl} 
                        alt="Perfil de Usuario" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <h1 style={{ 
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#00f0ff',
                    fontSize: '2.5rem',
                    textShadow: '0 0 10px rgba(0, 240, 255, 0.6)',
                    marginBottom: '0.5rem'
                }}>
                    {profileData.name}
                </h1>
                <h2 style={{ 
                    fontFamily: 'Roboto Mono, monospace',
                    color: '#ff4081', // Rol en rosa neón
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem'
                }}>
                    // {profileData.role}
                </h2>
                <p style={{ 
                    color: '#b0e0e6',
                    fontStyle: 'italic',
                    fontSize: '0.9rem'
                }}>
                    {profileData.tagline}
                </p>
            </div>
        </header>
    );
}