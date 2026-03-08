import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.instagram.com", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://www.pinterest.com", label: "Pinterest", Icon: FaPinterest },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Reseaux sociaux">
      <p className="footer-note">
        &copy; {year} copyright <a href="https://vincent-lepretre.fr">vincent-lepretre.fr</a> Tous droits r&eacute;serv&eacute;s
      </p>
      <ul className="footer-social">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

