// src/App.tsx
import { Routes, Route, useParams } from 'react-router-dom';
import { WelcomePage } from './assets/pages/WelcomePage';
import { PortfolioPage } from './assets/pages/PortfolioPage';
import { MainLayout } from './assets/Layouts/MainLayouts';
import { ProjectDetail } from './assets/pages/ProjectDetail'; 
import { ProjectDetail2 } from './assets/pages/ProjectDetail2'; 
import { ProjectDetail3 } from './assets/pages/ProjectDetail3'; 
// ⭐ 1. IMPORTAR EL NUEVO COMPONENTE
import { ProjectDetail4 } from './assets/pages/ProjectDetail4'; 
import { AboutMePage } from './assets/pages/AboutMePage';
import { ProjectDetail5 } from './assets/pages/ProjectDetail5';
import { ProjectDetail6 } from './assets/pages/ProjectDetail6';

// --- FUNCIÓN DE ENRUTAMIENTO INTELIGENTE ---
function ProjectDetailRouter() {
    const { id } = useParams<{ id: string }>(); 

    switch (id) {
        case 'certificados':
            return <ProjectDetail />; 
        case 'powerbii': // Fase I
            return <ProjectDetail2 />;
        case 'powerbiii': // Fase II
            return <ProjectDetail3 />;
        // ⭐ 2. AÑADIR EL CASO PARA EL NUEVO ID
        case 'PPP': // Nuevo proyecto
            return <ProjectDetail4 />;
        case 'sharepoint': // Nuevo proyecto
            return <ProjectDetail5 />;
        case 'rrhh-dashboard': // Nuevo proyecto
            return <ProjectDetail6 />;
        default:
            // Carga el detalle por defecto o una página de error
            return <ProjectDetail />; 
    }
}

// ... (El resto del componente App sin cambios) ...

function App() {
  return (
    <>
      <Routes>
        {/* 1. Ruta de Bienvenida */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* 2. Ruta de Proyectos (Botón: 'Portafolio') */}
        <Route path="/projects" element={
          <MainLayout>
            <PortfolioPage />
          </MainLayout>
        } />

        {/* 3. Ruta de Más sobre Mí (Botón: '+ Sobre Mí!') */}
        <Route path="/about-me" element={
          <MainLayout>
            <AboutMePage /> 
          </MainLayout>
        } />

        {/* 4. RUTA DINÁMICA: Ahora esta única ruta maneja todos los proyectos */}
        <Route path="/project/:id" element={
          <MainLayout>
            <ProjectDetailRouter /> {/* Llama al router que decide qué componente cargar */}
          </MainLayout>
        } />
      </Routes>
    </>
  )
}

export default App