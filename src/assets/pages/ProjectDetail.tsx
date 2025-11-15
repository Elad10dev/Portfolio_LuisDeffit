import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button'; 
import ImgFondo from '../img/proyectos fondo.jpg';
import certificadouno from "../img/portada ceritificado 1.png"; 

// --- NUEVA IMPORTACIÓN DEL ICONO GIF DE DESCARGA ---
import ImgDownload from '../img/analitica.gif'; 

// --- 1. IMPORTACIONES DE CERTIFICADOS Y CV ---
// NOTA: Los nombres de archivo se mantienen como los tenías.
import ImgCertificado14 from '../img/certificado 14.png'; // Portada principal
import ImgCertificado2 from '../img/Certificado 2.png'; 
import ImgCertificado4 from '../img/Certificado 3.png'; 
import ImgCertificado3 from '../img/Certificado 4.png'; 
/*import ImgCertificado5 from '../img/Certificado 5.png';*/ 
import ImgCertificado6 from '../img/Certificado 6.png'; 
import ImgCertificado7 from '../img/Certificado 7.png'; 
import ImgCertificado8 from '../img/Certificado 8.png';
import ImgCertificado10 from '../img/certificado 10.png'; 
import ImgCertificado111 from '../img/certificado 11.png'; 
import ImgCertificado12 from '../img/certificado 12.png'; 
import ImgCertificado13 from '../img/certificado 13.png';
import ImgCertificado9 from '../img/certificado 9.png'; 

import CVEsp from '../img/1.CV_Luis_Gutierrez_Deffit_ES.pdf';
import CVEng from '../img/1.Data analytics -LuisDeffit .pdf';


// --- INTERFAZ DEL PROYECTO (Resuelve el error TS2304: Cannot find name 'Project') ---
interface Project {
    title: string;
    fullDescription: string;
    stack: string;
    images: string[]; 
    projectType?: 'certificate' | 'standard'; 
    subProjectDetails?: { title: string; url: string; description?: string; skills?: string[]; emojis?: string[] }[];
}


// --- URLs DE CREDENCIALES (Alineadas con tu información) ---
const certificateUrls = [
    // 0: Certificado principal
    'https://www.credly.com/badges/c2da7100-fd01-4ebf-a3d9-db7a208a0103/linked_in_profile', 
    // 1: Databricks
    'https://credentials.databricks.com/dea4bbba-8692-4be0-9586-108c424abdb9#acc.04a7uXkO', 
    // 2: microsoft datos
    'https://www.linkedin.com/learning/certificates/0661b247961d0d01c9de69215aed8332f5259428410c75e7f25a335f48a8c4fb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D', 
    // 3: Google Data Analytics (V2 - Badge principal)
    'https://www.credly.com/badges/c2da7100-fd01-4ebf-a3d9-db7a208a0103/linked_in_profile', 
    // 4: Microsoft Fundamentos de Seguridad
    'https://www.linkedin.com/learning/certificates/78cb35f1713bc6fe41e243d60f73d26c9f631f8e0de001c6fa96f5fe6b339a6b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D', 
    // 5: Microsoft Azure AI Essentials
    'https://www.linkedin.com/learning/certificates/14ff82d34ec4c6a3320989830bb7955dfa00f5574edc8002f73d6c527df41416?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D', 
    // 6: Fundamentos Análisis de Datos (LinkedIn)
    'https://www.linkedin.com/learning/certificates/0661b247961d0d01c9de69215aed8332f5259428410c75e7f25a335f48a8c4fb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bvsesy5mJTrKWYL6cH2EvTg%3D%3D', 
    // 7: Microsoft Copilot
    'https://www.linkedin.com/learning/certificates/72fe157dfcdd4a252ae345d6c3f39b6db851c495144a836c73bafdf3e106e488?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D', 
    // 8: SharePoint Online: Administración
    'https://cursos.desafiolatam.com/certificates/yzozngeew2', 
    // 9: Power BI: Modelado de datos con Power Query
    'https://www.credly.com/badges/1bd2916f-65b2-43b4-9f10-f4ade109f88c/linked_in_profile', 
    // 10: Preparación de datos con dataflows en Power BI
    'https://www.linkedin.com/learning/certificates/3a2f0e19b0ca05934d80bbe3028ff59d49fe24bb93a4e2eb2cb369bcfa1411af?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D',
    // 11: Ataques, amenazas y vulnerabilidades de ciberseguridad (CompTIA Security+)
    'https://www.linkedin.com/learning/certificates/ccc5d87523361e438fdd44fd469c1399a4e50b3661b20fc36832c9a40c1f8237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D',
    // 12: Data analyst: Técnicas y herramientas de informes avanzado
    'https://www.linkedin.com/learning/certificates/5800c6f191b7a9fa40b0aed07f0f1671df051a30e4ce305dd5a78f1e0f902858?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D',
    // 13: Tableau Esencial (Se mantiene como respaldo, aunque la lista de URLs puede ser diferente)
    'https://www.linkedin.com/learning/certificates/24f90b16c03681ccf0f76fd16e8b922f07c5d9a57a8e0a671f83f019e0a2030e',
    // 14: Tableau Esencial (Se mantiene como respaldo, aunque la lista de URLs puede ser diferente)
    'https://www.linkedin.com/learning/certificates/621b98c26ea38cae31381a3623fa4d2fb9633daff9fc05ed867cef8c67c3876b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BGBcgiFgGQxO%2FkU81NYQZBg%3D%3D'
];


// --- 2. ASIGNACIÓN DE IMPORTACIONES Y CREACIÓN DEL ARRAY DE CERTIFICADOS (REORDENADO) ---
const allCertificates = [
    certificadouno,
    ImgCertificado2,
    ImgCertificado8,
    ImgCertificado9,
    ImgCertificado7, // 0: Portada General de Google (Se queda como índice 0 para la imagen de portada)
    ImgCertificado6, // 1: Google - Foundations
    ImgCertificado3, // 2: Google - Ask Questions
    ImgCertificado4, // 3: Google - Prepare Data
    ImgCertificado10, // 4: Google - Process Data
    ImgCertificado111, // 5: Google - Analyze Data
    ImgCertificado12, // 6: Google - Share Data
    ImgCertificado13, // 7: Google - R Programming
     // 8: Google - Capstone
    ImgCertificado14
     
];

// Ajustamos el array de detalles a 13 elementos para cubrir todos los certificados con sus URLs

const certificateDetails: Project['subProjectDetails'] = [
    // 0: PORTADA GENERAL GOOGLE (Imagen ImgCertificado1) - Usamos la URL de Credly V2
    {
    title: 'Certificado Profesional en Análisis de Datos de Google',
    url: certificateUrls[3], // Credencial principal de Google
    description: `Certificación integral que valida la competencia de nivel inicial en el ciclo completo de análisis de datos. 
        Este programa intensivo se construyó sobre **ocho módulos clave** (Foundations, Ask, Prepare, Process, Analyze, Share, R Programming, y Capstone), asegurando el dominio práctico en:
        
        * **Fundamentos de Datos y Pensamiento Analítico:** Capacidad para formular preguntas estratégicas e impulsar decisiones basadas en datos.
        * **Limpieza y Procesamiento de Datos (Dirty to Clean):** Habilidad para limpiar, transformar y preparar conjuntos de datos complejos.
        * **Análisis Avanzado y Storytelling:** Aplicación de análisis estadístico para responder preguntas y narrar la historia de los datos de manera efectiva (Data Storytelling).
        
        Los graduados demuestran competencia técnica en el uso de **hojas de cálculo avanzadas, SQL, Tableau y R**, culminando con un proyecto Capstone que simula un escenario real de la industria.`,
    // Lista de habilidades actualizada con el objetivo de usar React-Icons
    skills: [
        // Reemplazar los strings con componentes de React-Icons (e.g., FaDatabase, FaTable, FaRProject)
        'SQL', 
        'Tableau', 
        'R Programming', 
        'Data Storytelling', 
        'Data Cleaning',
        'Análisis Estadístico'
    ],
    
    
},
    // 1: DATABRICKS (Imagen ImgCertificado10 - reubicado)
    {
    title: 'Databricks Data Intelligence Platform',
    url: certificateUrls[1],
    description: `Acreditación que valida la comprensión de los **conceptos clave de la Plataforma Databricks Data Intelligence**. 
        Este conocimiento fundamental abarca la integración de **Plataformas de Gestión de Datos** y es esencial para orquestar la **analítica de datos a escala**, la **Inteligencia Artificial (IA)** y la **Ingeniería de Datos** moderna.`,
    skills: [
        'Databricks', 
        'Data Intelligence', 
        'Plataformas de Gestión de Datos', 
        'Analítica a Escala', 
        'IA',
        'Ingeniería de Datos'
    ]
},
    // 2: ISC2 (Imagen ImgCertificado11 - reubicado)
    { 
        title: 'Fundamentos profesionales del análisis de datos',
        url: certificateUrls[2],
        description: `Acreditación que proporciona una **base sólida en los conceptos fundamentales del Análisis y la Analítica de Datos**. 
        El curso valida la competencia en la exploración de las principales **herramientas de software** de análisis del sector y el desarrollo de habilidades clave en la **Visualización de Datos** para comunicar hallazgos de manera efectiva.`,
        skills: [
        'Análisis de Datos', 
        'Analítica de Datos', 
        'Visualización de Datos', 
        'Herramientas de Software de Análisis']
    },
    // 3: MICROSOFT FUNDAMENTOS DE SEGURIDAD (Imagen ImgCertificado12 - reubicado)
    { 
        title: 'Microsoft Copilot para productividad',
        url: certificateUrls[4], // Asumiendo que 'certificateUrls' está definido y es accesible
        description: `Acreditación centrada en la optimización de flujos de trabajo y el aumento de la productividad mediante el uso de la **Inteligencia Artificial (IA) generativa y Microsoft Copilot**. 
            El curso demuestra la competencia en:
        
            * **Implementación de IA en Microsoft 365** para incrementar la colaboración.
            * Uso de **Herramientas de IA generativa** para crear, refinar y perfeccionar documentos y presentaciones.
            * Dominio en la redacción rápida y eficiente (\`prompting\`).`,
        skills: [
            // Uso de strings para los nombres de las habilidades
            'Microsoft Copilot', 
            'Microsoft 365', 
            'IA Generativa', 
            'Optimización de Flujos de Trabajo', 
            'Colaboración con IA'
    ],
    },
    // 4: MICROSOFT AZURE AI ESSENTIALS (Imagen ImgCertificado13 - reubicado)
    { 
        title: 'Certificado profesional Microsoft Azure AI Essentials de Microsoft ',
        url: certificateUrls[5],
        description: `Acreditación avanzada que fusiona el dominio en **cargas de trabajo de IA en Azure** con la aplicación práctica de herramientas de productividad como **Microsoft Copilot** y la **IA generativa**.
        El curso valida la comprensión de **LLMs** y **NLP**, optimizando los flujos de trabajo de negocio y la productividad mediante:
        
        * **Análisis y desarrollo de modelos de lenguaje grande (LLMs)** en Azure.
        * **Optimización de flujos de trabajo** y aumento de la colaboración con herramientas impulsadas por IA.
        * Creación y perfeccionamiento de documentos y presentaciones usando **IA generativa**.`,
    skills: [
        'Azure AI Studio', 
        'Microsoft Copilot', 
        'IA Generativa', 
        'Machine Learning', 
        'LLMs (Modelos de Lenguaje Grande)', 
        'NLP (Procesamiento de Lenguaje Natural)'
    ]
    },
    // 5: MICROSOFT COPILOT (Imagen ImgCertificado7)
    { 
        title: 'Certificado Profesional de Fundamentos de Seguridad, por Microsoft',
        url: certificateUrls[7],
        description: `Acreditación que valida el conocimiento fundamental de la ciberseguridad, enfocado en las plataformas de Microsoft. El programa cubre:

        * **Conceptos de Seguridad:** Dominio de modelos esenciales como **Confianza Cero** (Zero Trust) y **Defensa en Profundidad** (Defense in Depth).
        * **Gestión de Identidades y Acceso (IAM):** Uso de **Microsoft Entra** (anteriormente Azure AD) para la gestión robusta de identidades y accesos.
        * **Detección y Respuesta:** Configuración de ajustes básicos de seguridad en **Microsoft Defender** y utilización de **Microsoft Sentinel** (SIEM) para la detección y respuesta automatizada a amenazas.
        * **Gobierno y Riesgo:** Aplicación de conceptos de **GRC** (Gobernanza, Riesgo y Cumplimiento) y **Seguridad en la Nube** para establecer políticas de protección integrales.`,
        skills: [
        'Confianza Cero (Zero Trust)', 
        'Defensa en Profundidad', 
        'Microsoft Entra (IAM)', 
        'Microsoft Defender', 
        'Microsoft Sentinel (SIEM)', 
        'Seguridad de Cloud', 
        'GRC (Gobernanza, Riesgo y Cumplimiento)'
        ]
    },
    // 6: SHAREPOINT ONLINE ADMIN (Imagen ImgCertificado8)
    { 
        title: 'Introducción al Análisis de datos con Python',
        url: certificateUrls[8],
        description: `Curso fundamental que establece las bases del análisis de datos utilizando el ecosistema de Python. 
        Los participantes aprenden a importar, limpiar y transformar datos, y a realizar análisis exploratorios clave. 
        Se valida la competencia en el manejo de las principales bibliotecas del sector para manipular datos y generar visualizaciones.`,
    skills: [
        'Python', 
        'Pandas (Manipulación de Datos)', 
        'NumPy (Computación Numérica)', 
        'Matplotlib', 
        'Seaborn (Visualización de Datos)',
        'Análisis Exploratorio de Datos (EDA)'
    ]
    },
    // 7: POWER BI: MODELADO DE DATOS CON POWER QUERY (Imagen ImgCertificado9)
    { 
        title: 'ISC2',
        url: certificateUrls[9],
        description: `Reconocimiento formal de la mayor organización mundial de profesionales de la ciberseguridad. 
        Este estatus valida el **compromiso ético** con el Código de Ética de ISC2 y el cumplimiento con los estrictos **estándares de calidad ISO/IEC 17024**. 
        Representa una base sólida en el CBK® (Common Body of Knowledge) y la aceptación de los referentes globales en seguridad de la información, software e infraestructura.`,
    skills: [
        'Ciberseguridad', 
        'Seguridad de la Información', 
        'Ética Profesional', 
        'ISO/IEC 17024', 
        'Infraestructura Segura',
        'CBK (Common Body of Knowledge)'
    ]
    },
    // 8: PREPARACIÓN DE DATOS CON DATAFLOWS (Imagen ImgCertificado10 - reubicado)
    { 
        title: 'Microsoft SharePoint Online: Administración',
        url: certificateUrls[10],
        description: `Formación enfocada en la **administración eficaz de SharePoint Online** dentro del ecosistema Microsoft 365. 
        El contenido valida la competencia en el uso del **Centro de Administración de SharePoint Online** y las características de Microsoft 365 para tareas críticas como:
        
        * **Protección de datos empresariales** y cumplimiento de seguridad.
        * **Gestión de usuarios** y permisos de acceso.
        * **Optimización y gestión del almacenamiento** en la nube.`,
        skills: [
        'Administración de SharePoint Online', 
        'Microsoft 365', 
        'Gestión de Usuarios y Acceso', 
        'Seguridad de Datos', 
        'Administración Cloud'
        ]
    },
    // 9: CYBERSEGURIDAD (Imagen ImgCertificado11 - reubicado)
    { 
        title: 'Power BI: Modelado de datos con Power Query',
        url: certificateUrls[11],
        description: `Curso práctico que simplifica los procesos de **modelado y transformación de datos** dentro de Power BI. 
        Valida la competencia en el uso de las opciones y paneles de **Power Query** y ofrece una introducción al lenguaje de consultas **M**. 
        Los conocimientos adquiridos permiten superar los desafíos de la fase de **exploración y limpieza** de datos, desde lo simple hasta la complejidad del día a día.`,
        skills: [
        'Microsoft Power BI', 
        'Microsoft Power Query', 
        'Lenguaje M (Power Query Formula Language)', 
        'Modelado de Datos', 
        'Transformación ETL'
        ]
    },
    // 10: INFORMES AVANZADOS (Imagen ImgCertificado12 - reubicado)
    { 
        title: 'Preparación de datos con dataflows en Power BI',
        url: certificateUrls[12],
        description: `Curso avanzado que se enfoca en el **arte de la preparación de datos** utilizando Dataflows en un ambiente virtual (Cloud). 
        El contenido guía a través de **Power Query en la nube**, profundizando en el **lenguaje M** y desentrañando las peculiaridades de los flujos de datos y su **integración en áreas de trabajo colaborativas**. 
        Además, explora las capacidades de **Inteligencia Artificial (IA)** nativas de Power BI para el análisis de los Dataflows, abordando desafíos prácticos de alto nivel.`,
        skills: [
        'Preparación de Datos', 
        'Microsoft Power BI Dataflows', 
        'Lenguaje M (Avanzado)', 
        'Inteligencia Artificial en BI', 
        'Power Query Cloud', 
        'Análisis Colaborativo'
        ]
    },
    // 11: INTRODUCCIÓN A PYTHON (Imagen ImgCertificado4)
    { 
        title: 'Tableau esencial',
        url: certificateUrls[13],
        description: `Formación práctica para dominar Tableau, permitiendo la creación sencilla de informes y análisis para la **toma de mejores decisiones**. 
        El curso instruye sobre:
        
        * **Carga y manipulación de datos** desde diversos orígenes.
        * Creación de **informes avanzados** y **modelos de datos eficaces**.
        * **Extracción de información valiosa** para el negocio.
        
        El contenido refuerza los conceptos básicos de la **visualización de datos** y la comunicación efectiva de proyectos.`,
        skills: [
        'Tableau', 
        'Visualización de Datos', 
        'Análisis de Datos', 
        'Modelado de Datos (Tableau)', 
        'Manipulación de Datos', 
        'Comunicación de Proyectos'
        ]
    },
    // 12: FUNDAMENTOS PROF. ANÁLISIS DE DATOS (Imagen ImgCertificado6)
    { 
        title: 'Ataques, amenazas y vulnerabilidades de ciberseguridad (CompTIA Security+ SY0-601)',
        url: certificateUrls[14],
        description: `Certificado que valida la competencia fundamental en la **Detección y Respuesta a Incidentes de Ciberseguridad**. 
        El curso proporciona habilidades críticas para la **Gestión proactiva de Amenazas y Vulnerabilidades**, capacitando al profesional para identificar riesgos y aplicar estrategias defensivas en entornos tecnológicos.`,
        skills: [
        'Gestión de Amenazas', 
        'Gestión de Vulnerabilidades', 
        'Detección de Amenazas', 
        'Ciberseguridad', 
        'Análisis de Riesgos'
        ]
    },
    
    // NOTA: Los certificados de Google Foundations, Ask Questions, Prepare, Process, Analyze, Share, R Programming, y Capstone no están aquí individualmente, ya que se asume que forman parte del "Certificado Profesional Google Data Analytics" (índice 0). Si necesitas listarlos individualmente, habría que reestructurar el array. Por ahora, se priorizan las certificaciones externas e individuales.
];


// --- DATOS DE PROYECTOS ACTUALIZADOS (Solo para este componente, que maneja 'certificados') ---
const dummyProjectDetails: { [key: string]: Project } = {
    // ID alineado con PortfolioPage.tsx y App.tsx
    'certificados': { 
        title: 'Certificación Profesional: Data Analytics (Completa)',
        fullDescription: 'Este carrusel presenta las certificaciones de Google Data Analytics junto con acreditaciones clave de Databricks, ISC2 y cursos de especialización de Microsoft/LinkedIn Learning, que cubren desde el ciclo de vida del dato hasta ciberseguridad y IA. Utilice las flechas para explorar cada acreditación individual.',
        stack: 'Habilidades: SQL, R, Python, Tableau, Power BI, Databricks, Azure, Seguridad GRC.',
        images: allCertificates, 
        projectType: 'certificate',
        subProjectDetails: certificateDetails,
    },
    // Mantenemos cloud-infra por si se usa en la ruta dinámica, pero no se renderizará
    'cloud-infra': {
        title: 'Infraestructura Serverless (Serverless)',
        fullDescription: 'Diseñé una arquitectura Serverless completa para manejar flujos de pago, eliminando los costos fijos de servidores. Utilizamos AWS Lambda para la lógica, DynamoDB para la persistencia de datos de baja latencia y SQS para garantizar la entrega de mensajes. Esto resultó en una reducción de costos operativos del 60%.',
        stack: 'Tecnologías Clave: AWS Lambda, API Gateway, DynamoDB, SQS, TypeScript.',
        images: [
            'https://placehold.co/800x450/1a1a3a/9c2da6?text=Cloud+Architecture',
            'https://placehold.co/800x450/1a1a3a/00f0ff?text=API+Flow'
        ],
        projectType: 'standard'
    },
};

// ***************************************************************
// EL NOMBRE DE LA FUNCIÓN SE MANTIENE COMO ProjectDetail
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
                            Verificacion ( Certificated : {currentImageIndex + 1}/{project.images.length})
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
                    <p style={{ color: '#b0e0e6', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                        {project.fullDescription}
                    </p>
                )}
                
               
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