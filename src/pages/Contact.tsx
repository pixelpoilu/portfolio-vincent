import PageTransition from "../components/PageTransition";
import { useState } from "react";
import Footer from "../components/Footer";
export default function ContactForm() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;

        const response = await fetch("https://formspree.io/f/maqddkrq", {
            method: "POST",
            body: new FormData(form),
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            setStatus("Message envoyé ✅");
            form.reset();
        } else {
            setStatus("Erreur ❌");
        }
    }

    return (
        <PageTransition>
            <main className="contact-minimal">
                <div className="contact-wrapper">

                    <div className="contact-left">
                        <h1>Contact.</h1>
                        <p className="contact-description">
                            Disponible pour projets digitaux exigeants.
                        </p>
                    </div>

                    <form className="contact-form-minimal" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom complet"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Sujet"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={5}
                            required
                        />

                        <button type="submit">Envoyer
                        </button>

                        {status && <p className="form-status">{status}</p>}
                    </form>

                </div>

            </main>
            <Footer />
        </PageTransition>
    );
}