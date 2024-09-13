import Image from 'next/image'; // Importa next/image
import styles from '../styles/footer.module.css';  // Importa el CSS Module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <p>Dirección: Calle 32 Con Carrera 12 A Esquina.<i className="fas fa-map-marker-alt" id="footer-direccion"></i></p>
                <p>Barrio Rosa Blanca 1er Sector<i className="fas fa-home" id="footer-barrio"></i></p>
                <p>Correo: juntacomunalrosablanca@gmail.com<i className="fas fa-envelope" id="footer-correo"></i></p>
                <p>Contacto: (+57) 304 347 0984<i className="fas fa-phone" id="footer-telefono"></i></p>
            </div>
            <div className={styles.logos}>
                <img src="/img/escudoColombia.png" alt="Escudo Colombia" className={styles.logos}/>
                <img src="/img/escudoDepto.png" alt="Escudo Departamento" className={styles.logos}/>
                <img src="/img/escudoMunicipio.png" alt="Escudo Municipio" className={styles.logos}/>
                <img src="/img/logoIvc.png" alt="Logo Entidad IVC" className={styles.logos}/>
                <p>Periodo Comunal: 2022-2026<i className="fas fa-calendar-alt" id="footer-periodo"></i></p>
            </div>
            <div className={styles.propiedad}>
                <p id="footer-creador"></p>
                <p><i className="fas fa-laptop-code"></i> Creado y Diseñado Por: Ankamo</p>
            </div>
        </footer>
    );
};

export default Footer;
