import styles from "../styles/header.module.css"; // Asegúrate de que la ruta es correcta

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src="" alt="Logo OAC" />
            </div>
            <div>
                <h1 className={styles.h1}>Junta de Acción Comunal del Barrio de Rosa Blanca de Girardot</h1>
                <p className={styles.p}>NIT: 808.002.688-7</p>
                <p className={styles.p}>RUC: 15-1884-3053</p>
                <p className={styles.p}>CODIGO IVC: IDACO 1605</p>
                <p className={styles.p}>PJ: 103 del 17 de Enero de 1962</p>
                <p className={styles.p}>EXPEDIDO POR: Ministerio de Justicia</p>
                <p className={styles.p}>Girardot, Cundinamarca</p>
            </div>
            <div>
                <img src="" alt="Logo Acción Comunal" />
            </div>
        </header>
    );
}
