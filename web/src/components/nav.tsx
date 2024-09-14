import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome, faEnvelope, faPhone, faCalendarAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';  // Importa los iconos
import styles from '../styles/nav.module.css';  // Importa el CSS Module
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/cartelera-comunal">Cartelera Comunal</Link></li>
                <li><Link href="/eventos-y-actividades">Eventos y Actividades</Link></li>
                <li><Link href="/reuniones-y-asambleas">Reuniones y Asambleas</Link></li>
                <li><Link href="/proyectos-comunales">Proyectos</Link></li>
                <li><Link href="/servicios-comunales">Servicios Comunales</Link></li>
                <li><Link href="/afiliados">Afiliados</Link></li>
                <li>
                    <Link href="/sobre-nosotros">Sobre Nosotros</Link>
                    <ul>
                        <li><Link href="#">Ubicación</Link></li>
                        <li><Link href="#">Documentación Legal</Link></li>
                    </ul>
                </li>
                <li><Link href="/ingresar">Ingresar</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
