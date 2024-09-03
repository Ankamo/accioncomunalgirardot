import React from 'react';
import styles from '../styles/header.module.css';  // Importa el CSS Module

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoLeft}>
                <img src="" id="header-logoOac" alt="Logo Izquierdo" className={styles.imgFluid} />
            </div>
            <div className={styles.contentCenter}>
                <h1 id="header-titulo" className={styles.title}></h1>
                <p id="header-nit" className={styles.text}></p>
                <p id="header-ruc" className={styles.text}></p>
                <p id="header-pj" className={styles.text}></p>
                <p id="header-expedido" className={styles.text}></p>
                <p id="header-ubicacion" className={styles.text}></p>
            </div>
            <div className={styles.logoRight}>
                <img src="" id="header-logoComunal" alt="Logo Derecho" className={styles.imgFluid} />
            </div>
        </header>
    );
};

export default Header;
