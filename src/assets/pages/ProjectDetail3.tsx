// src/assets/pages/ProjectDetail3.tsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 

// --- 1. IMPORTACIONES DE IMÁGENES (FASE II) ---
// ⭐ Ajusta estas 4 rutas a tus imágenes reales
import ImgFase2_1 from '../img/tablero2_1.png'; 
import ImgFase2_2 from '../img/tablero2_2.png'; 
import ImgFase2_3 from '../img/tablero2_3.png'; 
import ImgFase2_4 from '../img/tablero2_0.png'; 

// --- INTERFAZ DEL PROYECTO ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; 
    projectType?: 'certificate' | 'standard' | 'bi-dashboard';
}

// --- DATOS DE PROYECTOS - SOLO PARA FASE II ---
const projectDetails: { [key: string]: Project } = {
    // ⭐ DATOS DEL NUEVO PROYECTO (FASE II)
    'powerbiii': { 
        title: 'Dashboard de Gestión de Prestadores (Fase II: Optimización)',
        
        // ⭐ --- DESCRIPCIÓN ACTUALIZADA --- ⭐
        fullDescription: 'Este es un archivo integral de Power BI para la gestión de punta a punta del personal prestador, cubriendo el ciclo de vida completo desde la captación hasta la baja. Se compone de múltiples solapas que funcionan de la siguiente manera: primero, un dashboard de "Sourcing y Funnel" que mide la parte alta del embudo, analizando el volumen de "Contactos", la eficiencia de las "Fuentes" (WhatsApp, Computrabajo, etc.) y la tasa de conversión a "Ingresos" (contrataciones), mostrando también el estado del pipeline (Rechazo, En Contacto, etc.). Segundo, una solapa de "Gestión Operativa"  que detalla el estado actual de los "Prestadores activos" y los "Servicios cerrados" para un área o proyecto específico, identificando sus roles (Cuidadores, Enfermeros, etc.). Finalmente, el informe incluye un tablero de "Análisis de Atrición"  que diagnostica la salida del personal, identificando los "Motivos de baja" (Inactividad, QR, etc.) y las unidades de negocio o tipos de prestación con mayores índices de "inhabilitación"',
        
        stack: 'Tecnologías Clave: Power BI Desktop, DAX (Funciones Avanzadas), Power Query (Optimización), KPIs de Retención, Análisis de Causa-Raíz.',
        
        images: [
            ImgFase2_1, ImgFase2_2, ImgFase2_3, ImgFase2_4
        ], 
        projectType: 'bi-dashboard',
    },
};

// ⭐ Renombrado a ProjectDetail3
export function ProjectDetail3() {
    // Obtener el ID de la URL (será 'powerbiii')
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    
    // Usamos el ID de la URL para obtener los datos del proyecto
    const project = id ? projectDetails[id] : undefined;

    // --- (Estilos y Lógica del Carrusel - Idénticos a ProjectDetail2) ---
    
    const ACCENT_COLOR = '#9c2da6';
    const SECONDARY_COLOR = '#00f0ff';
    const BACKGROUND_URL = ImgFondo;

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
    
    // --- ESTILOS VISUALIZACIÓN DE IMAGEN ---
    // (Copiados de ProjectDetail2 - Sin cambios)
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
                    <a 
                        key={index}
                        href={src}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            ...imageLinkStyle,
                            opacity: index === currentImageIndex ? 1 : 0, 
                            zIndex: index === currentImageIndex ? 10 : 5,
                            cursor: 'zoom-in'
                        }}
                    >
                        <img
                            src={src}
                            alt={`Dashboard Screenshot ${index + 1}`}
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