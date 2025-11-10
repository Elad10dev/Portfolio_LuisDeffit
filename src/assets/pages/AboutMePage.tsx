import React from 'react';
import { TimelineEntry } from '../modules/TimeLines';

// Datos de ejemplo para la trayectoria del cliente (obras sociales y aspectos de perfil)
const timelineData = [
    {
        year: 2024,
        title: 'Liderazgo en "AI for Good" Initiative',
        description: 'Dirigí un equipo de desarrollo para crear modelos de predicción de desastres naturales usando datos satelitales, impactando directamente en la capacidad de respuesta de ONGs locales. Foco en AWS SageMaker y modelos de ML descentralizados.',
    },
    {
        year: 2022,
        title: 'Certificación Profesional en Arquitectura Cloud AWS',
        description: 'Obtención de la certificación AWS Solutions Architect - Professional. Este logro consolidó mi base de conocimientos en diseño de sistemas de alta disponibilidad y tolerancia a fallos.',
    },
    {
        year: 2020,
        title: 'Despliegue de Sistema de Gestión para Comedores Comunitarios',
        description: 'Desarrollé y desplegué una plataforma web modular para la gestión de inventario y voluntarios en 15 comedores comunitarios, utilizando React y una base de datos PostgreSQL en RDS.',
    },
    {
        year: 2018,
        title: 'Investigación Académica sobre Ciberseguridad Cuántica',
        description: 'Publicación de un artículo en la revista "Journal of Advanced Computing" explorando las vulnerabilidades y soluciones post-cuánticas en protocolos de cifrado asimétrico. Mi enfoque inicial en la investigación.',
    }
];

export function AboutMePage() {
    
    // Estilo para la línea central (solo una guía visual)
    const timelineLineStyle: React.CSSProperties = {
        position: 'absolute',
        left: '50%',
        width: '4px',
        backgroundColor: 'rgba(0, 240, 255, 0.2)', // Línea cian transparente
        top: 0,
        bottom: 0,
        transform: 'translateX(-50%)',
        zIndex: 0,
        borderRadius: '2px'
    };

    return (
        <div style={{ position: 'relative', padding: '1rem 0' }}>
            <h2 style={{ 
                fontFamily: 'Orbitron, sans-serif',
                color: '#ff4081',
                fontSize: '2rem',
                textAlign: 'center',
                textShadow: '0 0 10px rgba(255, 64, 129, 0.4)',
                marginBottom: '3rem'
            }}>
                [ Trayectoria y Protocolos de Avance ]
            </h2>

            {/* Línea de tiempo vertical central */}
            <div style={timelineLineStyle} />

            {/* Contenedor de las entradas */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {timelineData.map((entry, index) => (
                    <TimelineEntry
                        key={entry.year}
                        year={entry.year}
                        title={entry.title}
                        description={entry.description}
                        isRight={index % 2 !== 0} // Alterna la posición (izquierda/derecha)
                    />
                ))}
            </div>
        </div>
    );
}