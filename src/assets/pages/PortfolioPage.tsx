import React from 'react';
import { ProjectCard } from '../modules/ProjectsCards'; // ¡IMPORTACIÓN CORREGIDA!

// --- NUEVA IMPORTACIÓN ---
// Importamos la imagen del certificado para usarla en la tarjeta
import ImgCertificado1 from '../img/Certificado 1.jpeg'; 

// --- LISTA DE PROYECTOS ACTUALIZADA ---
// Sincronizada con los datos de ProjectDetail.jsx
const projectList = [
    {
        id: 'ia-analyzer', // Mantenemos el ID para que la ruta funcione
        title: 'Certificación Profesional: Google Data Analytics',
        shortDescription: 'Certificación en el ciclo de vida completo del análisis de datos usando SQL, R y Tableau.',
        image: ImgCertificado1, // Usamos la imagen importada
        tags: ['SQL', 'R', 'Tableau', 'Google']
    },
    {
        id: 'cloud-infra',
        title: 'Infraestructura Serverless',
        shortDescription: 'Diseño de arquitectura Serverless (Lambda, DynamoDB, SQS) para un cliente Fintech.',
        image: 'https://placehold.co/600x400/1a1a3a/9c2da6?text=SERVERLESS+ARCHITECTURE',
        tags: ['AWS Lambda', 'DynamoDB', 'Serverless', 'TypeScript']
    },
    {
        id: 'e-commerce-v3',
        title: 'Plataforma E-commerce Escalable',
        shortDescription: 'Reingeniería de monolito a microservicios (NestJS, RabbitMQ) para 10k transacciones/segundo.',
        image: 'https://placehold.co/600x400/1a1a3a/00f0ff?text=E-COMMERCE+MICROSERVICES',
        tags: ['Microservicios', 'NestJS', 'RabbitMQ', 'Docker']
    }
    // Se eliminó el proyecto 'data-pipeline' para que coincida con ProjectDetail
];

export function PortfolioPage() {
    
    const gridStyle: React.CSSProperties = {
        display: 'grid',
        // Asegura que sea responsive, columnas mínimas de 300px
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        marginTop: '2rem',
        padding: '1rem'
    };

    return (
        <div>
            <h2 style={{ 
                fontFamily: 'Poppins, sans-serif', // <-- FUENTE ACTUALIZADA
                fontWeight: 800, // <-- Peso añadido
                color: '#9c2da6',
                fontSize: '2.5rem', // <-- Tamaño ajustado
                textAlign: 'center',
                textShadow: '0 0 10px rgba(156, 45, 166, 0.5)', // <-- Sombra corregida
                marginBottom: '2rem' // <-- Más espacio
            }}>
                [ Proyectos Destacados ]
            </h2>

            <div style={gridStyle}>
                {/* Mapea la lista de proyectos para renderizar las tarjetas */}
                {projectList.map(project => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        shortDescription={project.shortDescription}
                        image={project.image}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
}