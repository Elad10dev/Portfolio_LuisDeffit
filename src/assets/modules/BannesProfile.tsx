import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgProf from '../img/Foto Perfil.jpg'; // Asegúrate de que esta ruta sea correcta

// --- IMPORTACIONES DE CV (ASUME QUE ESTÁN DISPONIBLES) ---
// En una aplicación real, estos archivos serían importados o sus rutas pasadas como props.
const cvEsp = '../img/1.CV_Luis_Gutierrez_Deffit_ES.pdf';
const cvEng = '../img/1.Data analytics -LuisDeffit .pdf';

// Datos de perfil enfocados en el valor para el reclutador
const profileData = {
    name: "Luis Alejandro Gutiérrez Deffit",
    // Título de alto impacto que resume la especialización
    role: "DATA ANALYST | BI SPECIALIST | IMPACTO EN SALUD", 
    // Tagline potente: conecta la habilidad técnica con el resultado de negocio
    tagline: "Transformando datos complejos en decisiones estratégicas que optimizan la infraestructura y el rendimiento empresarial.",
    // El número se usará para WhatsApp, por lo que se nombra así.
    whatsappPhone: "+54 9 11 2389-8273", // Se mantiene el formato visible
    // Número para el link de WhatsApp (Formato internacional sin símbolos, incluyendo el 9 después del 54)
    whatsappLink: "5491123898273", 
    email: "luis2692@gmail.com", 
    linkedin: "https://www.linkedin.com/in/luisagdeffit/", 
    imageUrl: ImgProf,
};

// 💡 Helper para detectar si estamos en un tamaño de pantalla grande (simulando Media Query)
const IS_DESKTOP = window.innerWidth >= 768;

export function BannerProfile() {
    const navigate = useNavigate();

    // Colores y fuentes de la estética científica (Orbitron y Roboto Mono)
    const baseStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        color: '#e0f2f7',
    };

    // Color principal de acento para los bordes y títulos (el nuevo color morado)
    const ACCENT_COLOR = '#9c2da6';
    // Color secundario de acento (Cian)
    const SECONDARY_COLOR = '#00f0ff';
    // Color de sombra adaptado para el nuevo color ACCENT_COLOR (RGB 156, 45, 166)
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

    // --- FUNCIÓN DE DESCARGA DE CV (SIMPLIFICADA) ---
    // En el contexto de un solo archivo, simulamos la acción de descarga
    const handleDownloadClick = (lang: 'ESP' | 'ENG') => {
        const url = lang === 'ESP' ? cvEsp : cvEng;
        const fileName = lang === 'ESP' ? 'CV_Luis_Deffit_ES.pdf' : 'CV_Luis_Deffit_EN.pdf';
        
        // Simulación de descarga con <a> temporal
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Mensaje de feedback (reemplaza alert en un entorno real)
        console.log(`Iniciando descarga de CV en ${lang}...`);
    };

    // --- ESTILO DEL BOTÓN DE CV (USANDO LA CONFIGURACIÓN DEL CERTIFICADO) ---
    const cvButtonStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        fontWeight: 700,
        backgroundColor: ACCENT_COLOR, 
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontSize: '1rem',
        textAlign: 'center',
        textDecoration: 'none', 
        cursor: 'pointer',
        boxShadow: `0 4px 15px ${ACCENT_SHADOW}`,
        transition: 'all 0.3s ease',
        flexGrow: IS_DESKTOP ? 0 : 1, // Hace que sea más adaptable en móvil
        whiteSpace: 'nowrap',
    };

    // Función de Hover para el Botón de CV
    const handleCvHover = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, enter: boolean) => {
        if (enter) {
            e.currentTarget.style.backgroundColor = SECONDARY_COLOR;
            e.currentTarget.style.color = '#1a1a3a';
            e.currentTarget.style.boxShadow = `0 6px 20px rgba(0, 240, 255, 0.6)`;
        } else {
            e.currentTarget.style.backgroundColor = ACCENT_COLOR;
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.boxShadow = `0 4px 15px ${ACCENT_SHADOW}`;
        }
    };


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
                            Power BI | SQL | Python | Tableau | Automatización
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
            
            {/* --- NUEVO: BOTÓN DE DESCARGA DE CV --- */}
            <div style={{ 
                width: IS_DESKTOP ? 'auto' : '90%', 
                display: 'flex', 
                gap: '1rem', 
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: '0 auto',
                paddingTop: '1rem',
                borderTop: `1px dashed ${ACCENT_COLOR}`
            }}>
                <button 
                    onClick={() => handleDownloadClick('ESP')}
                    style={cvButtonStyle}
                    onMouseEnter={(e) => handleCvHover(e, true)}
                    onMouseLeave={(e) => handleCvHover(e, false)}
                >
                    ⬇️ Descargar CV (Español)
                </button>
                <button 
                    onClick={() => handleDownloadClick('ENG')}
                    style={cvButtonStyle}
                    onMouseEnter={(e) => handleCvHover(e, true)}
                    onMouseLeave={(e) => handleCvHover(e, false)}
                >
                    ⬇️ Download CV (English)
                </button>
            </div>
        </header>
    );
}