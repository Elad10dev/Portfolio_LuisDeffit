import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg'; 

// --- NUEVA IMPORTACIÓN DEL ICONO GIF DE DESCARGA ---
import ImgDownload from '../img/analitica.gif'; 

// --- 1. IMPORTACIONES DE CERTIFICADOS Y CV ---
import ImgCertificado1 from '../img/Certificado 1.jpeg'; 
import ImgCertificado2 from '../img/Certificado 2.png'; 
import ImgCertificado4 from '../img/Certificado 3.png'; 
import ImgCertificado3 from '../img/Certificado 4.png'; 
import ImgCertificado5 from '../img/Certificado 5.png'; 
import ImgCertificado6 from '../img/Certificado 6.png'; 
import ImgCertificado7 from '../img/Certificado 7.png'; 
import ImgCertificado8 from '../img/Certificado 8.png';
import ImgCertificado10 from '../img/certificado 10.png'; 
import ImgCertificado11 from '../img/certificado 11.png'; 
import ImgCertificado12 from '../img/certificado 12.png'; 
import ImgCertificado13 from '../img/certificado 13.png';
import ImgCertificado9 from '../img/certificado 14.png'; 

import CVEsp from '../img/1.CV_Luis_Gutierrez_Deffit_ES.pdf';
import CVEng from '../img/1.Data analytics -LuisDeffit .pdf';

// --- URLs DE CERTIFICADOS (REVISADAS Y ORDENADAS) ---
const certificateUrls = [
    'https://credentials.databricks.com/dea4bbba-8692-4be0-9586-108c424abdb9#acc.04a7uXkO', 
    'https://www.credly.com/badges/1bd2916f-65b2-43b4-9f10-f4ade109f88c/linked_in_profile', 
    'https://cursos.desafiolatam.com/certificates/yzozngeew2', 
    'https://www.credly.com/badges/c2da7100-fd01-4ebf-a3d9-db7a208a0103/linked_in_profile', 
    'https://www.linkedin.com/learning/certificates/72fe157dfcdd4a252ae345d6c3f39b6db851c495144a836c73bafdf3e106e488?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    'https://www.linkedin.com/learning/certificates/14ff82d34ec4c6a3320989830bb7955dfa00f5574edc8002f73d6c527df41416?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    'https://www.linkedin.com/learning/certificates/0661b247961d0d01c9de69215aed8332f5259428410c75e7f25a335f48a8c4fb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    'https://www.linkedin.com/learning/certificates/78cb35f1713bc6fe41e243d60f73d26c9f631f8e0de001c6fa96f5fe6b339a6b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    'https://www.linkedin.com/learning/certificates/3a2f0e19b0ca05934d80bbe3028ff59d49fe24bb93a4e2eb2cb369bcfa1411af?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    'https://www.linkedin.com/learning/certificates/ccc5d87523361e438fdd44fd469c1399a4e50b3661b20fc36832c9a40c1f8237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    'https://www.linkedin.com/learning/certificates/5800c6f191b7a9fa40b0aed07f0f1671df051a30e4ce305dd5a78f1e0f902858?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D',
    'https://www.linkedin.com/learning/certificates/24f90b16c03681ccf0f76fd16e8b922f07c5d9a57a8e0a671f83f019e0a2030e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D',
    'https://www.linkedin.com/learning/certificates/621b98c26ea38cae31381a3623fa4d2fb9633daff9fc05ed867cef8c67c3876b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D'
];

// --- 2. ASIGNACIÓN DE IMPORTACIONES Y CREACIÓN DEL ARRAY DE CERTIFICADOS (Sin cambios) ---
const allCertificates = [
    ImgCertificado1, ImgCertificado2, ImgCertificado3, ImgCertificado4, 
    ImgCertificado5, ImgCertificado6, ImgCertificado7, ImgCertificado8, 
     ImgCertificado10, ImgCertificado11, ImgCertificado12, ImgCertificado9, 
    ImgCertificado13, 
];

// --- DETALLES DE CADA CERTIFICADO (ACTUALIZADO con descripción y habilidades) ---
const certificateDetails = [
    { 
        title: 'Certificación Profesional: Data Analytics (Completa)',
        url: certificateUrls[12], // Usamos una URL de ejemplo ya que ImgCertificado1 es la portada
        description: 'He **dominado** el ciclo completo de análisis de datos, desde la formulación de hipótesis hasta la entrega de un *storytelling* convincente. Mis habilidades abarcan la manipulación de datos y la visualización de resultados clave.',
        skills: ['SQL', 'R', 'Tableau', 'Storytelling'],
        emojis: ['📊', '💻', '💡']
    },
    { 
        title: 'Fundamentos del Análisis de Datos',
        url: certificateUrls[0],
        description: 'Establecí una base sólida, entendiendo mi rol como analista para **transformar datos brutos en inteligencia de negocio**. Esto me permite aplicar metodologías de análisis que impulsan el crecimiento.',
        skills: ['Pensamiento Analítico', 'Metodologías', 'Inteligencia de Negocio'],
        emojis: ['🧠', '📈']
    },
    { 
        title: 'Toma de Decisiones basada en Preguntas',
        url: certificateUrls[2],
        description: 'Desarrollé la capacidad de **plantear las preguntas de negocio correctas**. Utilizo el pensamiento estructurado para guiar la exploración de datos y alinear el análisis con los objetivos estratégicos.',
        skills: ['Formulación de Preguntas', 'Estrategia', 'Exploración de Datos'],
        emojis: ['❓', '🎯']
    },
    { 
        title: 'Preparación de Datos para la Exploración',
        url: certificateUrls[1],
        description: 'Soy experto en **limpiar, transformar y organizar grandes volúmenes de datos**. Mi enfoque es garantizar la integridad y fiabilidad de la información antes de cualquier análisis.',
        skills: ['Data Cleaning', 'Google Sheets', 'Calidad de Datos'],
        emojis: ['🧼', '⚙️']
    },
    { 
        title: 'Procesamiento de Datos con SQL',
        url: certificateUrls[4],
        description: 'Tengo un fuerte dominio de **SQL** para la manipulación avanzada de bases de datos. Soy capaz de realizar **joins, filtros y agregaciones complejas**.',
        skills: ['Consultas SQL', 'Agregaciones', 'Bases de Datos'],
        emojis: ['🐘', '💾']
    },
    { 
        title: 'Análisis de Datos para la Acción',
        url: certificateUrls[13] || 'https://example.com/placeholder', // Usando placeholder para la URL 13
        description: 'Mi habilidad radica en aplicar **métodos estadísticos y técnicas de modelado** para descubrir patrones ocultos y tendencias. Esto se traduce en *insights* concretos para la toma de decisiones.',
        skills: ['Estadística', 'Modelado', 'Descubrimiento de Patrones'],
        emojis: ['🔬', '🌟']
    },
    { 
        title: 'Visualización de Datos con Tableau',
        url: certificateUrls[5],
        description: 'Soy capaz de **diseñar y construir cuadros de mando (dashboards) dinámicos** y atractivos en **Tableau**. Convierto hallazgos complejos en historias visuales sencillas.',
        skills: ['Tableau', 'Dashboards', 'KPIs', 'Storytelling Visual'],
        emojis: ['🎨', '🖥️']
    },
    { 
        title: 'Programación con R para Análisis',
        url: certificateUrls[6],
        description: 'He adquirido conocimientos de programación en **R**, centrándome en el uso del ecosistema **Tidyverse**. Esta herramienta me permite escalar mi capacidad de manipulación y exploración de datos.',
        skills: ['Lenguaje R', 'RStudio', 'Tidyverse'],
        emojis: ['💻', '📈']
    },
    { 
        title: 'Manipulación de Datos en R (Tidyverse)',
        url: certificateUrls[7],
        description: 'Aprovecho la potencia de **Tidyverse** (*dplyr*) para ejecutar transformaciones de datos complejas. Esto me permite limpiar, reestructurar y resumir información de manera programática y reproducible.',
        skills: ['Tidyverse', 'dplyr', 'Reproducibilidad'],
        emojis: ['🔗', '🔄']
    },
    { 
        title: 'Creación de Visualizaciones en R (ggplot2)',
        url: certificateUrls[8],
        description: 'Utilizo la librería **ggplot2** de R para crear **gráficos estadísticos personalizados y de alta calidad**. Crucial para comunicar relaciones complejas en los datos con claridad.',
        skills: ['ggplot2', 'Visualización Avanzada', 'Personalización'],
        emojis: ['📊', '✨']
    },
    { 
        title: 'El Arte del Storytelling con Datos',
        url: certificateUrls[9],
        description: 'Mi valor no termina en el análisis, sino en la **comunicación**. Soy hábil para estructurar una narrativa persuasiva que transforma mis hallazgos en recomendaciones de negocio influyentes.',
        skills: ['Narrativa de Datos', 'Comunicación Ejecutiva', 'Persuasión'],
        emojis: ['🗣️', '📝']
    },
    { 
        title: 'Proyecto Final de Análisis de Datos Aplicado',
        url: certificateUrls[10],
        description: 'Este proyecto fue la **prueba de fuego**. Apliqué mi conjunto de herramientas completo (**SQL, R, Tableau**) para resolver un problema de negocio real, demostrando mi capacidad para entregar una solución de datos integral.',
        skills: ['Integración de Herramientas', 'Resolución de Problemas', 'Impacto Empresarial'],
        emojis: ['🛠️', '✅']
    },
    { 
        title: 'Ética y Privacidad en el Análisis',
        url: certificateUrls[11],
        description: 'Tengo un firme entendimiento de la **ética de datos** y las normativas de privacidad (como GDPR). Me aseguro de que todos mis análisis se realicen con responsabilidad, minimizando sesgos.',
        skills: ['Ética', 'GDPR', 'Privacidad', 'Sesgos'],
        emojis: ['⚖️', '🔒']
    },
];

// --- INTERFAZ DEL PROYECTO (Sin cambios) ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; 
    projectType?: 'certificate' | 'standard'; 
    subProjectDetails?: { title: string; url: string; description?: string; skills?: string[]; emojis?: string[] }[];
}

// --- DATOS DE PROYECTOS ACTUALIZADOS (Solo para este componente, que maneja 'certificados') ---
const dummyProjectDetails: { [key: string]: Project } = {
    
    'certificados': { // ¡ID MODIFICADO!
        title: 'Certificación Profesional: Google Data Analytics',
        fullDescription: 'Completé la certificación profesional de Google, adquiriendo habilidades fundamentales en el ciclo de vida del análisis de datos. Esto incluye la preparación, procesamiento, análisis y visualización de datos utilizando herramientas clave como SQL, R y Tableau.',
        stack: 'Herramientas/Conceptos: SQL, R (Tidyverse), Tableau, Google Sheets, Data Cleaning, Storytelling. (¡Desliza o usa las flechas para ver los 13 certificados!)',
        images: allCertificates, 
        projectType: 'certificate',
        subProjectDetails: certificateDetails,
    },
    'cloud-infra': {
        // ... (otros proyectos no necesarios para esta página, pero se mantienen por si ProjectDetail maneja más)
        title: 'Infraestructura Serverless (Serverless)',
        fullDescription: 'Diseñé una arquitectura Serverless completa para manejar flujos de pago, eliminando los costos fijos de servidores. Utilizamos AWS Lambda para la lógica, DynamoDB para la persistencia de datos de baja latencia y SQS para garantizar la entrega de mensajes. Esto resultó en una reducción de costos operativos del 60%.',
        stack: 'Tecnologías Clave: AWS Lambda, API Gateway, DynamoDB, SQS, TypeScript.',
        images: [
            'https://placehold.co/800x450/1a1a3a/9c2da6?text=Cloud+Architecture',
            'https://placehold.co/800x450/1a1a3a/00f0ff?text=API+Flow'
        ],
        projectType: 'standard'
    },
    // Eliminamos 'powerbii' de aquí ya que se manejará en ProjectDetail2
};

// ***************************************************************
// EL NOMBRE DE LA FUNCIÓN SE MANTIENE COMO ProjectDetail
// PARA QUE COINCIDA CON EL ARCHIVO ProjectDetail.tsx, 
// PERO DEBES USAR ALIAS EN App.tsx para que las rutas funcionen.
// ***************************************************************
export function ProjectDetail() {
    const { id } = useParams<{ id: string }>(); 
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    // --- NUEVO: ESTADOS PARA LA ANIMACIÓN DE CLICK ---
    const [isAnimatingEsp, setIsAnimatingEsp] = useState(false);
    const [isAnimatingEng, setIsAnimatingEng] = useState(false);
    
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

    // Usamos el ID de la URL para buscar el proyecto
    const project = id ? dummyProjectDetails[id] : undefined;

    const ACCENT_COLOR = '#9c2da6'; // Color morado de acento
    const SECONDARY_COLOR = '#00f0ff'; // Color cian de acento
    const BACKGROUND_URL = ImgFondo;

    // --- LÓGICA DE NAVEGACIÓN MANUAL (Flechas) ---
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

    // --- FUNCIÓN DE DESCARGA BASE (sin modal) ---
    const baseDownload = (lang: 'ESP' | 'ENG') => {
        const url = lang === 'ESP' ? CVEsp : CVEng;
        const fileName = lang === 'ESP' ? 'CV_Luis_Deffit_ESP.pdf' : 'CV_Luis_Deffit_ENG.pdf';
        
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // --- FUNCIÓN QUE GESTIONA EL CLICK (ANIMACIÓN + MODAL) ---
    const triggerDownload = (lang: 'ESP' | 'ENG') => {
        // 1. Activa la animación
        if (lang === 'ESP') {
            setIsAnimatingEsp(true);
        } else {
            setIsAnimatingEng(true);
        }

        // 3. Resetea la animación después de 300ms
        setTimeout(() => {
            if (lang === 'ESP') {
                setIsAnimatingEsp(false);
            } else {
                setIsAnimatingEng(false);
            }
        }, 300); // 300ms es la duración de la animación

        // 2. Ejecuta la descarga real
        baseDownload(lang);
    };
    
    // --- LÓGICA DEL MODAL DE DESCARGA (Modificada para usar triggerDownload) ---
    const handleDownloadClick = (lang: 'ESP' | 'ENG') => {
        setModalState({
            visible: true,
            title: 'Confirmación de Descarga',
            message: `Usted va a descargar el CV en ${lang === 'ESP' ? 'Español' : 'Inglés'}. ¿Desea continuar?`,
            onConfirm: () => {
                triggerDownload(lang); // Llama a la descarga Y animación
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
    
    // Obtener los detalles del subproyecto actual
    const currentSubProject = project.projectType === 'certificate' && project.subProjectDetails 
        ? project.subProjectDetails[currentImageIndex] 
        : null;

    // --- ESTILOS DE DESCARGA E ANIMACIÓN (COPIADOS DE BANNERPROFILE) ---
    const downloadIconStyle: React.CSSProperties = {
        width: '60px', // Reducido para ajustarse mejor
        height: '60px', // Reducido para ajustarse mejor
        cursor: 'pointer',
        transition: 'transform 0.3s ease, filter 0.3s',
        filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.7))', 
        objectFit: 'contain',
    };

    const iconAnimationStyle: React.CSSProperties = {
        transform: 'scale(1.25)', 
        filter: 'drop-shadow(0 0 15px rgba(156, 45, 166, 1))', 
    };

    // --- ESTILOS DE BOTÓN DE CERTIFICADO (AJUSTADO) ---
    const certificateButtonStyle: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
        backgroundColor: ACCENT_COLOR, 
        color: 'white',
        padding: '0.6rem 1.2rem', // REDUCIDO
        borderRadius: '8px',
        fontSize: '0.9rem', // REDUCIDO
        textAlign: 'center',
        textDecoration: 'none', 
        cursor: 'pointer',
        boxShadow: `0 4px 15px rgba(156, 45, 166, 0.4)`,
        transition: 'all 0.3s ease',
        display: 'inline-block' 
    };

    // --- ESTILO PARA EL BADGE DE HABILIDAD (SOLUCIONADO) ---
    const skillBadgeStyle: React.CSSProperties = {
        display: 'inline-block',
        backgroundColor: 'rgba(10, 10, 25, 0.9)', 
        color: SECONDARY_COLOR, // Cian
        padding: '0.3rem 0.6rem',
        borderRadius: '4px',
        marginRight: '0.5rem',
        marginTop: '0.5rem',
        fontSize: '0.85rem',
        border: `1px solid ${SECONDARY_COLOR}`,
    };


    // --- ESTILOS VISUALIZACIÓN DE IMAGEN (AJUSTADO) ---
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
        // ALTURA AJUSTADA PARA VER CERTIFICADOS COMPLETOS
        minHeight: '400px', 
        maxHeight: '70vh', 
        boxShadow: `0 0 15px ${ACCENT_COLOR}`,
        backgroundColor: '#0d0d1a', // Fondo muy oscuro para el espacio vacio del contain
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
        right: 0,
        margin: 'auto',
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
        <>
            {/* --- MODAL DE CONFIRMACIÓN (Oculto por defecto) --- */}
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
                        <h2 style={{ color: SECONDARY_COLOR, marginBottom: '1rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>{modalState.title}</h2>
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
                                <a key={index} href={currentSubProject?.url} target="_blank" rel="noopener noreferrer" title="Ver certificado en pestaña nueva">
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
                    color: SECONDARY_COLOR,
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    borderBottom: `2px solid ${ACCENT_COLOR}`, 
                    paddingBottom: '0.5rem'
                }}>
                    {/* Si es certificado, muestra el título del subproyecto, si no, el título principal */}
                    {currentSubProject ? currentSubProject.title : project.title}
                </h1>

                {/* --- DETALLE DEL SUBPROYECTO (DINÁMICO CON DESCRIPCIÓN Y HABILIDADES) --- */}
                {currentSubProject && (
                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', border: `2px solid ${ACCENT_COLOR}`, borderRadius: '10px', backgroundColor: 'rgba(10, 10, 25, 0.7)', boxShadow: `0 0 10px ${ACCENT_COLOR}` }}>
                        
                        <h2 style={{ 
                            fontFamily: 'Poppins, sans-serif', 
                            fontWeight: 700,
                            color: ACCENT_COLOR, 
                            fontSize: '1.4rem',
                            marginBottom: '0.5rem'
                        }}>
                            Verificacion ( Certificated : {currentImageIndex + 1}/13)
                        </h2>
                        
                        {/* Descripción Breve y Dinámica */}
                        <p style={{ color: '#e0f2f7', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                            {currentSubProject.description}
                        </p>

                        {/* Listado de Habilidades / Tecnologías con Emojis */}
                        <p style={{ color: ACCENT_COLOR, fontWeight: 600, fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                            Habilidades Clave {currentSubProject.emojis && currentSubProject.emojis.join(' ')}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '0' }}>
                            {currentSubProject.skills && currentSubProject.skills.map((skill, i) => (
                                <span key={i} style={skillBadgeStyle}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* --- DESCRIPCIÓN PRINCIPAL (Solo se muestra si no es un certificado) --- */}
                {project.projectType !== 'certificate' && (
                    <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                        {project.fullDescription}
                    </p>
                )}
                
                {/* --- BLOQUE DE ACCIÓN Y TECNOLOGÍAS CLAVE (MODIFICADO) --- */}
                <h2 style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontWeight: 600,
                    color: ACCENT_COLOR, 
                    fontSize: '1.2rem',
                    marginTop: '2.5rem', // Separación del bloque anterior
                    marginBottom: '0.5rem'
                }}>
                    [ ACCIÓN Y TECNOLOGÍAS CLAVE ]
                </h2>
                {/* Descripción General del Stack (se mantiene del original) */}
                <p style={{ color: '#b0e0e6', fontSize: '0.9rem', marginBottom: '2rem' }}>
                    {project.stack}
                </p>

                {/* ⭐ BOTÓN DE ENLACE EXTERNO (CERTIFICADO) - AJUSTADO ⭐ */}
                {currentSubProject && (
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <a 
                            href={currentSubProject.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={certificateButtonStyle} // USANDO EL ESTILO REDUCIDO
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = SECONDARY_COLOR;
                                e.currentTarget.style.color = '#1a1a3a';
                                e.currentTarget.style.boxShadow = `0 6px 20px rgba(0, 240, 255, 0.6)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = ACCENT_COLOR;
                                e.currentTarget.style.color = 'white';
                                e.currentTarget.style.boxShadow = `0 4px 15px rgba(156, 45, 166, 0.4)`;
                            }}
                        >
                            🔗 VER CREDENCIAL OFICIAL DE {currentSubProject.title.toUpperCase()}
                        </a>
                    </div>
                )}
                
                {/* --- BOTONES DE ACCIÓN PRINCIPALES (MODIFICADOS) --- */}
                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '2rem', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '100%',
                    marginTop: '2rem'
                }}>
                    <Button onClick={() => navigate('/projects')} variant="light" style={{ width: 'auto' }}>
                        &lt; Volver a Proyectos
                    </Button>

                    {/* ÍCONO CV ESPAÑOL */}
                    {project.projectType === 'certificate' && (
                        <>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src={ImgDownload}
                                    alt="Descargar CV en Español"
                                    title="Descargar CV (Español)"
                                    onClick={() => handleDownloadClick('ESP')} // Llama al modal
                                    style={{ 
                                        ...downloadIconStyle,
                                        ...(isAnimatingEsp ? iconAnimationStyle : {}) 
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
                                    onMouseOut={(e) => {
                                        if (!isAnimatingEsp) e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                                <p style={{ margin: 0, marginTop: '0.5rem', color: ACCENT_COLOR, fontWeight: 'bold', fontSize: '0.85rem' }}>Descargar CV (ESP)</p>
                            </div>

                            {/* ÍCONO CV INGLÉS */}
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src={ImgDownload}
                                    alt="Descargar CV en Inglés"
                                    title="Descargar CV (English)"
                                    onClick={() => handleDownloadClick('ENG')} // Llama al modal
                                    style={{ 
                                        ...downloadIconStyle,
                                        ...(isAnimatingEng ? iconAnimationStyle : {}) 
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
                                    onMouseOut={(e) => {
                                        if (!isAnimatingEng) e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                                <p style={{ margin: 0, marginTop: '0.5rem', color: ACCENT_COLOR, fontWeight: 'bold', fontSize: '0.85rem' }}>Descargar CV (ENG)</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}