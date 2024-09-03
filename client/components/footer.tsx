import React from 'react';
import styles from '../styles/footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <p><i className="fas fa-map-marker-alt" id="footer-direccion"></i></p>
                <p><i className="fas fa-home" id="footer-barrio"></i></p>
                <p><i className="fas fa-envelope" id="footer-correo"></i></p>
                <p><i className="fas fa-phone" id="footer-telefono"></i></p>
            </div>
            <div className={styles.logos}>
                <img src="/img/escudoColombia.png" alt="Escudo Colombia" className={styles.logos}/>
                <img src="/img/escudoDepto.png" alt="Escudo Departamento" className={styles.logos}/>
                <img src="/img/escudoMunicipio.png" alt="Escudo Municipio" className={styles.logos}/>
                <img src="/img/logoIvc.png" alt="Logo Entidad IVC" className={styles.logos}/>
                <p><i className="fas fa-calendar-alt" id="footer-periodo"></i></p>
            </div>
            <div className={styles.propiedad}>
                <p id="footer-creador"></p>
                <p><i className="fas fa-laptop-code"></i>Creado y Diseñado Por: Ankamo</p>
            </div>
        </footer>
    );
};

export default Footer;

