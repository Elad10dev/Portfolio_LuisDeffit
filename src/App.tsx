// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './assets/pages/WelcomePage'
import { PortfolioPage } from './assets/pages/PortfolioPage'
import { MainLayout } from './assets/Layouts/MainLayouts'
import { ProjectDetail } from './assets/pages/ProjectDetail'
import { AboutMePage } from './assets/pages/AboutMePage'

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
            {/* Uso del nombre de componente corregido */}
            <AboutMePage /> 
          </MainLayout>
        } />

        {/* 4. Ruta de Detalle de Proyecto (Ejemplo: /project/ia-analyzer) */}
        <Route path="/project/:id" element={
          <MainLayout>
            <ProjectDetail />
          </MainLayout>
        } />
      </Routes>
    </>
  )
}

export default App

