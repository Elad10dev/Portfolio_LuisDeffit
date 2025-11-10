import React from 'react';

interface TimelineEntryProps {
    year: number;
    title: string;
    description: string;
    isRight: boolean; // Para alternar la posición en el timeline
}

export function TimelineEntry({ year, title, description, isRight }: TimelineEntryProps) {
    
    // Estilos basados en la estética científica (Cian, Rosa, Robot Mono, Orbitron)
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '10px 0',
        display: 'flex',
        flexDirection: isRight ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        textAlign: isRight ? 'right' : 'left',
    };

    const contentBoxStyle: React.CSSProperties = {
        width: '45%',
        padding: '1.5rem',
        backgroundColor: 'rgba(10, 10, 25, 0.95)',
        border: '1px solid #00f0ff',
        borderRadius: '8px',
        boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
        position: 'relative',
        marginLeft: isRight ? 'auto' : '0',
        marginRight: isRight ? '0' : 'auto',
    };

    const yearStyle: React.CSSProperties = {
        fontFamily: 'Orbitron, sans-serif',
        color: '#ff4081', // Rosa neón para el año
        fontSize: '1.8rem',
        marginBottom: '0.5rem',
        textShadow: '0 0 5px rgba(255, 64, 129, 0.6)'
    };
    
    const titleStyle: React.CSSProperties = {
        fontFamily: 'Orbitron, sans-serif',
        color: '#00f0ff', // Cian brillante para el título
        fontSize: '1.4rem',
        marginBottom: '0.75rem',
    };

    const descriptionStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        color: '#b0e0e6',
        fontSize: '0.9rem',
        lineHeight: '1.6',
    };
    
    const spacerStyle: React.CSSProperties = {
        width: '10%', // Espacio central para la línea
        minHeight: '1px' // Asegura que no se colapse
    };

    return (
        <div style={containerStyle}>
            {/* Contenedor del contenido */}
            <div style={contentBoxStyle}>
                <h3 style={yearStyle}>[ {year} ]</h3>
                <h4 style={titleStyle}>{title}</h4>
                <p style={descriptionStyle}>{description}</p>
            </div>
            
            {/* Espacio central con la línea de tiempo (solo visible en pantallas grandes) */}
            <div style={spacerStyle}></div>

             {/* Punto de conexión (se manejará visualmente en la página principal) */}
        </div>
    );
}