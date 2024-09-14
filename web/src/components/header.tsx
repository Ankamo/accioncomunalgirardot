import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHome, faEnvelope, faPhone, faCalendarAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';  // Importa los iconos
import styles from '../styles/header.module.css';  // Importa el CSS Module

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoLeft}>
                <img src="/img/rosa-blanca.png" alt="Logo Izquierdo" className={styles.img} />
            </div>
            <div className={styles.contentCenter}>
                <h1 className={styles.title}>Junta de Acción Comunal del Barrio de Rosa Blanca de Girardot</h1>
                <p className={styles.text}>NIT: 808.002.688-7</p>
                <p className={styles.text}>RUC: 15-1884-3053</p>
                <p className={styles.text}>PJ: 103 del 17 de enero de 1962</p>
                <p className={styles.text}>Expedido por: Ministerio de Justicia</p>
                <p className={styles.text}>Girardot, Cundinamarca</p>
            </div>
            <div className={styles.logoRight}>
                <img src="/img/accionComunal.png" alt="Logo Derecho" className={styles.img} />
            </div>
        </header>
    );
};

export default Header;
