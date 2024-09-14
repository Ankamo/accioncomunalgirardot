import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importa los estilos de Font Awesome
config.autoAddCss = false; // Previene que Font Awesome inserte CSS automáticamente

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es-co">
            <body>
                <Header />
                <Nav />
                <main className="container mx-auto py-10 px-6">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
