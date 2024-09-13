import Link from 'next/link';
import styles from '../styles/nav.modules.css'; // Importa el CSS Module

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/" className={styles.navLink}>Inicio</Link></li>
                <li className={styles.navItem}><Link href="/cartelera" className={styles.navLink}>Cartelera</Link></li>
                <li className={styles.navItem}><Link href="/eventos-y-actividades" className={styles.navLink}>Eventos y Actividades</Link></li>
                <li className={styles.navItem}><Link href="/reuniones-y-asambleas" className={styles.navLink}>Reuniones</Link></li>
                <li className={styles.navItem}><Link href="/proyectos" className={styles.navLink}>Proyectos</Link></li>
                <li className={styles.navItem}><Link href="/servicios-comunales" className={styles.navLink}>Servicios Comunales</Link></li>
                <li className={styles.navItem}><Link href="/quienes-somos" className={styles.navLink}>Quiénes Somos</Link></li>
                <li className={styles.navItem}><Link href="/login" className={styles.navLink}>Login</Link></li>
                <li className={styles.navItem}><Link href="/quiero-afiliarme" className={styles.navLink}>Quiero Afiliarme</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
