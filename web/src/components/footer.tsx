import styles from "../styles/footer.module.css"; // Asegúrate de que la ruta es correcta

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <p className={styles.p}>Diagonal 33 con Carrera 12 A esquina.</p>
                <p className={styles.p}>Barrio: Rosa Blanca Primer Sector</p>
                <p className={styles.p}>juntacomunalrosablanca@gmail.com</p>
                <p className={styles.p}>(+57) 304 347 0984</p>
            </div>
            <div className={styles.logos}>
                <img src="" alt="Logo Footer Izquierdo" className={styles.img} />
                <img src="" alt="Logo Footer Centro 1" className={styles.img} />
                <img src="" alt="Logo Footer Centro 2" className={styles.img} />
                <img src="" alt="Logo Footer Derecho" className={styles.img} />
                
            </div>
            <div className={styles.propiedad}>
                <p className={styles.p}>Periodo: 2022-2026</p>
                <p className={styles.p}>Creado y Diseñado Por: Ankamo</p>
            </div>
        </footer>
    );
}
