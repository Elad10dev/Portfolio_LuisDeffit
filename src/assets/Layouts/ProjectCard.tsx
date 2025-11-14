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
    
    const cardStyle: React.CSSProperties = {
        // Estilos básicos de la tarjeta
        border: '1px solid #333',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease-in-out',
        // Efecto hover simple
        
    };

    return (
        // Usamos el componente Link para hacer la tarjeta clickeable y navegable
        <Link to={`/proyectos/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={cardStyle}>
                <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '15px' }}>
                    <h3 style={{ color: '#9c2da6', marginBottom: '10px' }}>{title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{shortDescription}</p>
                    <div style={{ marginTop: '10px' }}>
                        {tags.map(tag => (
                            <span key={tag} style={{ 
                                display: 'inline-block', 
                                backgroundColor: '#1a1a3a', 
                                color: '#00f0ff',
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