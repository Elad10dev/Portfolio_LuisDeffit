import { type ReactNode } from 'react';
import { BannerProfile } from '../modules/BannesProfile';
import { Footer } from '../shared/Footer';

interface MainLayoutProps {
    children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    // Aplicamos estilos inline para usar las mismas fuentes y fondo del index.css
    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            position: 'relative', 
            zIndex: 1, 
            padding: '2rem' // Espacio alrededor del layout
        }}>
            {/* Banner superior de perfil con estilo científico */}
            <BannerProfile />

            {/* Contenido dinámico de la página (PortfolioPage o ProjectDetail) */}
            <main style={{ flexGrow: 1, padding: '2rem 0', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
                {children}
            </main>

            {/* Pie de página con estilo científico */}
            <Footer />
        </div>
    );
}