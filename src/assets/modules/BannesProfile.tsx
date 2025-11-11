import React from 'react';
import { useNavigate } from 'react-router-dom';
import  ImgProf  from '../Luis Deffit.png';

// Datos de perfil
const profileData = {
    name: "Luis A. Gutierrez Deffit",
    role: "Arquitecto de Sistemas Cloud (AWS) & Dev. AI",
    tagline: "Optimizando la infraestructura con algoritmos de vanguardia.",
    phone: "+54 11 2389-8273", // <--- NÚMERO DE TELÉFONO AGREGADO
    imageUrl: ImgProf, // Placeholder futurista
};

// 💡 Helper para detectar si estamos en un tamaño de pantalla grande (simulando Media Query)
// En un entorno real, usarías un hook para esto (ej: useMediaQuery), pero para estilos inline,
// usaremos un valor fijo para el ejemplo de desktop. 
const IS_DESKTOP = window.innerWidth >= 768; 

export function BannerProfile() {
    const navigate = useNavigate();
    
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
                justifyContent: 'center', // Centra el contenido horizontalmente
                alignItems: 'center', // Centra el contenido verticalmente
                padding: '2rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(10, 10, 20, 0.8)',
                border: '2px solid #00f0ff',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                // Asegura que el header sea flex, pero su contenido (el div clicable) define el layout
                flexDirection: 'column', 
            }}
        >
            {/* CONTENEDOR CLICABLE: Define el layout de Perfil */}
            <div
                onClick={() => navigate('/')}
                style={{ 
                    cursor: 'pointer',
                    display: 'flex', 
                    
                    // ⭐ Layout para desktop (row) vs. móvil (column)
                    flexDirection: IS_DESKTOP ? 'row' : 'column',
                    alignItems: IS_DESKTOP ? 'center' : 'center', // Alinea verticalmente en desktop
                    gap: IS_DESKTOP ? '2rem' : '0', // Espacio solo en desktop
                    maxWidth: '1000px', // Limita el ancho interno para que no se estire demasiado
                    width: '100%',
                    padding: '0 1rem'
                }}
            >
                {/* 1. IMAGEN DE PERFIL (IZQUIERDA EN DESKTOP) */}
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid #ff4081',
                    marginBottom: IS_DESKTOP ? '0' : '1rem', // Quita margen inferior en desktop
                    boxShadow: '0 0 20px rgba(255, 64, 129, 0.7)',
                    flexShrink: 0
                }}>
                    <img 
                        src={profileData.imageUrl} 
                        alt="Perfil de Usuario" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                
                {/* 2. TEXTO DEL PERFIL (DERECHA EN DESKTOP) */}
                <div style={{
                    // El texto se alinea a la izquierda en desktop
                    textAlign: IS_DESKTOP ? 'left' : 'center',
                    flexGrow: 1, // Permite que el texto ocupe el espacio
                }}>
                    <h1 style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        color: '#00f0ff',
                        fontSize: IS_DESKTOP ? '3rem' : '2.5rem', // Ajuste de tamaño
                        textShadow: '0 0 10px rgba(0, 240, 255, 0.6)',
                        marginBottom: '0.5rem'
                    }}>
                        {profileData.name}
                    </h1>
                    
                    {/* ⭐ CAMPO DEL TELÉFONO AGREGADO ⭐ */}
                    <p style={{
                        color: '#b0e0e6',
                        fontSize: '1rem',
                        marginBottom: '0.75rem',
                        fontWeight: 'bold',
                    }}>
                        Teléfono: {profileData.phone}
                    </p>
                    {/* ⭐ FIN DEL CAMPO DEL TELÉFONO ⭐ */}

                    <h2 style={{ 
                        fontFamily: 'Roboto Mono, monospace',
                        color: '#ff4081',
                        fontSize: IS_DESKTOP ? '1.5rem' : '1.2rem',
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
            </div>
        </header>
    );
}