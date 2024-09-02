// src/App.js

import React, { useEffect } from 'react';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Head from './components/head.js';

function App() {
  useEffect(() => {
    // Simularemos la carga de información
    cargarInfo();
  }, []);

  // Función simulada
  const cargarInfo = () => {
    console.log('Cargando información...');
    // Tu lógica de carga aquí
  };

  return (
    <div>
      <Head />
      <Header />
      <Nav />
      <main>
        <h1>Bienvenido a la Junta de Acción Comunal</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
