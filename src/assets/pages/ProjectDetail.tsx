import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; // <-- ¡IMPORTACIÓN CORREGIDA!

// Datos de imágenes de placeholder para el carrusel
const carouselImages = [
    'https://placehold.co/800x450/1a1a3a/00f0ff?text=Dashboard+Analysis',
    'https://placehold.co/800x450/1a1a3a/ff4081?text=Cloud+Architecture',
    'https://placehold.co/800x450/1a1a3a/00f0ff?text=Code+Snippet',
    'https://placehold.co/800x450/1a1a3a/ff4081?text=API+Flow',
    'https://placehold.co/800x450/1a1a3a/00f0ff?text=Deployment+Pipeline'
];

// Nota: En un proyecto real, estos datos vendrían de una API o Firestore.
const dummyProjectDetails: { [key: string]: { title: string; fullDescription: string; stack: string; } } = {
    'ia-analyzer': {
        title: 'Quantum AI Analyzer',
        fullDescription: 'Este proyecto se centró en la creación de un motor de análisis predictivo utilizando Python y TensorFlow. La solución fue contenerizada con Docker y desplegada en AWS EKS para garantizar una alta disponibilidad y escalabilidad elástica. El modelo alcanza una precisión del 98.5% en el pronóstico de fallas de hardware en entornos de producción masivos.',
        stack: 'Tecnologías Clave: Python, TensorFlow, AWS EKS, Docker, Prometheus.'
    },
    'cloud-infra': {
        title: 'Infraestructura Serverless',
        fullDescription: 'Diseñé una arquitectura Serverless completa para manejar flujos de pago, eliminando los costos fijos de servidores. Utilizamos AWS Lambda para la lógica, DynamoDB para la persistencia de datos de baja latencia y SQS para garantizar la entrega de mensajes. Esto resultó en una reducción de costos operativos del 60%.',
        stack: 'Tecnologías Clave: AWS Lambda, API Gateway, DynamoDB, SQS, TypeScript.'
    },
    'e-commerce-v3': {
        title: 'Plataforma E-commerce Escalable',
        fullDescription: 'Lideré la reingeniería de un monolito a una arquitectura de microservicios con un enfoque en la resiliencia. Implementamos RabbitMQ para la comunicación asíncrona entre servicios, lo que permitió procesar picos de tráfico de hasta 10,000 transacciones por segundo sin degradación de rendimiento. ',
        stack: 'Tecnologías Clave: Microservicios, NestJS, RabbitMQ, Docker, React, PostgreSQL.'
    }
};

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado del carrusel
    
    const project = id ? dummyProjectDetails[id] : undefined;

    // Lógica del carrusel automático
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % carouselImages.length // Bucle: al llegar al final, vuelve a 0
            );
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    if (!project) {
        return (
            <div style={{ padding: '4rem', textAlign: 'center', color: '#ff4081' }}>
                <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '3rem' }}>[ ERROR ] Proyecto no encontrado</h1>
                <Button onClick={() => navigate('/projects')} variant="primary" style={{ marginTop: '2rem' }}>
                    Volver a Proyectos
                </Button>
            </div>
        );
    }

    // Estilo para el detalle
    const detailStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        backgroundColor: 'rgba(10, 10, 25, 0.95)',
        border: '1px solid #00f0ff',
        borderRadius: '12px',
        padding: '2rem 3rem',
        boxShadow: '0 0 25px rgba(0, 240, 255, 0.5)',
        maxWidth: '1000px',
        margin: '2rem auto'
    };
    
    const imageContainerStyle: React.CSSProperties = {
        marginBottom: '2rem',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '3px solid #ff4081',
        position: 'relative',
        height: '450px', // Altura fija para el carrusel
        boxShadow: '0 0 20px rgba(255, 64, 129, 0.6)'
    };
    
    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0,
        transition: 'opacity 1s ease-in-out', // Transición de suavizado
        position: 'absolute',
        top: 0,
        left: 0
    };

    return (
        <div style={detailStyle}>
            {/* --- CARRUSEL DE IMÁGENES --- */}
            <div style={imageContainerStyle}>
                {carouselImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Screenshot ${index + 1}`}
                        style={{
                            ...imageStyle,
                            opacity: index === currentImageIndex ? 1 : 0, // Muestra solo la imagen actual
                            zIndex: index === currentImageIndex ? 10 : 5 // Asegura el orden de superposición
                        }}
                    />
                ))}
            </div>

            <h1 style={{ 
                fontFamily: 'Orbitron, sans-serif',
                color: '#00f0ff',
                fontSize: '2.5rem',
                marginBottom: '1rem',
                borderBottom: '2px solid #ff4081',
                paddingBottom: '0.5rem'
            }}>
                // {project.title}
            </h1>
            
            <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {project.fullDescription}
            </p>

            <h2 style={{ 
                fontFamily: 'Roboto Mono, monospace',
                color: '#ff4081',
                fontSize: '1.2rem',
                marginTop: '1.5rem',
                marginBottom: '0.5rem'
            }}>
                [ STACK UTILIZADO ]
            </h2>
            <p style={{ color: '#b0e0e6', fontSize: '0.9rem', marginBottom: '3rem' }}>
                {project.stack}
            </p>
            
            <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                &lt; Volver a Proyectos {/* Ruta corregida a /projects */}
            </Button>
        </div>
    );
}