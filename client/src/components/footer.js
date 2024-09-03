import React from 'react';
import './footer.css'; // Actualiza la ruta si es necesario


function Footer({ info }) {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <img id="footer-escudoPais" src={info.escudoPais} alt="Escudo del País" />
                    <img id="footer-escudoDepto" src={info.escudoDepto} alt="Escudo del Departamento" />
                    <img id="footer-escudoMunicipio" src={info.escudoMunicipio} alt="Escudo del Municipio" />
                    <img id="footer-logoIvc" src={info.logoIvc} alt="Logo IVC" />
                </div>
                <div className="footer-info">
                    <p id="footer-direccion">Dirección: {info.direccion}</p>
                    <p id="footer-barrio">Barrio: {info.barrio}</p>
                    <p id="footer-correo">Correo: {info.correo}</p>
                    <p id="footer-telefono">WhatsApp: {info.telefono}</p>
                    <p id="footer-periodo">Periodo Comunal: {info.periodo}</p>
                    <p id="footer-creador">Creador: {info.creador}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
