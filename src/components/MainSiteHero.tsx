import { useState, type FormEvent } from "react";
import Logo from "./Logo";

const portfolioUrl = "https://portfolio.vincent-lepretre.fr/";

export default function MainSiteHero() {
  const [message, setMessage] = useState("");

  const handleMemberAccess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("L’espace membres sera bientôt disponible.");
  };

  return (
    <main className="main-site-hero">
      <div className="main-site-hero__shell">
        <header className="main-site-hero__identity">
          <Logo className="main-site-hero__logo" />
          <div>
            <p className="main-site-hero__name">Vincent Leprêtre</p>
            <p className="main-site-hero__role">UX/UI Design &amp; Web expertise</p>
          </div>
        </header>

        <section className="main-site-hero__choices" aria-label="Accès au site">
          <a className="main-site-card main-site-card--portfolio" href={portfolioUrl}>
            <span className="main-site-card__index" aria-hidden="true">01</span>
            <span className="main-site-card__content">
              <span className="main-site-card__label">Portfolio</span>
              <strong>Découvrir mes projets</strong>
            </span>
            <span className="main-site-card__arrow" aria-hidden="true">↗</span>
          </a>

          <section className="main-site-card main-site-card--members">
            <div className="main-site-card__heading">
              <span className="main-site-card__index" aria-hidden="true">02</span>
              <div className="main-site-card__content">
                <span className="main-site-card__label">Espace privé</span>
                <strong>Accès membres</strong>
              </div>
            </div>

            <form className="main-site-login" onSubmit={handleMemberAccess}>
              <label>
                <span>Identifiant</span>
                <input name="username" type="text" autoComplete="username" required />
              </label>
              <label>
                <span>Mot de passe</span>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </label>
              <button type="submit">Se connecter <span aria-hidden="true">→</span></button>
              <p className="main-site-login__message" aria-live="polite">{message}</p>
            </form>
          </section>
        </section>

        <footer className="main-site-hero__footer">
          <span>Paris · France</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}
