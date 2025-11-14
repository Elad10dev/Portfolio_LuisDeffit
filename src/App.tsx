// src/App.tsx
import { Routes, Route, useParams } from 'react-router-dom'; // Importamos useParams para usarlo en la función de renderizado
import { WelcomePage } from './assets/pages/WelcomePage';
import { PortfolioPage } from './assets/pages/PortfolioPage';
import { MainLayout } from './assets/Layouts/MainLayouts';
// Importamos ambos componentes de detalle
import { ProjectDetail } from './assets/pages/ProjectDetail'; 
// ¡CORRECCIÓN FINAL! Cambia 'projectDetail2' a 'ProjectDetail2' para eliminar el error TS1261.
import { ProjectDetail2 } from './assets/pages/projectDetail2'; 
import { AboutMePage } from './assets/pages/AboutMePage';

// --- FUNCIÓN DE ENRUTAMIENTO INTELIGENTE ---
// Esta función decide qué componente de detalle cargar según el ID
function ProjectDetailRouter() {
    const { id } = useParams<{ id: string }>(); // ¡Aquí se extrae el ID!

    switch (id) {
        case 'certificados':
            // Carga ProjectDetail, que debe contener los datos de 'certificados'
            return <ProjectDetail />; 
        case 'powerbii':
            // Carga ProjectDetail2
            return <ProjectDetail2 />;
        // Puedes agregar más casos aquí si es necesario
        default:
            // Si el ID no coincide, ProjectDetail se encargará de mostrar el error "Proyecto no encontrado"
            // Para mantener la lógica anterior, simplemente cargamos ProjectDetail para que maneje el error.
            return <ProjectDetail />; 
    }
}

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