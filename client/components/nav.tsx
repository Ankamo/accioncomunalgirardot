import React from 'react';
import styles from '../styles/nav.module.css';

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/cartelera-comunal">Cartelera Comunal</a></li>
                <li><a href="/eventos-y-actividades">Eventos y Actividades</a></li>
                <li><a href="/reuniones-y-asambleas">Reuniones y Asambleas</a></li>
                <li><a href="/proyectos-comunales">Proyectos</a></li>
                <li><a href="/servicios-comunales">Servicios Comunales</a></li>
                <li><a href="/afiliados">Afiliados</a></li>
                <li>
                    <a href="/sobre-nosotros">Sobre Nosotros</a>
                    <ul>
                        <li><a href="#">Ubicación</a></li>
                        <li><a href="#">Documentación Legal</a></li>
                    </ul>
                </li>
                <li><a href="/ingresar">Ingresar</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
