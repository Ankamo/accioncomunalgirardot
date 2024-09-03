// src/App.js

import React, { useEffect } from 'react';
import './App.css';
import { cargarInfo } from './utils/cargarInfo.js'; // Importa la función cargarInfo
import { updateOpacity } from './utils/notPaid.js'; // Importa la función updateOpacity

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome, faEnvelope, faPhone, faCalendarAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Head from './components/head.js';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';


function App() {
  const [info, setInfo] = useState({}); // Estado para almacenar la información

  useEffect(() => {
    // Llama a la función cargarInfo y actualiza el estado con los datos obtenidos
    cargarInfo().then(data => setInfo(data));
  }, []);

  return (
    <div>
      <Head />
      <Header info={info} />
      <Nav />
      <main>
        <h1>Bienvenido a la Junta de Acción Comunal</h1>
      </main>
      <Footer info={info} />
    </div>
  );
}

export default App;