import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={`global-section ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className={styles.title}>Company Info</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>About Us</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Carrier</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>We are hiring</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Blog</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className={styles.title}>Legal</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>About Us</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Carrier</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>We are hiring</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Blog</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className={styles.title}>Features</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Business Marketing</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>User Analytic</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Live Chat</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Unlimited Support</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className={styles.title}>Resources</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>IOS & Android</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Watch a Demo</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>Customers</Link></li>
              <li className={styles.linkItem}><Link to="#" className={styles.link}>API</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-8 col-sm-12">
            <h5 className={styles.title}>Get In Touch</h5>
            <div className={styles.contactItem}>
              <img src="/assets/contact.svg" alt="Phone" className={styles.contactIcon} />
              <span className={styles.contactText}>(480) 555-0103</span>
            </div>
            <div className={styles.contactItem}>
              <img src="/assets/location.svg" alt="Location" className={styles.contactIcon} />
              <span className={styles.contactText}>
                4517 Washington Ave. Manchester, <br />
                Kentucky 39495
              </span>
            </div>
            <div className={styles.contactItem}>
              <img src="/assets/email.svg" alt="Email" className={styles.contactIcon} />
              <span className={styles.contactText}>debra.holt@example.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className={styles.copyright}>Made With Love By Figmaland All Right Reserved</p>
            </div>
            <div className="col-md-6">
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}>
                  <img src="/assets/facebook.svg" alt="Facebook" />
                </a>
                <a href="#" className={styles.socialLink}>
                  <img src="/assets/instagram.svg" alt="Instagram" />
                </a>
                <a href="#" className={styles.socialLink}>
                  <img src="/assets/twitter.svg" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
