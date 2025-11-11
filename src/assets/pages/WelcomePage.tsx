import { Button } from '../Buttons/Button'; 
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.scss';
// 💡 Asume que tienes una imagen de perfil en el path:
import ProfilePic from '../../assets/Luis Deffit.png'; // <--- NUEVA IMPORTACIÓN DE IMAGEN

// Datos de ejemplo para el cliente
const portfolioData = {
  name: "Luis A. Gutierrez Deffit",
  title: "Investigador Senior en IA & Arquitecto de Sistemas Cuánticos",
  tagline: "Optimizando algoritmos neuronales para la próxima generación de computación. Innovación es mi protocolo.",
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
        
        {/* ⭐ CONTENEDOR DE PERFIL: IMAGEN + TEXTO HORIZONTAL (Esto sustituye a 'aboutContent' y a 'profileContainer' si lo vas a usar) */}
        {/* Usaremos 'profileContainer' o 'aboutContent' dependiendo de cómo lo llames en el SCSS */}
        <div className={styles.profileContainer}> 
          
          {/* 1. IMAGEN DE PERFIL */}
          <img
            src={ProfilePic}
            alt={portfolioData.name}
            className={styles.profilePic}
          />
          
          {/* 2. CONTENEDOR DE TEXTO DE BIO */}
          <div className={styles.bioContainer}>
            {/* TÍTULO PRINCIPAL (usando bioTitle) */}
            <h1 className={styles.name}> 
                {portfolioData.name}
            </h1>
            
            {/* CAMPO EXTRA (Teléfono) */}
            <p className={styles.contactLinkText}>
              **Teléfono:** {portfolioData.phone}
            </p>
            
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