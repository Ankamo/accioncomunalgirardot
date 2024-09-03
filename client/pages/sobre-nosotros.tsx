// pages/sobre-nosotros.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const SobreNosotros: React.FC = () => {
  return (
    <div>
      <Head title="Sobre Nosotros" />
      <Header />
      <Nav />
      <main>
        <h1>Sobre Nosotros</h1>
        <p>Información sobre la organización.</p>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNosotros;
