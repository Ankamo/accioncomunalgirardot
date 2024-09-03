import React from 'react';

function Footer({ info }) {
  return (
    <footer>
      <div className="info">
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span id="footer-direccion">Dirección: {info.direccion}</span></p>
        <p><FontAwesomeIcon icon={faHome} /> <span id="footer-barrio">Barrio: {info.barrio}</span></p>
        <p><FontAwesomeIcon icon={faEnvelope} /> <span id="footer-correo">Correo: {info.correo}</span></p>
        <p><FontAwesomeIcon icon={faPhone} /> <span id="footer-telefono">WhatsApp: {info.telefono}</span></p>
      </div>
      <div className="logos">
        <img src={info.escudoPais} id="footer-escudoPais" alt="Escudo Colombia" className="img-fluid" style={{ maxWidth: '80px' }} />
        <img src={info.escudoDepto} id="footer-escudoDepto" alt="Escudo Depto" className="img-fluid" style={{ maxWidth: '80px' }} />
        <img src={info.escudoMunicipio} id="footer-escudoMunicipio" alt="Escudo Municipio" className="img-fluid" style={{ maxWidth: '80px' }} />
        <img src={info.logoIvc} id="footer-logoIvc" alt="Logo IVC" className="img-fluid" style={{ maxWidth: '80px' }} />
        <p><FontAwesomeIcon icon={faCalendarAlt} /> <span id="footer-period
