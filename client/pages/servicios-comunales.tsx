// pages/servicios-comunales.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const ServiciosComunales: React.FC = () => {
    return (
        <div>
            <Head title="Servicios Comunales" />
            <Header />
            <Nav />
            <main>
                <h1>Servicios Comunales</h1>
                <p>Información sobre servicios comunales.</p>
            </main>
            <Footer />
        </div>
    );
};

export default ServiciosComunales;
