// pages/proyectos-comunales.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const ProyectosComunales: React.FC = () => {
    return (
        <div>
            <Head title="Proyectos Comunales" />
            <Header />
            <Nav />
            <main>
                <h1>Proyectos Comunales</h1>
                <p>Información sobre proyectos comunales.</p>
            </main>
            <Footer />
        </div>
    );
};

export default ProyectosComunales;
