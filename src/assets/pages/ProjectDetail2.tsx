import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Asumiendo que Button está disponible en la ruta
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 

// --- 1. IMPORTACIONES DE IMÁGENES ESPECÍFICAS PARA ESTE PROYECTO ---
// Asumiendo 5 imágenes para el dashboard
import ImgPowerBI1 from '../img/tablero.png'; 
import ImgPowerBI2 from '../img/tablero2.png'; 
import ImgPowerBI3 from '../img/tablero3.png'; 
import ImgPowerBI4 from '../img/tablero4.png'; 
import ImgPowerBI5 from '../img/tablero5.png'; 


// --- INTERFAZ DEL PROYECTO (Simplificada para el Detail) ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; 
    projectType?: 'certificate' | 'standard' | 'bi-dashboard'; // Nuevo tipo
}

// --- DATOS DE PROYECTOS - SOLO EL NECESARIO PARA ESTE COMPONENTE ---
const projectDetails: { [key: string]: Project } = {
    'powerbii': { 
        title: 'Dashboard Integral de Gestión de Prestadores (Power BI)',
        fullDescription: 'Este es un sistema integral de Business Intelligence enfocado en la gestión completa del ciclo de vida del prestador. El archivo está estructurado en múltiples solapas que conectan todo el embudo (funnel) de personal, desde la captación hasta la desvinculación. Inicia con un dashboard de **"Contactos"** que mide la efectividad de la captación, analizando el volumen de prospectos, sus orígenes (fuentes) y los motivos de rechazo iniciales. A continuación, las solapas de **"Ingresos"** monitorizan las altas efectivas, mostrando la evolución mensual, los perfiles profesionales que se incorporan (médicos, enfermeros, etc.) y su asignación a unidades de negocio o clientes específicos. De forma complementaria, el informe ofrece vistas de análisis profundo (deep-dive) para unidades críticas como "UCI" o para estados específicos como "Declinados", permitiendo un análisis granular de las tasas de conversión y los motivos de rechazo por operador o zona. Finalmente, el ciclo se cierra con la solapa de **"Bajas"**, que provee un diagnóstico clave para la retención al detallar el volumen de egresos y sus causas principales.',
        stack: 'Tecnologías Clave: Power BI Desktop, DAX, Power Query (M), Data Modeling, SQL Server, KPIs.',
        images: [
            ImgPowerBI1, ImgPowerBI2, ImgPowerBI3, ImgPowerBI4, ImgPowerBI5
        ], 
        projectType: 'bi-dashboard',
    },
};

export function ProjectDetail2() {
    // Obtener el ID de la URL
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    
    // Usamos el ID de la URL para obtener los datos del proyecto
    const project = id ? projectDetails[id] : undefined;

    const ACCENT_COLOR = '#9c2da6'; // Color morado de acento
    const SECONDARY_COLOR = '#00f0ff'; // Color cian de acento
    const BACKGROUND_URL = ImgFondo;

    // --- LÓGICA DE NAVEGACIÓN MANUAL (Flechas) ---
    const goToPrevious = () => {
        if (!project) return;
        setCurrentImageIndex(prevIndex => 
            (prevIndex - 1 + project.images.length) % project.images.length
        );
    };

    const goToNext = () => {
        if (!project) return;
        setCurrentImageIndex(prevIndex => 
            (prevIndex + 1) % project.images.length
        );
    };

    // --- MANEJO DE PROYECTO NO ENCONTRADO ---
    if (!project) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center', color: ACCENT_COLOR }}>
                <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '3rem' }}>[ ERROR ] Proyecto no encontrado</h1>
                <Button onClick={() => navigate('/projects')} variant="primary" style={{ marginTop: '2rem' }}>
                    Volver a Proyectos
                </Button>
            </div>
        );
    }
    
    // --- ESTILOS VISUALIZACIÓN DE IMAGEN (COPIADOS DE PROJECTDETAIL1) ---
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
    
    // Nuevo estilo para el enlace de la imagen, asegurando que cubra el área del contenedor
    const imageLinkStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 15, // Asegura que el enlace sea clickeable sobre la imagen
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

    // --- RENDERIZADO DEL COMPONENTE ---
    return (
        <div style={detailStyle}>
            
            {/* --- CARRUSEL DE IMÁGENES y NAVEGACIÓN --- */}
            <div style={imageContainerStyle}>
                
                {/* Flecha Izquierda (Anterior) */}
                {project.images.length > 1 && (
                    <button 
                        style={{ ...navButtonStyle, left: '10px' }} 
                        onClick={goToPrevious}
                        aria-label="Dashboard Anterior"
                    >
                        &lt;
                    </button>
                )}

                {/* Renderiza las imágenes */}
                {project.images.map((src, index) => (
                    // ENVUELVE LA IMAGEN EN UN ENLACE
                    <a 
                        key={index}
                        href={src} // Usa la URL de la imagen como destino
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            ...imageLinkStyle,
                            opacity: index === currentImageIndex ? 1 : 0, 
                            zIndex: index === currentImageIndex ? 10 : 5,
                            cursor: 'zoom-in' // Indica que es clickeable
                        }}
                    >
                        <img
                            src={src}
                            alt={`Dashboard Screenshot ${index + 1}`}
                            // Mantenemos el estilo de imagen para el 'contain' y la transición
                            style={imageStyle} 
                        />
                    </a>
                ))}
                
                {/* Flecha Derecha (Siguiente) */}
                {project.images.length > 1 && (
                    <button 
                        style={{ ...navButtonStyle, right: '10px' }} 
                        onClick={goToNext}
                        aria-label="Dashboard Siguiente"
                    >
                        &gt;
                    </button>
                )}
            </div>
            
            {/* --- TÍTULO PRINCIPAL DEL PROYECTO --- */}
            <h1 style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                color: SECONDARY_COLOR,
                fontSize: '2.5rem',
                marginBottom: '1rem',
                borderBottom: `2px solid ${ACCENT_COLOR}`, 
                paddingBottom: '0.5rem'
            }}>
                {project.title} 
            </h1>

            {/* --- DESCRIPCIÓN PRINCIPAL --- */}
            <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {project.fullDescription}
            </p>
            
            {/* --- BLOQUE DE ACCIÓN Y TECNOLOGÍAS CLAVE --- */}
            <h2 style={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 600,
                color: ACCENT_COLOR, 
                fontSize: '1.2rem',
                marginTop: '2.5rem', 
                marginBottom: '0.5rem'
            }}>
                [ TECNOLOGÍAS CLAVE ]
            </h2>
            <p style={{ color: '#b0e0e6', fontSize: '0.9rem', marginBottom: '3rem' }}>
                {project.stack}
            </p>

            
            {/* --- BOTÓN DE VOLVER --- */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                width: '100%',
                marginTop: '2rem'
            }}>
                <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                    &lt; Volver a Proyectos
                </Button>
            </div>
        </div>
    );
}