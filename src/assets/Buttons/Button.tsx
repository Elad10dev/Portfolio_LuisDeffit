// src/components/Button/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './/Button.module.scss'; // Importa los estilos SCSS

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'danger' | 'secondary' | 'light'; // Mantén las variantes existentes
}

export function Button({ children, variant = 'primary', className, ...rest }: ButtonProps) {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      className={`${styles.buttonBase} ${variantClass} ${className || ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}