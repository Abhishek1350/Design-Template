import { Link } from "react-router";
import styles from "./styles.module.css";

const cards = [
    {
        icon: "/assets/012-blackboards.svg",
        title: "Certified Teacher",
        description: "The gradual accumulation of information about",
    },
    {
        icon: "/assets/013-telescope-1.svg",
        title: "Expert instruction",
        description: "The gradual accumulation of information about",
    }
];

export function Packages() {
    return (
        <section className={`global-section ${styles.section}`}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.rowLeft} col-lg-6 mb-5 mb-lg-0 d-flex flex-column justify-content-center`}>
                        <div className={styles.redLine}></div>
                        <h2>Affordable  Packages</h2>
                        <p className={`pe-lg-5 ${styles.description}`}>
                            Problems trying to resolve the conflict between <br />
                            the two major realms of Classical physics: <br />
                            Newtonian mechanics
                        </p>
                        <div>
                            <Link to="#" className={styles.link}>
                                Learn More
                                <svg
                                    className="ms-2"
                                    width="10"
                                    height="14"
                                    viewBox="0 0 10 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="row g-4">
                            {cards.map((card, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className={`${styles.card} d-flex flex-column`}>
                                        <div className={styles.iconBox}>
                                            <img src={card.icon} alt={card.title} className={styles.iconImage} />
                                        </div>
                                        <h5 className={styles.cardTitle}>{card.title}</h5>
                                        <div className={styles.cardRedLine}></div>
                                        <p className={styles.cardDescription}>
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

