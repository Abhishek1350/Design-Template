import { useState } from "react";
import styles from "./styles.module.css";

function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

type FormStatus = "idle" | "loading" | "success" | "error";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function CtaForm() {
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");
    const [email, setEmail] = useState("");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validateEmail(email)) {
            setFormStatus("error");
            return;
        }

        setFormStatus("loading");
        await sleep(1000);
        setFormStatus("success");
        setEmail("");
    }

    return (
        <div>
            <form className={styles.inputForm} onSubmit={handleSubmit}>
                <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className={styles.emailInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="btn-custom btn-primary-custom"
                    type="submit"
                    disabled={formStatus === "loading"}
                >
                    {formStatus === "loading" ? "Loading..." : "Subscribe"}
                </button>
            </form>
            {formStatus === "success" && (
                <p className={styles.successMessage}>Thanks for subscribing!</p>
            )}
            {formStatus === "error" && (
                <p className={styles.errorMessage}>Please enter a valid email</p>
            )}
        </div>
    );
}
