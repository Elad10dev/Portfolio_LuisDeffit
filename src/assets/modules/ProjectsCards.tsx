import React, { useState } from 'react'; // --- MODIFICADO --- (Importamos useState)
import { useNavigate } from 'react-router-dom';
// --- RUTA CORREGIDA ---
import ImgProf from '../img/Foto Perfil.jpg'; 

// --- NUEVA IMPORTACIÓN DEL ICONO GIF (RUTA CORREGIDA) ---
// Asumiendo que 'analitica.gif' es el que quieres usar para descargar
import ImgDownload from '../img/analitica.gif'; 

// --- IMPORTACIONES DE CV (RUTAS CORREGIDAS) ---
const cvEsp = '../assets/img/1.CV_Luis_Gutierrez_Deffit_ES.pdf';
const cvEng = '../assets/img/1.Data analytics -LuisDeffit .pdf';

// Datos de perfil enfocados en el valor para el reclutador
const profileData = {
    name: "Luis Alejandro Gutiérrez Deffit",
    role: "DATA ANALYST | BI SPECIALIST | IMPACTO EN SALUD", 
    tagline: "Transformando datos complejos en decisiones estratégicas que optimizan la infraestructura y el rendimiento empresarial.",
    whatsappPhone: "+54 9 11 2389-8273", 
    whatsappLink: "5491123898273", 
    email: "luis2692@gmail.com", 
    linkedin: "https://www.linkedin.com/in/luisagdeffit/", 
    imageUrl: ImgProf,
};

// Helper para detectar si estamos en un tamaño de pantalla grande (simulando Media Query)
const IS_DESKTOP = window.innerWidth >= 768;

export function BannerProfile() {
    const navigate = useNavigate();
    
    // --- NUEVO: ESTADOS PARA LA ANIMACIÓN DE CLICK ---
    const [isAnimatingEsp, setIsAnimatingEsp] = useState(false);
    const [isAnimatingEng, setIsAnimatingEng] = useState(false);

    // Colores y fuentes de la estética científica (Orbitron y Roboto Mono)
    const baseStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        color: '#e0f2f7',
    };

    const ACCENT_COLOR = '#9c2da6';
    const SECONDARY_COLOR = '#00f0ff';
    const ACCENT_SHADOW = 'rgba(156, 45, 166, 0.9)';

    // Estilo para los enlaces de contacto y hover
    const contactLinkStyle: React.CSSProperties = {
        color: SECONDARY_COLOR, // Cian
        textDecoration: 'none',
        fontWeight: 'normal',
        transition: 'color 0.3s',
        display: 'inline-flex',
        alignItems: 'center',
    };
    
    // Función para manejar el efecto hover en los enlaces
    const handleHover = (e: React.MouseEvent<HTMLAnchorElement>, color: string) => {
        e.currentTarget.style.color = color;
    };

    // --- FUNCIÓN DE DESCARGA DE CV (SIN CAMBIOS) ---
    const handleDownloadClick = (lang: 'ESP' | 'ENG') => {
        const url = lang === 'ESP' ? cvEsp : cvEng;
        const fileName = lang === 'ESP' ? 'CV_Luis_Deffit_ES.pdf' : 'CV_Luis_Deffit_EN.pdf';
        
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        console.log(`Iniciando descarga de CV en ${lang}...`);
    };

    // --- NUEVO: FUNCIÓN QUE GESTIONA EL CLICK (ANIMACIÓN + DESCARGA) ---
    const triggerDownload = (lang: 'ESP' | 'ENG') => {
        // 1. Activa la animación
        if (lang === 'ESP') {
            setIsAnimatingEsp(true);
        } else {
            setIsAnimatingEng(true);
        }

        // 2. Llama a la descarga
        handleDownloadClick(lang);

        // 3. Resetea la animación después de 300ms
        setTimeout(() => {
            if (lang === 'ESP') {
                setIsAnimatingEsp(false);
            } else {
                setIsAnimatingEng(false);
            }
        }, 300); // 300ms es la duración de la animación
    };


    // --- NUEVO: ESTILO PARA LOS ICONOS GIF ---
    const downloadIconStyle: React.CSSProperties = {
        width: '80px', // Ajusta el tamaño del GIF
        height: '80px', // Ajusta el tamaño del GIF
        cursor: 'pointer',
        transition: 'transform 0.3s ease, filter 0.3s',
        filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.7))', // Sombra cian
        objectFit: 'contain',
    };

    // --- NUEVO: ESTILO DE LA ANIMACIÓN (se aplica condicionalmente) ---
    const iconAnimationStyle: React.CSSProperties = {
        transform: 'scale(1.25)', // "Salta" al 125%
        filter: 'drop-shadow(0 0 15px rgba(156, 45, 166, 1))', // Sombra morada intensa
    };
    
    // (El resto del componente ... h1, h2, p, etc. ... no cambia)
    
    return (
        <header 
            style={{ 
                ...baseStyle,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                marginBottom: '2rem',
                backgroundColor: 'rgba(10, 10, 20, 0.95)',
                border: '2px solid #00f0ff',
                borderRadius: '12px',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)',
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                flexDirection: 'column', 
            }}
        >
            {/* CONTENEDOR PRINCIPAL */}
            <div
                onClick={() => navigate('/')}
                style={{ 
                    cursor: 'pointer',
                    display: 'flex', 
                    flexDirection: IS_DESKTOP ? 'row' : 'column',
                    alignItems: IS_DESKTOP ? 'center' : 'center',
                    gap: IS_DESKTOP ? '3rem' : '1rem', 
                    maxWidth: '1000px',
                    width: '100%',
                    padding: '0 1rem',
                    marginBottom: IS_DESKTOP ? '1.5rem' : '1rem'
                }}
            >
                {/* 1. IMAGEN DE PERFIL */}
                <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: `5px solid ${ACCENT_COLOR}`, 
                    marginBottom: IS_DESKTOP ? '0' : '1.5rem', 
                    boxShadow: `0 0 25px ${ACCENT_SHADOW}`, 
                    flexShrink: 0
                }}>
                    <img 
                        src={profileData.imageUrl} 
                        alt="Perfil de Usuario" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                
                {/* 2. TEXTO DEL PERFIL Y CONTACTO */}
                <div style={{
                    textAlign: IS_DESKTOP ? 'left' : 'center',
                    flexGrow: 1, 
                }}>
                    <h1 style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        color: SECONDARY_COLOR,
                        fontSize: IS_DESKTOP ? '3.2rem' : '2.8rem', 
                        textShadow: '0 0 15px rgba(0, 240, 255, 0.8)',
                        marginBottom: '0.25rem',
                    }}>
                        {profileData.name}
                    </h1>
                    
                    {/* H2 - ROL */}
                    <h2 style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        color: ACCENT_COLOR, // Morado
                        fontSize: IS_DESKTOP ? '1.7rem' : '1.4rem',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        marginBottom: '0.75rem',
                        lineHeight: '1.3',
                    }}>
                        {profileData.role}
                        <br/>
                        <span style={{ fontSize: IS_DESKTOP ? '1.1rem' : '1rem', color: '#b0e0e6', fontWeight: 'normal' }}>
                            Data Analyst | Business Intelligence | Power BI | SQL | Python | Tableau | Automatización
                        </span>
                    </h2>

                    {/* TAGLINE POTENTE */}
                    <p style={{ 
                        color: '#e0f2f7',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        lineHeight: '1.4',
                        maxWidth: '650px',
                        margin: IS_DESKTOP ? '0.5rem 0 1.5rem 0' : '0.5rem auto 1.5rem auto',
                        borderLeft: IS_DESKTOP ? `3px solid ${ACCENT_COLOR}` : 'none', 
                        paddingLeft: IS_DESKTOP ? '10px' : '0'
                    }}>
                        {profileData.tagline}
                    </p>
                    
                    {/* INFORMACIÓN DE CONTACTO - Línea superior */}
                    <div style={{
                        marginTop: '1rem',
                        fontSize: IS_DESKTOP ? '1rem' : '0.9rem',
                        color: '#b0e0e6',
                        display: 'flex',
                        justifyContent: IS_DESKTOP ? 'flex-start' : 'center',
                        gap: IS_DESKTOP ? '1.5rem' : '0.5rem',
                        flexWrap: 'wrap',
                        marginBottom: '1.5rem' // Espacio antes del botón de CV
                    }}>
                        {/* WhatsApp Link */}
                        <p style={{ margin: 0 }}>
                            <a 
                                href={`https://wa.me/${profileData.whatsappLink}`}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ ...contactLinkStyle }}
                                onMouseOver={(e) => handleHover(e, ACCENT_COLOR)}
                                onMouseOut={(e) => handleHover(e, SECONDARY_COLOR)}
                            >
                                <span style={{ color: SECONDARY_COLOR, marginRight: '5px' }}>💬</span> 
                                WhatsApp: {profileData.whatsappPhone}
                            </a>
                        </p>
                        
                        {/* Email */}
                        <p style={{ margin: 0 }}>
                            <a 
                                href={`mailto:${profileData.email}`} 
                                style={{ ...contactLinkStyle }}
                                onMouseOver={(e) => handleHover(e, ACCENT_COLOR)}
                                onMouseOut={(e) => handleHover(e, SECONDARY_COLOR)}
                            >
                                <span style={{ color: SECONDARY_COLOR, marginRight: '5px' }}>📧</span> 
                                {profileData.email}
                            </a>
                        </p>
                        
                        {/* LinkedIn */}
                        <p style={{ margin: 0 }}>
                            <a 
                                href={profileData.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ ...contactLinkStyle }}
                                onMouseOver={(e) => handleHover(e, ACCENT_COLOR)}
                                onMouseOut={(e) => handleHover(e, SECONDARY_COLOR)}
                            >
                                <span style={{ color: SECONDARY_COLOR, marginRight: '5px' }}>🔗</span> 
                                Perfil de LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            
            {/* --- MODIFICADO: BOTONES DE DESCARGA DE CV (AHORA ICONOS GIF) --- */}
            <div style={{ 
                width: IS_DESKTOP ? 'auto' : '90%', 
                display: 'flex', 
                gap: '2rem', // Más espacio entre los GIFs
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center', // Para centrar los textos con los GIFs
                margin: '0 auto',
                paddingTop: '1rem',
                borderTop: `1px dashed ${ACCENT_COLOR}`
            }}>
                
                {/* ICONO ESPAÑOL */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={ImgDownload}
                        alt="Descargar CV en Español"
                        title="Descargar CV (Español)"
                        onClick={() => triggerDownload('ESP')}
                        style={{ 
                            ...downloadIconStyle,
                            ...(isAnimatingEsp ? iconAnimationStyle : {}) // Aplica animación al click
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Hover simple
                        onMouseOut={(e) => {
                            if (!isAnimatingEsp) e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />
                    <p style={{ margin: 0, marginTop: '0.5rem', color: ACCENT_COLOR, fontWeight: 'bold' }}>CV (ESP)</p>
                </div>
                
                {/* ICONO INGLÉS */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={ImgDownload}
                        alt="Descargar CV en Inglés"
                        title="Descargar CV (English)"
                        onClick={() => triggerDownload('ENG')}
                        style={{ 
                            ...downloadIconStyle,
                            ...(isAnimatingEng ? iconAnimationStyle : {}) // Aplica animación al click
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} // Hover simple
                        onMouseOut={(e) => {
                            if (!isAnimatingEng) e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />
                    <p style={{ margin: 0, marginTop: '0.5rem', color: ACCENT_COLOR, fontWeight: 'bold' }}>CV (ENG)</p>
                </div>

            </div>
        </header>
    );
}