// src/assets/pages/ProjectDetail4.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 

// --- 1. IMPORTACIONES DE IMÁGENES (3 en total) ---
// ⭐ ¡Ajusta estas 3 rutas a tus imágenes reales!

// Imágenes para la Descripción 1 (Causa Raíz)
import ImgCausaRaiz1 from '../img/PPP1.jpg'; 
import ImgCausaRaiz2 from '../img/PPP2.png'; 

// Imagen para la Descripción 2 (Flujo de Personal)
import ImgFlujoPersonal1 from '../img/PPP3.png'; 


// --- DATOS DEL PROYECTO (Hardcodeados para este layout) ---
const projectData = {
    title: 'Análisis de Causa Raíz y Flujo de Personal',
    
    // Sección 1
    desc1_title: 'Análisis de Causa Raíz por Unidad de Negocio',
    desc1_text: 'Este es un tablero de análisis de causa raíz que profundiza en las unidades de negocio con mayor volumen de interacciones. Detalla y compara los motivos específicos de solicitudes y reclamos para cada área (SD, FFCC, etc.). Adicionalmente, pone un foco especial en los "Ajustes" de liquidación, analizando su justificación (si corresponden o no), los motivos de fondo que los originan y cuáles son las unidades de negocio que los provocan con más frecuencia.',
    desc1_images: [ImgCausaRaiz1, ImgCausaRaiz2], // 2 imágenes
    
    // Sección 2
    desc2_title: 'Análisis de Flujo de Personal (Q1)',
    desc2_text: 'Este es un tablero de análisis de flujo de personal (entradas y salidas) enfocado en el primer trimestre. Ofrece una visión estratégica al desglosar el origen de los nuevos ingresos por unidad de negocio y área operativa. Al mismo tiempo, realiza un diagnóstico profundo de los egresos, utilizando un gráfico de Pareto para identificar las causas vitales (como vencimientos de contrato y honorarios bajos) que provocan la gran mayoría de las bajas, complementado con un desglose detallado de otros motivos específicos.',
    desc2_images: [ImgFlujoPersonal1], // 1 imagen

    // Stack
    stack: 'Tecnologías Clave: Power BI Desktop, DAX, Power Query, Modelado de Datos, Análisis de Pareto, KPIs de Operaciones.'
};


// --- Componente de Carrusel Reutilizable (simplificado) ---
// Para manejar los dos carruseles de forma independiente
interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ACCENT_COLOR = '#9c2da6';

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };
    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    // --- Estilos del Carrusel (locales) ---
    const imageContainerStyle: React.CSSProperties = {
        marginBottom: '2rem',
        borderRadius: '8px',
        overflow: 'hidden',
        border: `3px solid ${ACCENT_COLOR}`, 
        position: 'relative',
        minHeight: '400px', 
        maxHeight: '70vh', 
        boxShadow: `0 0 15px ${ACCENT_COLOR}`,
        backgroundColor: '#0d0d1a',
    };
    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        transition: 'opacity 1s ease-in-out', 
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'contain', 
        right: 0,
        margin: 'auto',
    };
    const imageLinkStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 15, 
    };
    const navButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(156, 45, 166, 0.7)', 
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 20, 
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
        userSelect: 'none',
    };

    return (
        <div style={imageContainerStyle}>
            {images.length > 1 && (
                <button style={{ ...navButtonStyle, left: '10px' }} onClick={goToPrevious} aria-label="Anterior">&lt;</button>
            )}
            {images.map((src, index) => (
                <a 
                    key={index} href={src} target="_blank" rel="noopener noreferrer"
                    style={{
                        ...imageLinkStyle,
                        opacity: index === currentIndex ? 1 : 0, 
                        zIndex: index === currentIndex ? 10 : 5,
                        cursor: 'zoom-in'
                    }}
                >
                    <img src={src} alt={`Screenshot ${index + 1}`} style={imageStyle} />
                </a>
            ))}
            {images.length > 1 && (
                <button style={{ ...navButtonStyle, right: '10px' }} onClick={goToNext} aria-label="Siguiente">&gt;</button>
            )}
        </div>
    );
};


// --- COMPONENTE PRINCIPAL ProjectDetail4 ---
export function ProjectDetail4() {
    const navigate = useNavigate();
    
    const ACCENT_COLOR = '#9c2da6';
    const SECONDARY_COLOR = '#00f0ff';
    const BACKGROUND_URL = ImgFondo;

    // --- Estilos ---
    const detailStyle: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif', 
        backgroundColor: 'rgba(10, 10, 25, 1.0)', 
        border: '1px solid #00f0ff',
        borderRadius: '12px',
        padding: '2rem 3rem',
        boxShadow: '0 0 25px rgba(0, 240, 255, 0.5)',
        maxWidth: '1000px',
        margin: '2rem auto',
        backgroundImage: `url('${BACKGROUND_URL}')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay', 
    };

    const h1Style: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 800,
        color: SECONDARY_COLOR,
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        borderBottom: `2px solid ${ACCENT_COLOR}`, 
        paddingBottom: '0.5rem'
    };

    const h2Style: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif', 
        fontWeight: 600,
        color: ACCENT_COLOR, 
        fontSize: '1.5rem', // Más grande para subtítulo
        marginTop: '3rem', 
        marginBottom: '1rem'
    };
    
    const pStyle: React.CSSProperties = { 
        color: '#b0e0e6', 
        fontSize: '1rem', 
        lineHeight: '1.6', 
        marginBottom: '1.5rem' 
    };

    return (
        <div style={detailStyle}>
            
            {/* --- TÍTULO PRINCIPAL --- */}
            <h1 style={h1Style}>{projectData.title}</h1>

            {/* --- SECCIÓN 1: CAUSA RAÍZ --- */}
            <h2 style={h2Style}>[ {projectData.desc1_title} ]</h2>
            <p style={pStyle}>{projectData.desc1_text}</p>
            <ImageCarousel images={projectData.desc1_images} />

            {/* --- SECCIÓN 2: FLUJO DE PERSONAL --- */}
            <h2 style={h2Style}>[ {projectData.desc2_title} ]</h2>
            <p style={pStyle}>{projectData.desc2_text}</p>
            <ImageCarousel images={projectData.desc2_images} />

            {/* --- TECNOLOGÍAS --- */}
            <h2 style={{ ...h2Style, fontSize: '1.2rem', marginTop: '3rem', marginBottom: '0.5rem' }}>
                [ TECNOLOGÍAS CLAVE ]
            </h2>
            <p style={{ ...pStyle, fontSize: '0.9rem', marginBottom: '3rem' }}>
                {projectData.stack}
            </p>
            
            {/* --- BOTÓN DE VOLVER --- */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '2rem' }}>
                <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                    &lt; Volver a Proyectos
                </Button>
            </div>
        </div>
    );
}