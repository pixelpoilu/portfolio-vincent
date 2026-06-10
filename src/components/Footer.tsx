import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
import type { ComponentPropsWithoutRef } from "react";

const socialLinks = [
  { href: "https://www.facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://www.instagram.com", label: "Instagram", Icon: FaInstagram },
  { href: "https://www.linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://www.pinterest.com", label: "Pinterest", Icon: FaPinterest },
];

type FooterProps = ComponentPropsWithoutRef<"footer">;

export default function Footer({ className = "", ...props }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`mt-12 grid grid-cols-1 items-center gap-3 border-t border-black/10 bg-[#ececec] px-4 py-4 text-center md:mt-16 md:grid-cols-[1fr_auto_1fr] md:px-8 md:text-left ${className}`.trim()}
      aria-label="Reseaux sociaux"
      {...props}
    >
      <p className="m-0 text-sm leading-5 text-(--mycolor-black) md:col-2 md:justify-self-center">
        &copy; {year} copyright{" "}
        <a
          href="https://vincent-lepretre.fr"
          className="text-[#2f5e9d] transition hover:underline"
        >
          vincent-lepretre.fr
        </a>{" "}
        Tous droits reserves
      </p>
      <ul className="m-0 flex list-none items-center justify-center gap-[1.1rem] p-0 md:col-3 md:justify-self-end">
        {socialLinks.map(({ href, label, Icon }) => (
          <li key={label} className="inline-flex">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-5 w-5 items-center justify-center text-[#111] transition duration-200 hover:-translate-y-px hover:opacity-60"
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

