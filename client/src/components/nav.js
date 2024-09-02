// src/components/Nav.js

import React from 'react';
import './nav.css'; // Actualiza la ruta si es necesario


function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/index">Inicio</a></li>
                <li><a href="/cartelera-comunal">Cartelera Comunal</a></li>
                <li><a href="/eventos-y-actividades">Eventos y Actividades</a></li>
                <li><a href="/reuniones-y-asambleas">Reuniones y Asambleas</a></li>
                <li><a href="/proyectos-comunales">Proyectos</a></li>
                <li><a href="/servicios-comunales">Servicios Comunales</a></li>
                <li><a href="/oac-afiliadas">Afiliados</a></li>
                <li>
                    <a href="/sobre-nosotros">Sobre Nosotros</a>
                    <ul>
                        <li><a href="/ubicacion">Ubicación</a></li>
                        <li><a href="/legalidad">Documentación Legal</a></li>
                    </ul>
                </li>
                <li><a href="/ingresar">Ingresar</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
