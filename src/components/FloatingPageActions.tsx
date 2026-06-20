import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";

import { dedicatedCaseStudies } from "../config/dedicatedCaseStudies";

const SCROLL_THRESHOLD = 260;
const SCROLL_ROOM_THRESHOLD = 140;

type FloatingActionLink = {
  key: string;
  label: string;
  shortLabel: string;
  to: string;
  icon: JSX.Element;
};

export default function FloatingPageActions() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const caseStudyIndex = useMemo(() => {
    const match = location.pathname.match(/^\/etudes-de-cas\/([^/]+)\/?$/);
    const slug = match?.[1];

    if (!slug) {
      return -1;
    }

    return dedicatedCaseStudies.findIndex((caseStudy) => caseStudy.slug === slug);
  }, [location.pathname]);

  const caseStudyLinks = useMemo(() => {
    if (caseStudyIndex < 0) {
      return [];
    }

    const previous = dedicatedCaseStudies[caseStudyIndex - 1];
    const next = dedicatedCaseStudies[caseStudyIndex + 1];
    const links: FloatingActionLink[] = [];

    if (previous) {
      links.push({
        key: "previous-case-study",
        label: "Cas précédent",
        shortLabel: "Prec.",
        to: `/etudes-de-cas/${previous.slug}`,
        icon: <FaArrowLeft aria-hidden="true" />,
      });
    }

    if (next) {
      links.push({
        key: "next-case-study",
        label: "Cas suivant",
        shortLabel: "Suiv.",
        to: `/etudes-de-cas/${next.slug}`,
        icon: <FaArrowRight aria-hidden="true" />,
      });
    }

    return links;
  }, [caseStudyIndex]);

  const canShowContact = location.pathname !== "/contact";

  const updateVisibility = useCallback(() => {
    const scrollRoom =
      document.documentElement.scrollHeight - window.innerHeight;
    setIsVisible(
      scrollRoom > SCROLL_ROOM_THRESHOLD && window.scrollY > SCROLL_THRESHOLD,
    );
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const requestVisibilityUpdate = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        updateVisibility();
        rafId = null;
      });
    };

    window.addEventListener("scroll", requestVisibilityUpdate, { passive: true });
    window.addEventListener("resize", requestVisibilityUpdate);
    window.addEventListener("load", requestVisibilityUpdate);

    const resizeObserver =
      "ResizeObserver" in window
        ? new ResizeObserver(requestVisibilityUpdate)
        : undefined;
    resizeObserver?.observe(document.body);

    const initialTimeoutId = window.setTimeout(requestVisibilityUpdate, 0);
    const settledLayoutTimeoutId = window.setTimeout(requestVisibilityUpdate, 450);

    return () => {
      window.removeEventListener("scroll", requestVisibilityUpdate);
      window.removeEventListener("resize", requestVisibilityUpdate);
      window.removeEventListener("load", requestVisibilityUpdate);
      resizeObserver?.disconnect();
      window.clearTimeout(initialTimeoutId);
      window.clearTimeout(settledLayoutTimeoutId);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [location.pathname, updateVisibility]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const rootClassName = `floating-page-actions${isVisible ? " is-visible" : ""
    }`;

  return (
    <nav className={rootClassName} aria-label="Actions rapides de page">
      <div className="floating-page-actions__inner">
        {caseStudyLinks
          .filter((link) => link.key === "previous-case-study")
          .map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className="floating-page-actions__button"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
              <span>{link.label}</span>
              <small>{link.shortLabel}</small>
            </Link>
          ))}

        <button
          type="button"
          className="floating-page-actions__button"
          onClick={scrollToTop}
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          <FaArrowUp aria-hidden="true" />
          <span>Retour en haut</span>
          <small>Haut</small>
        </button>

        {canShowContact ? (
          <Link
            to="/contact"
            className="floating-page-actions__button floating-page-actions__button--contact"
            aria-label="Contact"
            title="Contact"
          >
            <FaEnvelope aria-hidden="true" />
            <span>Contact</span>
            <small>Contact</small>
          </Link>
        ) : null}

        {caseStudyLinks
          .filter((link) => link.key === "next-case-study")
          .map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className="floating-page-actions__button"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
              <span>{link.label}</span>
              <small>{link.shortLabel}</small>
            </Link>
          ))}
      </div>
    </nav>
  );
}
