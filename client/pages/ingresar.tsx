// pages/ingresar.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const Ingresar: React.FC = () => {
    return (
        <div>
            <Head title="Ingresar" />
            <Header />
            <Nav />
            <main>
                <h1>Ingresar</h1>
                <p>Formulario de ingreso.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Ingresar;
