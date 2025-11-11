import { Button } from '../Buttons/Button'; 
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
// Ya no necesitamos esta importación si eliminamos la imagen.
// import ProfilePic from '../../assets/img/Luis Deffit.png'; 

// Datos de ejemplo para el cliente
// Datos de ejemplo para el cliente
const portfolioData = {
  name: "Luis Alejandro Gutiérrez Deffit",
  title: "Data Analyst | Business Intelligence | Automatización", // Título resumido para el impacto
  tagline: "Especialista en BI: 3+ años impulsando decisiones críticas en salud a través de Databricks, Azure y automatización de KPIs.", // Tagline optimizado
  phone:"+54 11 2389 8273"
};


export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.welcomePage}>
      {/* Superposición oscura */}
      <div className={styles.overlay} />

      {/* HEADER SUPERIOR DERECHO CON BOTONES CIRCULARES (Se mantiene) */}
      <header className={styles.header}>
        {/* Aquí irían tus botones circulares */}
      </header>

      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <div className={styles.content}>
        
        {/* ⭐ CONTENEDOR DE PERFIL: Ahora solo contendrá el texto ⭐ */}
        <div className={styles.profileContainer}> 
          
          {/* 1. IMAGEN DE PERFIL ELIMINADA */}
          
          {/* 2. CONTENEDOR DE TEXTO DE BIO */}
          <div className={styles.bioContainer}>
            {/* TÍTULO PRINCIPAL (usando bioTitle) */}
            <h1 className={styles.name}> 
                {portfolioData.name}
            </h1>
            
            
            {/* SUBTÍTULO (usando title) */}
            <p className={styles.title}>{portfolioData.title}</p>
            
            {/* TAGLINE/DESCRIPCIÓN (usando tagline) */}
            <p className={styles.tagline}>{portfolioData.tagline}</p>
          </div>
        </div>

        {/* Botones de acción "Portafolio" y "+ Sobre Mí!" (Se mantienen) */}
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => navigate('/projects')}
            variant="light"
            className={styles.button}
          >
            Portafolio
          </Button>
          <Button
            onClick={() => navigate('/about-me')}
            variant="light"
            className={styles.button}
          >
            + Sobre Mí! 
          </Button>
        </div>
      </div>
    </div>
  );
}