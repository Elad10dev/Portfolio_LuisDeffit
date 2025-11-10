import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button';

interface ProjectCardProps {
    id: string;
    title: string;
    shortDescription: string;
    image: string; // URL de la imagen (placeholder)
    tags: string[];
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

    return (
        <div 
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img 
                src={image} 
                alt={`Imagen del proyecto ${title}`} 
                style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderBottom: '2px solid #ff4081', 
                    filter: 'grayscale(10%) brightness(120%)' 
                }}
            />
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ 
                    fontFamily: 'Orbitron, sans-serif',
                    color: '#ff4081', 
                    fontSize: '1.2rem',
                    marginBottom: '0.75rem'
                }}>
                    // {title}
                </h3>
                <p style={{ color: '#b0e0e6', fontSize: '0.9rem', marginBottom: '1rem', flexGrow: 1 }}>
                    {shortDescription}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{
                            backgroundColor: 'rgba(0, 240, 255, 0.1)',
                            color: '#00f0ff',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            border: '1px solid #00f0ff'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <Button 
                    onClick={() => navigate(`/project/${id}`)}
                    variant="primary"
                >
                    Ver Protocolo &gt;
                </Button>
            </div>
        </div>
    );
}