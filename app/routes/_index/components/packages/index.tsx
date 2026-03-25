import { Link } from "react-router";
import styles from "./styles.module.css";
import { packages } from "~/static/data";
import { PackageCard } from "~/components";

export function Packages() {
    return (
        <section className={`global-section ${styles.section}`}>
            <div className="container">
                <div className="row">
                    <div
                        className={`${styles.rowLeft} col-lg-6 mb-5 mb-lg-0 d-flex flex-column justify-content-center`}
                    >
                        <div className={styles.redLine}></div>
                        <h2>Affordable Packages</h2>
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
                                    <path
                                        d="M1 1L6 6L1 11"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row g-4">
                            {packages.map((card, index) => (
                                <div className="col-md-6" key={index}>
                                    <PackageCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
