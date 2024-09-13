import Header from '../components/header'; // Asegúrate de que la ruta sea correcta
import Nav from '../components/nav';       // Asegúrate de que la ruta sea correcta
import Footer from '../components/footer'; // Asegúrate de que la ruta sea correcta

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
