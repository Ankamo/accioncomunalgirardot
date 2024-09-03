// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from '@/components/head';  // Importa el componente Head
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import '@/styles/globals.css'; // Importa los estilos globales

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Configuración del encabezado global */}
            <Head title="Default Title" />
            {/* Encabezado y navegación global */}
            <Header />
            <Nav />
            <main className="main">
                <Component {...pageProps} />
            </main>
            {/* Pie de página global */}
            <Footer />
        </>
    );
}

export default MyApp;
