// src/assets/pages/ProjectDetail5.tsx

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 

// --- 1. IMPORTACIONES DE IMÁGENES (FASE II) ---
// ⭐ ¡Ajusta estas 4 rutas a tus GIFs reales!
import GifSharePoint1 from '../img/image48.gif'; 
import GifSharePoint2 from '../img/image51.gif'; 
import GifSharePoint3 from '../img/image52.gif'; 
import GifSharePoint4 from '../img/image53.gif'; 

// --- INTERFAZ DEL PROYECTO ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; // Serán GIFs, pero el tipo es el mismo (string)
    projectType?: 'certificate' | 'standard' | 'bi-dashboard' | 'sharepoint';
}

// --- DATOS DE PROYECTOS - SOLO PARA SHAREPOINT ---
const projectDetails: { [key: string]: Project } = {
    'sharepoint': { 
        title: 'Portal Interno de Desarrollo de Prestadores (SharePoint)',
        
        // ⭐ --- DESCRIPCIÓN ACTUALIZADA --- ⭐
        fullDescription: 'Este es un portal interno de SharePoint diseñado para el "Desarrollo de Prestadores" (proveedores o contratistas), que actúa como un hub centralizado para la gestión operativa. El sitio consolida la información clave del área, organizándola en secciones principales como "Servicios" (donde se segmentan las operaciones), "Procesos y documentación" (que sirve como repositorio de guías y flujogramas de ingreso) y "Pricing" (que define la metodología de gestión de precios y liquidaciones). Además, el portal integra accesos rápidos a bases de datos compartidas (como listas de personal) y herramientas de gestión externas, como Salesforce, para facilitar las tareas diarias del equipo.',
        
        stack: 'Tecnologías Clave: SharePoint Online, Listas de SharePoint, Gestión Documental, Integración Salesforce, Power Automate (Flujos).',
        
        images: [
            GifSharePoint1, GifSharePoint2, GifSharePoint3, GifSharePoint4
        ], 
        projectType: 'sharepoint',
    },
};

// ⭐ Renombrado a ProjectDetail5
export function ProjectDetail5() {
    // Obtener el ID de la URL (será 'sharepoint')
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    
    const project = id ? projectDetails[id] : undefined;

    // --- (Estilos y Lógica del Carrusel) ---
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
            
            {/* --- CARRUSEL DE IMÁGENES/GIFs --- */}
            <div style={imageContainerStyle}>
                {project.images.length > 1 && (
                    <button style={{ ...navButtonStyle, left: '10px' }} onClick={goToPrevious} aria-label="Anterior">&lt;</button>
                )}

                {project.images.map((src, index) => (
                    <a 
                        key={index} href={src} target="_blank" rel="noopener noreferrer"
                        style={{
                            ...imageLinkStyle,
                            opacity: index === currentImageIndex ? 1 : 0, 
                            zIndex: index === currentImageIndex ? 10 : 5,
                            cursor: 'zoom-in'
                        }}
                    >
                        <img src={src} alt={`Portal Screenshot (GIF) ${index + 1}`} style={imageStyle} />
                    </a>
                ))}
                
                {project.images.length > 1 && (
                    <button style={{ ...navButtonStyle, right: '10px' }} onClick={goToNext} aria-label="Siguiente">&gt;</button>
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
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '2rem' }}>
                <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                    &lt; Volver a Proyectos
                </Button>
            </div>
        </div>
    );
}