import React from 'react';

export function Footer() {
    const year = new Date().getFullYear();
    const baseStyle: React.CSSProperties = {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: '0.8rem',
        color: '#50e0ff', // Cian suave
        textAlign: 'center',
        padding: '1rem 0',
        marginTop: '3rem',
        borderTop: '1px solid rgba(0, 240, 255, 0.2)', // Línea divisoria sutil
    };

    return (
        <footer style={baseStyle}>
            {`[ SYSTEM DATA ] // ${year} // L.A. Gutierrez Deffit // Protocolo: 1A-V2.3`}
        </footer>
    );
}