import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Importo un icono simple para las flechas (usaré un carácter Unicode o lo simularé con CSS)
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 

// --- 1. IMPORTACIONES DE CERTIFICADOS Y CV (Sin cambios) ---
// Certificado principal
import ImgCertificado1 from '../img/Certificado 1.jpeg'; 

// Importaciones de los 12 certificados adicionales
import ImgCertificado2 from '../img/Certificado 2.png'; 
import ImgCertificado4 from '../img/Certificado 3.png'; 
import ImgCertificado3 from '../img/Certificado 4.png'; 
import ImgCertificado5 from '../img/Certificado 5.png'; 
import ImgCertificado6 from '../img/Certificado 6.png'; 
import ImgCertificado7 from '../img/Certificado 7.png'; 
import ImgCertificado8 from '../img/Certificado 8.png'; 
import ImgCertificado9 from '../img/Certificado 9.png'; 
import ImgCertificado10 from '../img/Certificado 10.png'; 
import ImgCertificado11 from '../img/Certificado 11.png'; 
import ImgCertificado12 from '../img/Certificado 12.png'; 
import ImgCertificado13 from '../img/certificado 13.png'; 

import CVEsp from '../img/1.CV_Luis_Gutierrez_Deffit_ES.pdf';
import CVEng from '../img/1.Data analytics -LuisDeffit .pdf';

// --- 2. ASIGNACIÓN DE IMPORTACIONES Y CREACIÓN DEL ARRAY DE CERTIFICADOS (Sin cambios) ---
const allCertificates = [
    ImgCertificado1, 
    ImgCertificado2, 
    ImgCertificado3, 
    ImgCertificado4, 
    ImgCertificado5, 
    ImgCertificado6, 
    ImgCertificado7, 
    ImgCertificado8, 
    ImgCertificado9, 
    ImgCertificado10, 
    ImgCertificado11, 
    ImgCertificado12, 
    ImgCertificado13, 
];

const cvEsp = CVEsp; 
const cvEng = CVEng; 

// --- DETALLES DE CADA CERTIFICADO (ACTUALIZADO: Títulos simplificados y enfoque en valor para reclutadores) ---
const certificateDetails = [
    { 
        title: 'Certificación Profesional: Data Analytics (Completa)',
        description: 'He **dominado** el ciclo completo de análisis de datos, desde la formulación de hipótesis hasta la entrega de un *storytelling* convincente. Mis habilidades abarcan la manipulación de datos con **SQL** y **R**, y la visualización de resultados clave en **Tableau**.',
    },
    { 
        title: 'Fundamentos del Análisis de Datos',
        description: 'Establecí una base sólida, entendiendo mi rol como analista para **transformar datos brutos en inteligencia de negocio**. Esto me permite identificar y aplicar metodologías de análisis que impulsan el crecimiento.',
    },
    { 
        title: 'Toma de Decisiones basada en Preguntas',
        description: 'Desarrollé la capacidad de **plantear las preguntas de negocio correctas**. Utilizo el pensamiento estructurado para guiar la exploración de datos y asegurar que el análisis siempre se alinee con los objetivos estratégicos.',
    },
    { 
        title: 'Preparación de Datos para la Exploración',
        description: 'Soy experto en **limpiar, transformar y organizar grandes volúmenes de datos** utilizando Google Sheets y herramientas de gestión de calidad. Mi enfoque es garantizar la integridad y fiabilidad de la información antes de cualquier análisis.',
    },
    { 
        title: 'Procesamiento de Datos con SQL',
        description: 'Tengo un fuerte dominio de **SQL** para la manipulación avanzada de bases de datos. Soy capaz de realizar **joins, filtros y agregaciones complejas** para preparar *datasets* listos para modelos estadísticos o visualización.',
    },
    { 
        title: 'Análisis de Datos para la Acción',
        description: 'Mi habilidad radica en aplicar **métodos estadísticos y técnicas de modelado** para descubrir patrones ocultos y tendencias. Esto se traduce en *insights* concretos que mis equipos pueden utilizar inmediatamente para tomar decisiones.',
    },
    { 
        title: 'Visualización de Datos con Tableau',
        description: 'Soy capaz de **diseñar y construir cuadros de mando (dashboards) dinámicos** y atractivos en **Tableau**. Convierto hallazgos complejos en historias visuales sencillas para que cualquier audiencia pueda entender el valor de los datos.',
    },
    { 
        title: 'Programación con R para Análisis',
        description: 'He adquirido conocimientos de programación en **R**, centrándome en el uso del ecosistema **Tidyverse**. Esta herramienta me permite escalar mi capacidad de manipulación y exploración de datos de forma eficiente.',
    },
    { 
        title: 'Manipulación de Datos en R (Tidyverse)',
        description: 'Aprovecho la potencia de **Tidyverse** (especialmente *dplyr*) para ejecutar transformaciones de datos complejas. Esto me permite limpiar, reestructurar y resumir información de manera programática y reproducible.',
    },
    { 
        title: 'Creación de Visualizaciones en R (ggplot2)',
        description: 'Utilizo la librería **ggplot2** de R para crear **gráficos estadísticos personalizados y de alta calidad**. Esto es crucial para comunicar relaciones complejas en los datos con claridad y precisión profesional.',
    },
    { 
        title: 'El Arte del Storytelling con Datos',
        description: 'Mi valor no termina en el análisis, sino en la **comunicación**. Soy hábil para estructurar una narrativa persuasiva que transforma mis hallazgos en recomendaciones de negocio claras e influyentes para la alta dirección.',
    },
    { 
        title: 'Proyecto Final de Análisis de Datos Aplicado',
        description: 'Este proyecto fue la **prueba de fuego**. Apliqué mi conjunto de herramientas completo (**SQL, R, Tableau**) para resolver un problema de negocio real, demostrando mi capacidad para entregar una solución de datos integral y con impacto.',
    },
    { 
        title: 'Ética y Privacidad en el Análisis',
        description: 'Tengo un firme entendimiento de la **ética de datos** y las normativas de privacidad (como GDPR). Me aseguro de que todos mis análisis se realicen con responsabilidad, minimizando sesgos y garantizando la confianza en los datos.',
    },
];

// --- INTERFAZ DEL PROYECTO ACTUALIZADA (Sin cambios) ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; 
    projectType?: 'certificate' | 'standard'; 
    subProjectDetails?: { title: string; description: string }[];
}

// --- DATOS DE PROYECTOS ACTUALIZADOS ---
const dummyProjectDetails: { [key: string]: Project } = {
    
    'ia-analyzer': { 
        title: 'Certificación Profesional: Google Data Analytics',
        fullDescription: 'Completé la certificación profesional de Google, adquiriendo habilidades fundamentales en el ciclo de vida del análisis de datos. Esto incluye la preparación, procesamiento, análisis y visualización de datos utilizando herramientas clave como SQL, R y Tableau.',
        stack: 'Herramientas/Conceptos: SQL, R (Tidyverse), Tableau, Google Sheets, Data Cleaning, Storytelling. (¡Desliza o usa las flechas para ver los 13 certificados!)',
        images: allCertificates, 
        projectType: 'certificate',
        subProjectDetails: certificateDetails,
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

    const ACCENT_COLOR = '#9c2da6'; // Color morado de acento
    const BACKGROUND_URL = ImgFondo;

    // --- LÓGICA DEL CARRUSEL AUTOMÁTICO (solo si tiene más de una imagen) ---
    useEffect(() => {
        setCurrentImageIndex(0);
        
        // Desactiva el carrusel automático para el proyecto de certificados para priorizar el control manual
        // Solo lo dejamos si no es el proyecto de certificado O si solo tiene un elemento
        if (!project || project.images.length <= 1 || project.projectType === 'certificate') {
            return;
        }

        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => 
                (prevIndex + 1) % project.images.length 
            );
        }, 5000); 

        return () => clearInterval(interval); 
    }, [project]);

    // --- NUEVA LÓGICA DE NAVEGACIÓN MANUAL ---
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
    
    // --- LÓGICA DEL MODAL DE DESCARGA (Sin cambios) ---
    const handleDownloadClick = (lang: 'ESP' | 'ENG') => {
        const url = lang === 'ESP' ? cvEsp : cvEng;
        const fileName = lang === 'ESP' ? 'CV_Luis_Deffit_ESP.pdf' : 'CV_Luis_Deffit_ENG.pdf';
        
        setModalState({
            visible: true,
            title: 'Confirmación de Descarga',
            message: `Usted va a descargar el CV en ${lang === 'ESP' ? 'Español' : 'Inglés'}. ¿Desea continuar?`,
            onConfirm: () => {
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                closeModal();
            }
        });
    };

    const closeModal = () => {
        setModalState({ visible: false, title: '', message: '', onConfirm: () => {} });
    };

    // --- MANEJO DE PROYECTO NO ENCONTRADO (Sin cambios) ---
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
    
    // ⭐ Obtener los detalles del subproyecto actual
    const currentSubProject = project.projectType === 'certificate' && project.subProjectDetails 
        ? project.subProjectDetails[currentImageIndex] 
        : null;

    // --- ESTILOS (Añadido estilo de botón de carrusel) ---
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
        objectFit: project.projectType === 'certificate' ? 'contain' : 'cover', 
    };

    // Estilo para las flechas de navegación
    const navButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(156, 45, 166, 0.7)', // Morado semi-transparente
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 20, // Por encima de las imágenes
        fontSize: '1.5rem',
        fontWeight: 'bold',
        borderRadius: '4px',
        transition: 'background-color 0.3s',
        userSelect: 'none',
    };

    // --- RENDERIZADO DEL COMPONENTE ---
    return (
        <>
            {/* ... Modal de confirmación (sin cambios) ... */}
            {modalState.visible && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center',
                    alignItems: 'center', zIndex: 1000, fontFamily: 'Poppins, sans-serif',
                }} onClick={closeModal}>
                    <div style={{
                        backgroundColor: '#0d0d1a', border: `2px solid ${ACCENT_COLOR}`, borderRadius: '12px',
                        padding: '2rem', width: '90%', maxWidth: '500px', boxShadow: `0 0 20px ${ACCENT_COLOR}`,
                        color: '#e0f2f7', textAlign: 'center',
                    }} onClick={(e) => e.stopPropagation()}>
                        <h2 style={{ color: '#00f0ff', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{modalState.title}</h2>
                        <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: 1.6 }}>{modalState.message}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <Button variant="light" onClick={closeModal}>Cancelar</Button>
                            <Button variant="primary" onClick={modalState.onConfirm}>Sí, descargar</Button> 
                        </div>
                    </div>
                </div>
            )}

            {/* --- DETALLE DEL PROYECTO --- */}
            <div style={detailStyle}>
                
                {/* --- CARRUSEL DE IMÁGENES y NAVEGACIÓN --- */}
                <div style={imageContainerStyle}>
                    
                    {/* Flecha Izquierda (Anterior) */}
                    {project.projectType === 'certificate' && project.images.length > 1 && (
                        <button 
                            style={{ ...navButtonStyle, left: '10px' }} 
                            onClick={goToPrevious}
                            aria-label="Certificado Anterior"
                        >
                            &lt;
                        </button>
                    )}

                    {project.images.map((src, index) => {
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

                        if (project.projectType === 'certificate') {
                            return (
                                <a key={index} href={src} target="_blank" rel="noopener noreferrer" title="Ver certificado en pestaña nueva">
                                    {ImageTag} 
                                </a>
                            );
                        }
                        
                        return ImageTag;
                    })}
                    
                    {/* Flecha Derecha (Siguiente) */}
                    {project.projectType === 'certificate' && project.images.length > 1 && (
                        <button 
                            style={{ ...navButtonStyle, right: '10px' }} 
                            onClick={goToNext}
                            aria-label="Certificado Siguiente"
                        >
                            &gt;
                        </button>
                    )}
                </div>
                
                {/* --- TÍTULO PRINCIPAL DEL PROYECTO (ACTUALIZADO) --- */}
                <h1 style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 800,
                    color: '#00f0ff',
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    borderBottom: `2px solid ${ACCENT_COLOR}`, 
                    paddingBottom: '0.5rem'
                }}>
                    {/* ⭐ Si es certificado, muestra el título del subproyecto, si no, el título principal */}
                    {currentSubProject ? currentSubProject.title : project.title}
                </h1>

                {/* --- DETALLE DEL SUBPROYECTO --- */}
                {currentSubProject && (
                    <div style={{ marginBottom: '2rem', padding: '1rem', border: `1px dashed ${ACCENT_COLOR}`, borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <h2 style={{ 
                            fontFamily: 'Poppins, sans-serif', 
                            fontWeight: 700,
                            color: ACCENT_COLOR, 
                            fontSize: '1.4rem',
                            marginBottom: '0.5rem'
                        }}>
                            {/* ⭐ Aquí mostramos la descripción del subproyecto, ya que el título está arriba */}
                            Detalle del Módulo {currentImageIndex + 1}
                        </h2>
                        <p style={{ color: '#e0f2f7', fontSize: '0.95rem', lineHeight: 1.5 }}>
                            {currentSubProject.description}
                        </p>
                    </div>
                )}
                
                {/* --- DESCRIPCIÓN PRINCIPAL (Solo se muestra si no es un certificado) --- */}
                {project.projectType !== 'certificate' && (
                    <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                        {project.fullDescription}
                    </p>
                )}
                
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
                
                {/* --- BOTONES --- */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                        &lt; Volver a Proyectos
                    </Button>

                    {/* --- BOTONES DE CV (Condicionales, SÓLO para 'certificate') --- */}
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