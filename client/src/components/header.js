import React from 'react';
import './header.css'; // Actualiza la ruta si es necesario

function Header({ info }) {
    return (
        <header>
            <div className="logo-left">
                <img src={info.logoOac} id="header-logoOac" alt="Logo OAC" className="img-fluid" />
            </div>
            <div className="info">
                <h1 id="header-titulo">{info.titulo}</h1>
                <p id="header-nit">NIT: {info.nit}</p>
                <p id="header-ruc">RUC: {info.ruc}</p>
                <p id="header-pj">PJ: {info.pj} del {info.fechaPJ}</p>
                <p id="header-expedido">Expedido por: {info.expedidoPor}</p>
                <p id="header-ubicacion">{info.ciudad}, {info.departamento}</p>
            </div>
            <div className="logo-right">
                <img src={info.logoComunal} id="header-logoComunal" alt="Logo Acción Comunal" className="img-fluid" />
            </div>
        </header>
    );
}

export default Header;
