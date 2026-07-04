export type CaseStudyHighlight = {
  id: number;
  label: string;
  summary: string;
  strengths: string[];
  accent: string;
};

export const selectedCaseStudies: CaseStudyHighlight[] = [
  {
    id: 68,
    label: "Refonte SaaS",
    summary:
      "Une refonte pensée pour moderniser la perception de marque, clarifier l'offre et préserver le SEO.",
    strengths: [
      "Nouvelle direction UX/UI plus lisible et premium",
      "Template WordPress custom, contenus et trackers conservés",
      "Performance, SEO et expérience mobile intégrés au projet",
    ],
    accent: "from-[#0c1d43] via-[#174f8f] to-[#f0a51e]",
  },
  {
    id: 60,
    label: "Parcours e-commerce",
    summary:
      "Un site réorganisé autour de l'expérience client et des contenus plus faciles à administrer.",
    strengths: [
      "Refonte UX centrée sur les services moto",
      "Back-office enrichi pour piloter les contenus",
      "SEO, catalogue et parcours client harmonisés",
    ],
    accent: "from-[#fe6a00] via-[#004d92] to-[#facc00]",
  },
  {
    id: 50,
    label: "Écosystème tourisme",
    summary:
      "Une collaboration longue pour faire évoluer le site, les contenus, le SEO et la réservation en ligne autour du voyage fluvial.",
    strengths: [
      "Refontes successives et stratégie éditoriale multilingue",
      "Passerelle de disponibilité reliée au système interne",
      "Brochures, modules et contenus touristiques connectés",
    ],
    accent: "from-[#2f7dbd] via-[#8dcf81] to-[#f2df80]",
  },
];
