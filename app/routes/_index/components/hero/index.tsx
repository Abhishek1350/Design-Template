import styles from "./styles.module.css";

export function Hero() {
    return (
        <header className={styles.heroSection}>
            <div className="container large-container position-relative z-2">
                <div className="row align-items-center">
                    <div className={`${styles.heroContent} col-lg-6 d-flex flex-column`}>
                        <h5 className={`${styles.sectionTag} section-tag`}>Welcome</h5>
                        <h1>
                            Best Learning
                            <br />
                            Opportunities
                        </h1>
                        <p className={`pe-lg-5 ${styles.heroDescription}`}>
                            Our goal is to make online
                            <br />
                            education work for everyone
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                            <button className="btn-custom btn-primary-custom">Join Us</button>
                            <button className="btn-custom btn-outline-custom">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.heroImageWrapper}>
                <img
                    src="/assets/hero-cover-1.png"
                    alt="Student with books"
                    className={styles.heroImage}
                />
            </div>
        </header>
    );
}
