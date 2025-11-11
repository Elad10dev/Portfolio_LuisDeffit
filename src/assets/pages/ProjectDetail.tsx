import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 
// --- TUS IMPORTACIONES ---
import ImgCertificado1 from  '../img/Certificado 1.jpeg'
import CVEsp from '../img/1.CV_Luis_Gutierrez_Deffit_ES.pdf';
import CVEng from '../img/1.Data analytics -LuisDeffit .pdf';

// --- ASIGNACIÓN DE TUS IMPORTACIONES ---
const ImgCertificado = ImgCertificado1;
const cvEsp = CVEsp; 
const cvEng = CVEng; 

// --- INTERFAZ DEL PROYECTO ACTUALIZADA ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; // Arreglo de imágenes específico
    projectType?: 'certificate' | 'standard'; // Para identificar el proyecto especial
}

// --- DATOS DE PROYECTOS ACTUALIZADOS ---
const dummyProjectDetails: { [key: string]: Project } = {
    
    // --- La clave ahora es 'ia-analyzer' para que coincida con tu URL ---
    'ia-analyzer': { 
        title: 'Certificación Profesional: Google Data Analytics',
        fullDescription: 'Completé la certificación profesional de Google, adquiriendo habilidades fundamentales en el ciclo de vida del análisis de datos. Esto incluye la preparación, procesamiento, análisis y visualización de datos utilizando herramientas clave como SQL, R y Tableau.',
        stack: 'Herramientas/Conceptos: SQL, R (Tidyverse), Tableau, Google Sheets, Data Cleaning, Storytelling.',
        images: [ImgCertificado], // Usa tu imagen importada
        projectType: 'certificate' // Marcador especial
    },
    'cloud-infra': {
        title: 'Infraestructura Serverless',
        fullDescription: 'Diseñé una arquitectura Serverless completa para manejar flujos de pago, eliminando los costos fijos de servidores. Utilizamos AWS Lambda para la lógica, DynamoDB para la persistencia de datos de baja latencia y SQS para garantizar la entrega de mensajes. Esto resultó en una reducción de costos operativos del 60%.',
        stack: 'Tecnologías Clave: AWS Lambda, API Gateway, DynamoDB, SQS, TypeScript.',
        images: [
            'https://placehold.co/800x450/1a1a3a/9c2da6?text=Cloud+Architecture',
            'https://placehold.co/800x450/1a1a3a/00f0ff?text=API+Flow'
        ],
        projectType: 'standard'
    },
    'e-commerce-v3': {
        title: 'Plataforma E-commerce Escalable',
        fullDescription: 'Lideré la reingeniería de un monolito a una arquitectura de microservicios con un enfoque en la resiliencia. Implementamos RabbitMQ para la comunicación asíncrona entre servicios, lo que permitió procesar picos de tráfico de hasta 10,000 transacciones por segundo sin degradación de rendimiento. ',
        stack: 'Tecnologías Clave: Microservicios, NestJS, RabbitMQ, Docker, React, PostgreSQL.',
        images: [
            'https://placehold.co/800x450/1a1a3a/00f0ff?text=Dashboard+Analysis',
            'https://placehold.co/800x450/1a1a3a/9c2da6?text=Deployment+Pipeline',
            'https://placehold.co/800x450/1a1a3a/00f0ff?text=Code+Snippet'
        ],
        projectType: 'standard'
    }
};

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    
    // --- ESTADO DEL MODAL ---
    const [modalState, setModalState] = useState<{
        visible: boolean;
        title: string;
        message: string;
        onConfirm: () => void;
    }>({
        visible: false,
        title: '',
        message: '',
        onConfirm: () => {}
    });

    const project = id ? dummyProjectDetails[id] : undefined;

    const ACCENT_COLOR = '#9c2da6';
    const BACKGROUND_URL = ImgFondo;

    // --- LÓGICA DEL CARRUSEL ACTUALIZADA ---
    useEffect(() => {
        // Resetea el índice cuando el proyecto cambia
        setCurrentImageIndex(0);
        
        // Asegura que el proyecto exista y tenga más de una imagen para ciclar
        if (!project || project.images.length <= 1) {
            return;
        }

        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % project.images.length // Usa el length del arreglo de imágenes del proyecto
            );
        }, 5000); 

        return () => clearInterval(interval); 
    }, [project]); // Depende del proyecto actual

    // --- LÓGICA DEL MODAL DE DESCARGA ---
    const handleDownloadClick = (lang: 'ESP' | 'ENG') => {
        const url = lang === 'ESP' ? cvEsp : cvEng;
        const fileName = lang === 'ESP' ? 'CV_Luis_Deffit_ESP.pdf' : 'CV_Luis_Deffit_ENG.pdf';
        
        setModalState({
            visible: true,
            title: 'Confirmación de Descarga',
            message: `Usted va a descargar el CV en ${lang === 'ESP' ? 'Español' : 'Inglés'}. ¿Desea continuar?`,
            onConfirm: () => {
                // Crea un enlace temporal para forzar la descarga
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                closeModal(); // Cierra el modal después de confirmar
            }
        });
    };

    const closeModal = () => {
        setModalState({ visible: false, title: '', message: '', onConfirm: () => {} });
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

    // --- ESTILOS (Actualizados a Poppins y fondo opaco) ---
    const detailStyle: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif', 
        backgroundColor: 'rgba(10, 10, 25, 1.0)', // Opacidad 1.0
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
        height: '450px', 
        boxShadow: `0 0 15px ${ACCENT_COLOR}`
    };
    
    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        opacity: 0,
        transition: 'opacity 1s ease-in-out', 
        position: 'absolute',
        top: 0,
        left: 0,
        // Si es certificado, queremos 'contain' para ver el doc completo
        objectFit: project.projectType === 'certificate' ? 'contain' : 'cover', 
    };

    // --- ESTILOS DEL MODAL ---
    const modalOverlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        fontFamily: 'Poppins, sans-serif',
    };

    const modalContentStyle: React.CSSProperties = {
        backgroundColor: '#0d0d1a', // Fondo oscuro
        border: `2px solid ${ACCENT_COLOR}`, // Borde de acento
        borderRadius: '12px',
        padding: '2rem',
        width: '90%',
        maxWidth: '500px',
        boxShadow: `0 0 20px ${ACCENT_COLOR}`,
        color: '#e0f2f7',
        textAlign: 'center',
    };

    // --- RENDERIZADO DEL COMPONENTE ---
    return (
        <>
            {/* --- MODAL DE CONFIRMACIÓN (Oculto por defecto) --- */}
            {modalState.visible && (
                <div style={modalOverlayStyle} onClick={closeModal}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <h2 style={{ color: '#00f0ff', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{modalState.title}</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>{modalState.message}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <Button variant="light" onClick={closeModal}>
                                Cancelar
                            </Button>
                            {/* --- ⭐ AQUÍ ESTABA EL ERROR (</Example>) --- */}
                            <Button variant="primary" onClick={modalState.onConfirm}>
                                Sí, descargar
                            </Button> 
                            {/* --- ⭐ CORREGIDO A </Button> --- */}
                        </div>
                    </div>
                </div>
            )}

            {/* --- DETALLE DEL PROYECTO --- */}
            <div style={detailStyle}>
                {/* --- CARRUSEL DE IMÁGENES (Actualizado) --- */}
                <div style={imageContainerStyle}>
                    {project.images.map((src, index) => {
                        // Define el contenido de la imagen
                        const ImageTag = (
                            <img
                                key={index}
                                src={src}
                                alt={`Screenshot ${index + 1}`}
                                style={{
                                    ...imageStyle,
                                    opacity: index === currentImageIndex ? 1 : 0, 
                                    zIndex: index === currentImageIndex ? 10 : 5 
                                }}
                            />
                        );

                        // Si es un certificado, envuélvelo en un enlace
                        if (project.projectType === 'certificate') {
                            return (
                                <a key={index} href={src} target="_blank" rel="noopener noreferrer" title="Ver certificado en pestaña nueva">
                                    {ImageTag}
                                </a>
                            );
                        }
                        
                        // Si no, solo muestra la imagen
                        return ImageTag;
                    })}
                </div>

                <h1 style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    color: '#00f0ff',
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    borderBottom: `2px solid ${ACCENT_COLOR}`, 
                    paddingBottom: '0.5rem'
                }}>
                    {project.title}
                </h1>
                
                <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    {project.fullDescription}
                </p>

                <h2 style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: 600,
                    color: ACCENT_COLOR, 
                    fontSize: '1.2rem',
                    marginTop: '1.5rem',
                    marginBottom: '0.5rem'
                }}>
                    [ STACK UTILIZADO ]
                </h2>
                <p style={{ color: '#b0e0e6', fontSize: '0.9rem', marginBottom: '3rem' }}>
                    {project.stack}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                        &lt; Volver a Proyectos
                    </Button>

                    {/* --- BOTONES DE CV (Condicionales) --- */}
                    {project.projectType === 'certificate' && (
                        <>
                            <Button 
                                variant="primary" 
                                style={{ width: 'auto' }} 
                                onClick={() => handleDownloadClick('ESP')}
                            >
                                Descargar CV (ESP)
                            </Button>
                            <Button 
                                variant="primary" 
                                style={{ width: 'auto' }}
                                onClick={() => handleDownloadClick('ENG')}
                            >
                                Descargar CV (ENG)
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}