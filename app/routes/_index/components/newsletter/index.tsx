import styles from "./styles.module.css";
import { CtaForm } from "~/components";

export default function Newsletter() {
    return (
        <section className={`global-section ${styles.section}`}>
            <div className="container">
                <div className={`${styles.header} d-flex flex-column`}>
                    <h6 className="section-tag">Newsletter</h6>
                    <h3 className={styles.title}>Watch our Courses</h3>
                    <p className={styles.description}>
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <CtaForm />
              
            </div>
        </section>
    );
}
