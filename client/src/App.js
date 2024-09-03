import React, { useEffect, useState } from 'react';

import Head from './components/head.js';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import { cargarInfo } from './utils/cargarInfo.js';
import { updateOpacity } from './utils/notPaid.js';

function App() {
  const [info, setInfo] = useState({});

  // Usamos useEffect para cargar la información desde Google Sheets y actualizar la opacidad de la página
  useEffect(() => {
    cargarInfo().then(data => setInfo(data));
    updateOpacity(); // Aplicar la opacidad según la lógica definida
  }, []);

  return (
    <div>
      <Head />
      <Header info={info} />
      <Nav />
      <main>
        {/* Aquí puedes agregar el contenido principal de la página */}
        <h1>Bienvenido a la Junta de Acción Comunal</h1>
        {/* Otros componentes o contenido puede ir aquí */}
      </main>
      <Footer info={info} />
    </div>
  );
}

export default App;
