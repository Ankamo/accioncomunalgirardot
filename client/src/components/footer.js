// src/components/Footer.js

import React from 'react';
import './footer.css'; // Actualiza la ruta si es necesario
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome, faEnvelope, faPhone, faCalendarAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
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
    );
}

export default Footer;
