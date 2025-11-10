import { Button } from '../Buttons/Button'; // <-- Importación corregida
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.scss'; // Importa los estilos SCSS

// Datos de ejemplo para el cliente
const portfolioData = {
  name: "Dr. L.A. Gutierrez Deffit",
  title: "Investigador Senior en IA & Arquitecto de Sistemas Cuánticos",
  tagline: "Optimizando algoritmos neuronales para la próxima generación de computación. Innovación es mi protocolo.",
};

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.welcomePage}>
      {/* Superposición oscura */}
      <div className={styles.overlay} />

      {/* HEADER SUPERIOR DERECHO CON BOTONES CIRCULARES */}
      <header className={styles.header}>
        
      </header>

      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          {portfolioData.name}
        </h1>
        <p className={styles.title}>
          {portfolioData.title}
        </p>
        <p className={styles.tagline}>
          "{portfolioData.tagline}"
        </p>

        {/* Botones de acción "Portafolio" y "+ Sobre Mí!" */}
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => navigate('/projects')} // <-- NUEVA RUTA PARA PROYECTOS
            variant="light"
            className={styles.button}
          >
            Portafolio
          </Button>
          <Button
            onClick={() => navigate('/about-me')} // <-- NUEVA RUTA PARA EL MINI-BLOG
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