// src/App.js

import React, { useEffect } from 'react';
import './App.css'; // Asegúrate de tener estos archivos CSS en tu carpeta src o public

// Puedes importar íconos de Font Awesome como componente o usar una librería como react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome, faEnvelope, faPhone, faCalendarAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

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
      <header>
        <div className="logo-left">
          <img src="" id="header-logoOac" alt="Logo OAC" className="img-fluid" />
        </div>
        <div className="info">
          <h1 id="header-titulo">Junta de Acción Comunal ....</h1>
          <p id="header-nit">NIT: </p>
          <p id="header-ruc">RUC: </p>
          <p id="header-pj">PJ: </p>
          <p id="header-expedido">Expedido por: </p>
          <p id="header-ubicacion">Girardot, Cundinamarca</p>
        </div>
        <div className="logo-right">
          <img src="" id="header-logoComunal" alt="Logo Acción Comunal" className="img-fluid" />
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/cartelera-comunal.html">Cartelera Comunal</a></li>
          <li><a href="/eventos-y-actividades.html">Eventos y Actividades</a></li>
          <li><a href="/reuniones-y-asambleas.html">Reuniones y Asambleas</a></li>
          <li><a href="/proyectos-comunales.html">Proyectos</a></li>
          <li><a href="/servicios-comunales.html">Servicios Comunales</a></li>
          <li><a href="/oac-afiliadas.html">Afiliados</a></li>
          <li>
            <a href="/sobre-nosotros.html">Sobre Nosotros</a>
            <ul>
              <li><a href="/ubicacion">Ubicación</a></li>
              <li><a href="/legalidad">Documentación Legal</a></li>
            </ul>
          </li>
          <li><a href="/ingresar.html">Ingresar</a></li>
        </ul>
      </nav>
      <main>
        <h1>Bienvenido a la Junta de Acción Comunal</h1>
      </main>
      <footer>
        <div className="info">
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span id="footer-direccion">Dirección: </span></p>
          <p><FontAwesomeIcon icon={faHome} /> <span id="footer-barrio">Barrio: </span></p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <span id="footer-correo">Correo: </span></p>
          <p><FontAwesomeIcon icon={faPhone} /> <span id="footer-telefono">WhatsApp: </span></p>
        </div>
        <div className="logos">
          <img src="" id="footer-escudoPais" alt="Escudo Colombia" className="img-fluid" style={{ maxWidth: '80px' }} />
          <img src="" id="footer-escudoDepto" alt="Escudo Depto" className="img-fluid" style={{ maxWidth: '80px' }} />
          <img src="" id="footer-escudoMunicipio" alt="Escudo Municipio" className="img-fluid" style={{ maxWidth: '80px' }} />
          <img src="" id="footer-logoIvc" alt="Logo IVC" className="img-fluid" style={{ maxWidth: '80px' }} />
          <p><FontAwesomeIcon icon={faCalendarAlt} /> <span id="footer-periodo">Periodo Comunal: </span></p>
        </div>
        <div className="propiedad">
          <p id="footer-creador">Creado por: </p>
          <p><FontAwesomeIcon icon={faLaptopCode} /> Creado y Diseñado Por: Ankamo</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
