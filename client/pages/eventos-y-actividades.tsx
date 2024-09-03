// pages/eventos-y-actividades.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const EventosYActividades: React.FC = () => {
    return (
        <div>
            <Head title="Eventos y Actividades" />
            <Header />
            <Nav />
            <main>
                <h1>Eventos y Actividades</h1>
                <p>Detalles sobre eventos y actividades.</p>
            </main>
            <Footer />
        </div>
    );
};

export default EventosYActividades;
