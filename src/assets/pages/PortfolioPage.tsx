import React from 'react';
// Importamos useNavigate para la redirección real
import { useNavigate } from 'react-router-dom'; 

// Importación corregida: Apuntando a la ubicación estándar de layouts

/*import { BannerProfile } from '../modules/BannesProfile';*/
// NOTA: Se ha asumido que BannerProfile.tsx se encuentra en layouts/

// --- IMPORTACIONES DE IMÁGENES DE PROYECTOS (SOLO LAS EXISTENTES) ---
import ImgCertificado1 from '../img/portada ceritificado 1.png';
import ImgProyecto2 from '../img/tablero.png';
// NOTA: Los siguientes proyectos usan imágenes placeholder temporales.

// --- LISTA DE PROYECTOS EXTENDIDA (6 Proyectos) ---
const projectList = [
    {
        id: 'certificados', 
        title: 'Certificación Profesional: Google Data Analytics', // Título de la certificación
        shortDescription: 'Análisis y visualización detallada del ciclo de vida de los datos, demostrando dominio de SQL, R, Tableau y técnicas avanzadas de Data Storytelling.', // Descripción mejorada para Certificados
        // Usamos la imagen local importada para el primer proyecto
        image: ImgCertificado1, 
        tags: ['SQL', 'R', 'Tableau', 'Google'],
        // Propiedad para indicar si el proyecto tiene un componente de destino
        hasComponent: true 
    },
    {
        id: 'powerbii', 
        title: 'Dashboard de Gestión de Prestadores (Fase I)', // Título de Power BI Fase I
        shortDescription: 'Implementación inicial de un dashboard de Business Intelligence en Power BI, enfocado en el seguimiento de métricas clave (KPIs) de captación y rendición de cuentas (funnel de personal).', // Descripción profesional para Power BI
        // Usamos la imagen local importada para el segundo proyecto
        image: ImgProyecto2, 
        tags: ['Power BI', 'DAX', 'KPIs', 'Data Modeling'],
        hasComponent: true 
    },
    {
        id: 'e-commerce-v3',
        title: 'Plataforma E-commerce Escalable',
        shortDescription: 'Reingeniería de monolito a microservicios (NestJS, RabbitMQ) para 10k transacciones/segundo.',
        // URL PLACEHOLDER: Imagen temporal para E-commerce
        image: 'https://placehold.co/600x400/1a1a3a/00f0ff?text=E-COMMERCE+MICROSERVICES',
        tags: ['Microservicios', 'NestJS', 'RabbitMQ', 'Docker'],
        hasComponent: false
    },
    {
        id: 'ml-model',
        title: 'Modelo de Predicción de Churn',
        shortDescription: 'Implementación de un modelo de Machine Learning (XGBoost) para predecir la baja de clientes con un 92% de precisión.',
        // URL PLACEHOLDER: Imagen temporal para ML Model
        image: 'https://placehold.co/600x400/1a1a3a/9c2da6?text=MACHINE+LEARNING+MODEL',
        tags: ['Python', 'Machine Learning', 'XGBoost', 'Scikit-learn'],
        hasComponent: false
    },
    {
        id: 'power-bi-dash',
        title: 'Dashboard de Rendimiento Comercial',
        shortDescription: 'Creación de un dashboard interactivo en Power BI para seguimiento de KPIs de ventas en tiempo real.',
        // URL PLACEHOLDER: Imagen temporal para Dashboard BI
        image: 'https://placehold.co/600x400/1a1a3a/00f0ff?text=POWER+BI+DASHBOARD',
        tags: ['Power BI', 'DAX', 'KPIs', 'Data Modeling'],
        hasComponent: false
    },
    {
        id: 'etl-pipeline',
        title: 'Pipeline de Datos con Python',
        shortDescription: 'Desarrollo de un script ETL en Python para limpiar y transformar datos de múltiples fuentes y cargarlos a PostgreSQL.',
        // URL PLACEHOLDER: Imagen temporal para ETL
        image: 'https://placehold.co/600x400/1a1a3a/9c2da6?text=PYTHON+ETL+PIPELINE',
        tags: ['Python', 'ETL', 'PostgreSQL', 'Pandas'],
        hasComponent: false
    },
];

// --- COMPONENTE ProjectCard ---
interface ProjectProps {
    project: typeof projectList[0];
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

const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#333366',
    color: '#fff',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    marginRight: '0.4rem',
    marginTop: '0.5rem',
};

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    
    // 1. Usar el hook useNavigate para la navegación real
    const navigate = useNavigate();

    // Función para manejar el clic y la navegación condicional
    const handleProjectClick = () => {
        if (project.hasComponent) {
            // REDIRECCIÓN REAL: Usa el ID del proyecto en la ruta definida en App.tsx (/project/:id)
            navigate(`/project/${project.id}`);
            // El alert() anterior se elimina para que la redirección sea directa.
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
                    objectFit: 'contain', // <-- ¡CORRECCIÓN APLICADA AQUÍ!
                    borderBottom: '1px solid #9c2da6' 
                }} 
            />
            <div style={clickableContainerStyle}>
                <h3 style={titleStyle}>{project.title}</h3>
                <p style={{ color: '#ccc', marginBottom: '1rem' }}>{project.shortDescription}</p>
                <div style={{ marginTop: 'auto' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={tagStyle}>
                            {tag}
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