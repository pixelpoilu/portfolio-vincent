export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Vincent Leprêtre — Webmaster / Développeur Front
      </p>
      <p className="footer-links">
        <a href="/contact">Contact</a> ·{" "}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
