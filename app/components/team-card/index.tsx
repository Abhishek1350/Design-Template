import { socialIcons, type Member } from "~/static/data";
import styles from "./styles.module.css";

export function TeamCard({ img, name, profession }: Member) {
    return (
        <div className={`${styles.card} shadow-primary`}>
            <div className={styles.cardImgWrapper}>
                <img
                    src={img}
                    className={styles.cardImg}
                    alt={name}
                />
            </div>
            <div className={`${styles.cardBody} d-flex flex-column`}>
                <h5 className={styles.cardTitle}>{name}</h5>
                <p className={styles.cardProfession}>{profession}</p>
                <div
                    className={`${styles.socialIcons} d-flex justify-content-center`}
                >
                    {socialIcons.map((social, idx) => (
                        <a href="#" key={idx} className={styles.socialLink}>
                            <img
                                src={social.icon}
                                alt={social.alt}
                                className={styles.socialIconImage}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}