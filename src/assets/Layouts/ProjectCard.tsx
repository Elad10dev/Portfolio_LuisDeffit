// src/assets/Layouts/ProjectCard.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importante para la navegación

// Definición de Tipos de las Props de la Tarjeta
interface ProjectCardProps {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
    tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, shortDescription, image, tags }) => {
    
    // Estilos base que no cambian
    const cardStyleBase: React.CSSProperties = {
        backgroundColor: '#1a1a3a', // Fondo oscuro
        border: '1px solid #9c2da6', 
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    };
    
    // Función para manejar el hover
    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(156, 45, 166, 0.7)';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
    };


    return (
        // Usamos el componente Link para hacer la tarjeta clickeable y navegable
        <Link to={`/project/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
            {/* El evento Link no soporta onMouseEnter/onMouseLeave directamente, 
               así que lo aplicamos al <div> interno */}
            <div 
                style={cardStyleBase}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img 
                    src={image} 
                    alt={title} 
                    style={{ 
                        width: '100%', 
                        height: '200px', 
                        objectFit: 'contain', // Mostrar imagen completa
                        borderBottom: '1px solid #9c2da6'
                    }} 
                />
                <div style={{ padding: '15px', flexGrow: 1 }}>
                    <h3 style={{ color: '#00f0ff', marginBottom: '10px' }}>{title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '1rem' }}>{shortDescription}</p>
                    <div style={{ marginTop: 'auto' }}>
                        {tags.map(tag => (
                            <span key={tag} style={{ 
                                display: 'inline-block', 
                                backgroundColor: '#333366', 
                                color: '#fff',
                                padding: '3px 8px', 
                                borderRadius: '5px', 
                                marginRight: '5px',
                                fontSize: '0.75rem'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};