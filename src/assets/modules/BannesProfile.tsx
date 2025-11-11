import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImgProf from '../img/Foto Perfil.jpg'; // Asegúrate de que esta ruta sea correcta

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
// En un entorno real, usarías un hook para esto (ej: useMediaQuery), pero para estilos inline,
// usaremos un valor fijo para el ejemplo de desktop. 
const IS_DESKTOP = window.innerWidth >= 768;

export function BannerProfile() {
    // Nota: useNavigate requiere que el componente esté dentro de un Router en un entorno de aplicación real.
    const navigate = useNavigate();

    // Colores y fuentes de la estética científica (Orbitron y Roboto Mono)
    const baseStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        color: '#e0f2f7',
    };

    // Estilo para los enlaces de contacto y hover
    const contactLinkStyle: React.CSSProperties = {
        color: '#00f0ff',
        textDecoration: 'none',
        fontWeight: 'normal',
        transition: 'color 0.3s',
        display: 'inline-flex',
        alignItems: 'center',
    };
    
    // Función para manejar el efecto hover en los enlaces
    // El color de hover ha sido actualizado a '#9c2da6'
    const handleHover = (e: React.MouseEvent<HTMLAnchorElement>, color: string) => {
        e.currentTarget.style.color = color;
    };

    // Color principal de acento para los bordes y títulos (el nuevo color)
    const ACCENT_COLOR = '#9c2da6';

    // Color de sombra adaptado para el nuevo color ACCENT_COLOR (RGB 156, 45, 166)
    const ACCENT_SHADOW = 'rgba(156, 45, 166, 0.9)';


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
            {/* CONTENEDOR CLICABLE: Define el layout de Perfil */}
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
                    padding: '0 1rem'
                }}
            >
                {/* 1. IMAGEN DE PERFIL */}
                <div style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    // Borde de imagen actualizado
                    border: `5px solid ${ACCENT_COLOR}`, 
                    marginBottom: IS_DESKTOP ? '0' : '1.5rem', 
                    // Sombra de imagen actualizada
                    boxShadow: `0 0 25px ${ACCENT_SHADOW}`, 
                    flexShrink: 0
                }}>
                    <img 
                        src={profileData.imageUrl} 
                        alt="Perfil de Usuario" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                
                {/* 2. TEXTO DEL PERFIL */}
                <div style={{
                    textAlign: IS_DESKTOP ? 'left' : 'center',
                    flexGrow: 1, 
                }}>
                    <h1 style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        color: '#00f0ff',
                        fontSize: IS_DESKTOP ? '3.2rem' : '2.8rem', 
                        textShadow: '0 0 15px rgba(0, 240, 255, 0.8)',
                        marginBottom: '0.25rem',
                    }}>
                        {profileData.name}
                    </h1>
                    
                    {/* H2 - ROL: Color actualizado */}
                    <h2 style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        color: ACCENT_COLOR, // Usando el nuevo color
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
                        // Borde lateral actualizado
                        borderLeft: IS_DESKTOP ? `3px solid ${ACCENT_COLOR}` : 'none', 
                        paddingLeft: IS_DESKTOP ? '10px' : '0'
                    }}>
                        {profileData.tagline}
                    </p>
                    
                    {/* INFORMACIÓN DE CONTACTO - Con hover actualizado */}
                    <div style={{
                        marginTop: '1rem',
                        fontSize: IS_DESKTOP ? '1rem' : '0.9rem',
                        color: '#b0e0e6',
                        display: IS_DESKTOP ? 'flex' : 'block',
                        justifyContent: IS_DESKTOP ? 'flex-start' : 'center',
                        gap: IS_DESKTOP ? '1.5rem' : '0.5rem',
                        flexWrap: 'wrap'
                    }}>
                        {/* WhatsApp Link */}
                        <p style={{ margin: 0 }}>
                            <a 
                                href={`https://wa.me/${profileData.whatsappLink}`}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ ...contactLinkStyle }}
                                // Color de hover actualizado
                                onMouseOver={(e) => handleHover(e, ACCENT_COLOR)}
                                onMouseOut={(e) => handleHover(e, '#00f0ff')}
                            >
                                <span style={{ color: '#00f0ff', marginRight: '5px' }}>💬</span> 
                                WhatsApp: {profileData.whatsappPhone}
                            </a>
                        </p>
                        
                        {/* Email */}
                        <p style={{ margin: 0 }}>
                            <a 
                                href={`mailto:${profileData.email}`} 
                                style={{ ...contactLinkStyle }}
                                // Color de hover actualizado
                                onMouseOver={(e) => handleHover(e, ACCENT_COLOR)}
                                onMouseOut={(e) => handleHover(e, '#00f0ff')}
                            >
                                <span style={{ color: '#00f0ff', marginRight: '5px' }}>📧</span> 
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
                                // Color de hover actualizado
                                onMouseOver={(e) => handleHover(e, ACCENT_COLOR)}
                                onMouseOut={(e) => handleHover(e, '#00f0ff')}
                            >
                                <span style={{ color: '#00f0ff', marginRight: '5px' }}>🔗</span> 
                                Perfil de LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}