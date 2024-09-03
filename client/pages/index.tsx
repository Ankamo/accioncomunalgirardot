// pages/index.tsx
import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import styles from '@/styles/mainIndex.module.css'; // Importa el CSS Module

const HomePage: React.FC = () => {
  return (
    <div>
      <Head title="Inicio" />
      <Header />
      <Nav />
      <main className={styles.main}>
        <h1>Inicio</h1>
        <p>Bienvenido a la página de inicio.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
