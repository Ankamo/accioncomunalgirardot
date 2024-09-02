// src/components/Head.js

import React from 'react';
import { Helmet } from 'react-helmet';
import './head.css'; // Actualiza la ruta si es necesario

function Head() {
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title id="header-titulo1">Inicio - Junta de Acción Comunal</title>
            <link rel="shortcut icon" href="/img/accionComunal.png" type="image/x-icon" />
            <link rel="stylesheet" href="./head.css" />
            <link rel="stylesheet" href="./header.css" />
            <link rel="stylesheet" href="./nav.css" />
            <link rel="stylesheet" href="./footer.css" />

        </Helmet>
    );
}

export default Head;
