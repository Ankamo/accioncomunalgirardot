import React from 'react';
import styles from '../styles/nav.module.css'; // Importa el CSS Module

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="/index.html" className={styles.menuLink}>Inicio</a></li>
                <li className={styles.menuItem}><a href="/cartelera-comunal.html" className={styles.menuLink}>Cartelera Comunal</a></li>
                <li className={styles.menuItem}><a href="/eventos-y-actividades.html" className={styles.menuLink}>Eventos y Actividades</a></li>
                <li className={styles.menuItem}><a href="/reuniones-y-asambleas.html" className={styles.menuLink}>Reuniones y Asambleas</a></li>
                <li className={styles.menuItem}><a href="/proyectos-comunales.html" className={styles.menuLink}>Proyectos</a></li>
                <li className={styles.menuItem}><a href="/servicios-comunales.html" className={styles.menuLink}>Servicios Comunales</a></li>
                <li className={styles.menuItem}><a href="/oac-afiliadas.html" className={styles.menuLink}>Afiliados</a></li>
                <li className={styles.menuItem}>
                    <a href="/sobre-nosotros.html" className={styles.menuLink}>Sobre Nosotros</a>
                    <ul className={styles.subMenu}>
                        <li className={styles.subMenuItem}><a href="#" className={styles.menuLink}>Ubicación</a></li>
                        <li className={styles.subMenuItem}><a href="#" className={styles.menuLink}>Documentación Legal</a></li>
                    </ul>
                </li>
                <li className={styles.menuItem}><a href="/ingresar.html" className={styles.menuLink}>Ingresar</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
