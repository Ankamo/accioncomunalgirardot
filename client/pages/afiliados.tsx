// pages/oac-afiliadas.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const Afiliados: React.FC = () => {
    return (
        <div>
            <Head title="Afiliados" />
            <Header />
            <Nav />
            <main>
                <h1>Afiliados</h1>
                <p>Información sobre afiliados.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Afiliados;
