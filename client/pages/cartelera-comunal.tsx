// pages/cartelera-comunal.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const CarteleraComunal: React.FC = () => {
    return (
        <div>
            <Head title="Cartelera Comunal" />
            <Header />
            <Nav />
            <main>
                <h1>Cartelera Comunal</h1>
                <p>Información sobre la cartelera comunal.</p>
            </main>
            <Footer />
        </div>
    );
};

export default CarteleraComunal;
