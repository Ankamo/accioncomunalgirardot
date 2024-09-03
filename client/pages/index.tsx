import React from 'react';
import Head from '@/components/head';
import Header from '@/components/header';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Nav />
      {/* Contenido de la página */}
      <Footer />
    </div>
  );
};

export default HomePage;
