// src/components/Header.js

import React from 'react';
import './header.css'; // Actualiza la ruta si es necesario


function Header() {
    return (
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
    );
}

export default Header;
