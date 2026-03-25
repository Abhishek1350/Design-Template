import { members } from "~/static/data";
import styles from "./styles.module.css";
import { TeamCard } from "~/components";

export default function Team() {
    return (
        <section className={`global-section ${styles.section}`}>
            <div className="container">
                <div className={`${styles.header} d-flex flex-column`}>
                    <h6 className="section-tag">Team</h6>
                    <h3>Get Quality Education</h3>
                    <p className={styles.description}>
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="row g-4">
                    {members.map((member, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <TeamCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
