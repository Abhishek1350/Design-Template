import { type Package } from "~/static/data";
import styles from "./styles.module.css";

export function PackageCard({ icon, title, description }: Package) {
    return (
        <div className={`${styles.card} d-flex flex-column shadow-primary`}>
            <div className={styles.iconBox}>
                <img src={icon} alt={title} className={styles.iconImage} />
            </div>
            <h5 className={styles.cardTitle}>{title}</h5>
            <div className={styles.cardRedLine}></div>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
}
