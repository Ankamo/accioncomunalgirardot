// pages/reuniones-y-asambleas.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const ReunionesYAsambleas: React.FC = () => {
    return (
        <div>
            <Head title="Reuniones y Asambleas" />
            <Header />
            <Nav />
            <main>
                <h1>Reuniones y Asambleas</h1>
                <p>Información sobre reuniones y asambleas.</p>
            </main>
            <Footer />
        </div>
    );
};

export default ReunionesYAsambleas;
