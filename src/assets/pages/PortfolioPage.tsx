import React from 'react';
// Importamos useNavigate para la redirección real
import { useNavigate } from 'react-router-dom'; 

// Importación corregida: Apuntando a la ubicación estándar de layouts

/*import { BannerProfile } from '../modules/BannesProfile';*/
// NOTA: Se ha asumido que BannerProfile.tsx se encuentra en layouts/

// --- IMPORTACIONES DE IMÁGENES DE PROYECTOS (SOLO LAS EXISTENTES) ---
import ImgCertificado1 from '../img/portada ceritificado 1.png';
import ImgProyecto2 from '../img/tablero.png';
import ImgProyecto3 from '../img/tablero2_0.png';
import ImgProyecto4 from '../img/PPP1.jpg';
import GifProyecto5_Cover from '../img/image48.gif';
import ImgProyecto6_Cover from '../img/datos.png';
// NOTA: Los siguientes proyectos usan imágenes placeholder temporales.

// --- MAPEO DE TAGS A ICONOS (SIMULACIÓN CON EMOJIS) ---
// Reemplazar estos emojis con componentes de librerías de iconos (e.g., react-icons)
const getIconForTag = (tag: string): string => {
    switch (tag.toLowerCase()) {
        case 'sql': return '💾 SQL'; // Icono de base de datos
        case 'r': return '📊 R'; // Icono de gráfica/análisis
        case 'tableau': return '📈 Tableau'; // Icono de tendencia
        case 'google': return '🔍 Google'; // Icono de Google
        case 'power bi': return '🚀 Power BI'; // Icono de cohete/impulso
        case 'dax': return '🔢 DAX'; // Icono de números
        case 'kpis': return '🎯 KPIs'; // Icono de objetivo
        case 'data modeling': return '📐 Model'; // Icono de regla/modelo
        case 'microservicios': return '⚙️ Micro'; // Icono de engranaje
        case 'nestjs': return '⚡ NestJS'; // Icono de rayo
        case 'rabbitmq': return '📩 RabbitMQ'; // Icono de mensaje
        case 'docker': return '🐳 Docker'; // Icono de ballena
        case 'python': return '🐍 Python'; // Icono de serpiente
        case 'machine learning': return '🧠 ML'; // Icono de cerebro
        case 'xgboost': return '🌲 XGB'; // Icono de árbol
        case 'scikit-learn': return '📚 SKLearn'; // Icono de libros
        case 'etl': return '🔄 ETL'; // Icono de refrescar
        case 'postgresql': return '🐘 PGSQL'; // Icono de elefante
        case 'pandas': return '🐼 Pandas'; // Icono de panda
        default: return tag;
    }
};

// --- LISTA DE PROYECTOS EXTENDIDA (6 Proyectos) ---
const projectList = [
    {
        id: 'certificados', 
        title: 'Certificación Profesional: Google Data Analytics',
        // shortDescription: 'Análisis y visualización detallada del ciclo de vida de los datos...', // DESCRIPCIÓN ELIMINADA
        image: ImgCertificado1, 
        tags: ['SQL', 'R', 'Tableau', 'Google'],
        hasComponent: true 
    },
    {
        id: 'powerbii', 
        title: 'Dashboard de Gestión de Prestadores (Fase I)',
        // shortDescription: 'Implementación inicial de un dashboard de Business Intelligence en Power BI...', // DESCRIPCIÓN ELIMINADA
        image: ImgProyecto2, 
        tags: ['Power BI', 'DAX', 'KPIs', 'Data Modeling'],
        hasComponent: true 
    },
    {
        id: 'powerbiii', // El ID para la Fase II
        title: 'Dashboard de Gestión de Prestadores (Fase II)',
        image: ImgProyecto3, // Imagen de portada para la Fase II
        // (Si no tienes portada, usa un placeholder)
        // image: 'https://placehold.co/600x400/1a1a3a/00f0ff?text=POWER+BI+FASE+II',
        tags: ['Power BI', 'DAX', 'KPIs', 'Optimización'],
        hasComponent: true // Es clickeable
    },
    {
        id: 'PPP', // ID para el nuevo proyecto
        title: 'PPP',
        image: ImgProyecto4, // Imagen de portada para este proyecto
        // (o usa un placeholder)
        // image: 'https://placehold.co/600x400/1a1a3a/9c2da6?text=ANALISIS+DE+CAUSA+RAIZ',
        tags: ['Power BI', 'Análisis Causa Raíz', 'KPIs', 'ETL'],
        hasComponent: true // Es clickeable
    },
    {
        id: 'sharepoint', // ID para el nuevo proyecto
        title: 'Portal Interno de Desarrollo (SharePoint)',
        image: GifProyecto5_Cover, // GIF de portada para este proyecto
        tags: ['SharePoint', 'Gestión', 'Procesos', 'Salesforce'],
        hasComponent: true // Es clickeable
    },
   {
        id: 'rrhh-dashboard', // ID para el proyecto 6
        title: 'Dashboard Operativo de RRHH (Rotación)',
        image: ImgProyecto6_Cover, // Imagen única de portada
        tags: ['Power BI', 'RRHH', 'Rotación', 'KPIs'],
        hasComponent: true // Es clickeable
    },
];

// --- COMPONENTE ProjectCard ---
interface ProjectProps {
    // Se ha modificado la estructura de projectList para eliminar shortDescription si existía
    project: {
        id: string;
        title: string;
        image: string;
        tags: string[];
        hasComponent: boolean;
    };
}

const cardStyle: React.CSSProperties = {
    backgroundColor: '#1a1a3a', // Fondo oscuro
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    border: '1px solid #9c2da6' // Borde sutil del color principal
};

const titleStyle: React.CSSProperties = {
    color: '#00f0ff', // Color claro para el título
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
};

// Estilo ajustado para el tag, ahora que contiene iconos/emojis y texto corto
const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#333366',
    color: '#fff',
    padding: '0.3rem 0.6rem', // Aumentado el padding para el icono
    borderRadius: '15px', // Más redondo para verse como un "chip"
    fontSize: '0.8rem', // Tamaño ligeramente mayor para el icono/texto
    marginRight: '0.5rem',
    marginTop: '0.5rem',
    fontWeight: 'bold',
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    
    // 1. Usar el hook useNavigate para la navegación real
    const navigate = useNavigate();

    // Función para manejar el clic y la navegación condicional
    const handleProjectClick = () => {
        if (project.hasComponent) {
            // REDIRECCIÓN REAL: Usa el ID del proyecto en la ruta definida en App.tsx (/project/:id)
            navigate(`/project/${project.id}`);
        } else {
            // SIMULACIÓN para proyectos sin página de detalle aún
            alert('¡Próximamente! Este proyecto aún no tiene una página de detalle dedicada.');
        }
    };

    // Estilo para el contenedor clickeable, que será la tarjeta completa
    const clickableContainerStyle: React.CSSProperties = {
        padding: '1.5rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        // Cambiar el cursor y la sombra cuando se puede hacer clic
        cursor: project.hasComponent ? 'pointer' : 'default', 
    };

    return (
        <div 
            style={{ 
                ...cardStyle, 
            }}
            // Usamos onMouseEnter/Leave para simular el efecto de hover en estilos inline
            onMouseEnter={(e) => {
                if(project.hasComponent) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(156, 45, 166, 0.7)';
                }
            }}
            onMouseLeave={(e) => {
                if(project.hasComponent) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
                }
            }}
            onClick={handleProjectClick}
        >
            {/* Aquí es donde se muestra la imagen */}
            <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                    width: '100%', 
                    height: '200px', // Altura fija para las imágenes de la tarjeta
                    objectFit: 'contain', 
                    borderBottom: '1px solid #9c2da6' 
                }} 
            />
            <div style={clickableContainerStyle}>
                <h3 style={titleStyle}>{project.title}</h3>
                {/* <p style={{ color: '#ccc', marginBottom: '1rem' }}>{project.shortDescription}</p> */} 
                <div style={{ marginTop: 'auto' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={tagStyle}>
                            {/* MOSTRAR ICONO/EMOJI EN LUGAR DE SOLO EL TAG */}
                            {getIconForTag(tag)}
                        </span>
                    ))}
                </div>
                {/* Indicador visual de que el proyecto es navegable */}
                <div style={{ color: project.hasComponent ? '#00f0ff' : '#aaa', fontSize: '0.8rem', marginTop: '1rem', fontWeight: 'bold' }}>
                    {project.hasComponent ? 'Ver Detalle ➡️' : 'Detalle Próximamente...'}
                </div>
            </div>
        </div>
    );
}

// --- COMPONENTE PortfolioPage PRINCIPAL ---
export function PortfolioPage() {

    const gridStyle: React.CSSProperties = {
        display: 'grid',
        // Estilo RESPONSIVE: 3 columnas en escritorio, ajustándose en móvil.
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
        padding: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const h2Style: React.CSSProperties = {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 800,
        color: '#9c2da6',
        fontSize: '2.5rem',
        textAlign: 'center',
        textShadow: '0 0 10px rgba(156, 45, 166, 0.5)',
        marginBottom: '2rem',
        marginTop: '3rem',
    };

    return (
        <div style={{ padding: '0 1rem' }}>
            
            {/* 2. TÍTULO DE LA SECCIÓN DE PROYECTOS */}
            <h2 style={h2Style}>
                [ 💻 Proyectos! 🌐 ]
            </h2>

            {/* 3. GRID DE PROYECTOS */}
            <div style={gridStyle}>
                {/* Mapeo de la lista de proyectos para renderizar las tarjetas */}
                {projectList.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}