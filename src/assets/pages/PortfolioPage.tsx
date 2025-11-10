import React from 'react';
import { ProjectCard } from '../modules/ProjectsCards'; // ¡IMPORTACIÓN CORREGIDA!

// Array de datos de proyectos para el cliente
const projectList = [
    {
        id: 'ia-analyzer',
        title: 'Quantum AI Analyzer',
        shortDescription: 'Implementación de un modelo de análisis predictivo basado en redes neuronales, desplegado en un cluster de Kubernetes en AWS.',
        image: 'https://placehold.co/600x400/101020/00f0ff?text=AI+MODEL',
        tags: ['AWS EKS', 'TensorFlow', 'Python', 'Go']
    },
    {
        id: 'cloud-infra',
        title: 'Infraestructura Serverless',
        shortDescription: 'Diseño y despliegue de una arquitectura Serverless completa (Lambda, DynamoDB, API Gateway) para un cliente Fintech.',
        image: 'https://placehold.co/600x400/101020/ff4081?text=SERVERLESS+ARCHITECTURE',
        tags: ['AWS Lambda', 'DynamoDB', 'Serverless Framework', 'TypeScript']
    },
    {
        id: 'e-commerce-v3',
        title: 'Plataforma E-commerce Escalable',
        shortDescription: 'Reingeniería de una plataforma de comercio electrónico para soportar 10k transacciones/segundo usando Microservicios y RabbitMQ.',
        image: 'https://placehold.co/600x400/101020/00f0ff?text=E-COMMERCE+MICROSERVICES',
        tags: ['Microservicios', 'RabbitMQ', 'Docker', 'React']
    },
    {
        id: 'data-pipeline',
        title: 'Data Pipeline Automation',
        shortDescription: 'Automatización de ETL/ELT para procesamiento de big data usando Apache Spark y Amazon Redshift, optimizando tiempos de consulta.',
        image: 'https://placehold.co/600x400/101020/ff4081?text=DATA+ENGINEERING',
        tags: ['Spark', 'Redshift', 'ETL', 'Scala']
    }
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
                fontFamily: 'Orbitron, sans-serif',
                color: '#ff4081',
                fontSize: '2rem',
                textAlign: 'center',
                textShadow: '0 0 10px rgba(255, 64, 129, 0.4)',
                marginBottom: '1rem'
            }}>
                [ Proyectos de Alta Disponibilidad ]
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