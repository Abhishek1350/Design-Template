import { useState, useEffect } from "react";
import { Link } from "react-router";
import styles from "./styles.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Product" },
    { href: "/", label: "Pricing" },
    { href: "/", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`navbar navbar-expand-lg py-4 ${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isOpen ? styles.open : ""}`} >

            <div className="container">
                <Link
                    className="navbar-brand h3 mb-0"
                    style={{ fontWeight: 700, color: "var(--color-dark-navy)" }}
                    to="/"
                >
                    Brandname
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-lg-5 me-auto">
                        {navLinks.map((link, i) => (
                            <li className="nav-item mx-lg-3 my-2 my-lg-0" key={i}>
                                <Link className={`nav-link ${styles.navLink}`} to={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        <Link className={`me-5 ${styles.loginLink}`} to="/">
                            Login
                        </Link>
                        <Link
                            to="/"
                            className={`btn-custom btn-primary-custom ${styles.navJoinBtn}`}
                        >
                            JOIN US
                            <svg
                                className="ms-2"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 6H11M11 6L6 1M11 6L6 11"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
