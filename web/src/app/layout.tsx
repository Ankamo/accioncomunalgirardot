import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Junta de Acción Comunal',
  description: 'Sitio web de la Junta de Acción Comunal',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
