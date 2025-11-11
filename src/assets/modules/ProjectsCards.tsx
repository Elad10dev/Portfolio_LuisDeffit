import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button';

interface ProjectCardProps {
    id: string;
    title: string;
    shortDescription: string;
    image: string; // URL de la imagen (placeholder)
    tags: string[];
    // Usaremos el ID para la navegación principal
    demoUrl?: string; 
    repoUrl?: string;
}

export function ProjectCard({ id, title, shortDescription, image, tags }: ProjectCardProps) {
    const navigate = useNavigate();

    const cardStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        backgroundColor: 'rgba(10, 10, 25, 0.9)',
        border: '1px solid #00f0ff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 240, 255, 0.5)';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.3)';
    };

    // Función de navegación unificada
    const handleNavigate = () => {
        // Redirige a la página detallada del proyecto usando el ID
        navigate(`/project/${id}`);
    };
    
    // Función de navegación para abrir en nueva pestaña (se mantiene, pero no se usa en el botón principal)


    return (
        <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* 1. IMAGEN DE ENCABEZADO (Banner Superior) */}
            <img 
                src={image} 
                alt={`Imagen del proyecto ${title}`} 
                style={{ 
                    width: '100%', 
                    height: '250px', // <-- Aumentamos la altura del banner
                    objectFit: 'cover', 
                    borderBottom: '2px solid #9c2da6', 
                    filter: 'grayscale(10%) brightness(120%)' 
                }}
            />

            <div style={{ padding: '1rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                
                {/* TÍTULO */}
                <h3 style={{ 
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#00f0ff',
                    fontSize: '1.4rem', // Ligeramente más pequeño
                    marginBottom: '0.5rem',
                    textShadow: '0 0 5px rgba(0, 240, 255, 0.5)'
                }}>
                    // {title}
                </h3>

                {/* DESCRIPCIÓN COMPACTA */}
                <p style={{ color: '#b0e0e6', fontSize: '0.8rem', flexGrow: 1, marginBottom: '0.5rem' }}>
                    {shortDescription}
                </p>

                {/* TAGS (Estilo de íconos/compacto. Aquí irían los iconos de React-Icons) */}
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem', 
                    marginBottom: '1rem',
                    paddingTop: '0.5rem',
                    borderTop: '#9c2da6'
                }}>
                    {/* Actualmente usando texto. Si instalas react-icons, puedes reemplazarlos por <FaReact /> */}
                    {tags.map(tag => (
                        <span key={tag} style={{
                            backgroundColor: 'transparent', 
                            color: '#00f0ff', 
                            padding: '0 0.2rem', // Compacto
                            borderRadius: '2px',
                            fontSize: '0.7rem',
                            border: 'none' // Sin borde
                        }}>
                            [{tag}]
                        </span>
                    ))}
                </div>
                
                {/* BOTÓN UNIFICADO */}
                <Button
                    onClick={handleNavigate} // <-- USAMOS LA FUNCIÓN UNIFICADA
                    variant="primary"
                    style={{ width: '100%', padding: '0.75rem 0' }} // Botón ancho y grande
                >
                    Acceder al Protocolo &gt;
                </Button>

            </div>
        </div>
    );
}