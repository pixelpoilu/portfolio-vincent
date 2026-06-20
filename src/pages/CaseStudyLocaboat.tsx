import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    type ComponentType,
    type MouseEvent,
    type ReactElement,
    type ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Link } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";
import { CiCircleChevDown } from "react-icons/ci";
import { IoArrowRedo } from "react-icons/io5";

import grainTexture from "../assets/images/textures/grain.webp";
import CaseStudyProjectData from "../components/CaseStudyProjectData";
import projectsData from "../data/project-prod.json";
import type { Project } from "../types/Project";
import { lazyImageProps, priorityImageProps } from "../utils/imageLoading";

import heroVisual from "../assets/images/projects/rea_web_locaboat/rea_web_locaboat_diapooo.webp";
import moduleVisual from "../assets/images/projects/rea_web_locaboat/module_website.webp";

import bateaux from "../assets/images/projects/rea_web_locaboat/version_2008/penichettes-bateaux.png";
import bateauxThumb from "../assets/images/projects/rea_web_locaboat/version_2008/penichettes-bateaux_ti.webp";
import bateauxFicheThumb from "../assets/images/projects/rea_web_locaboat/version_2008/penichettes-fiche_ti.webp";
import bateauxFiche from "../assets/images/projects/rea_web_locaboat/version_2008/penichettes-fiche.png";

import bateauxVistVisitThumb from "../assets/images/projects/rea_web_locaboat/version_2008/penichettes-fiche_visite_virtuelle_ti.webp";
import bateauxVistVisit from "../assets/images/projects/rea_web_locaboat/version_2008/penichettes-fiche_visite_virtuelle.png";


import circuitsThumb from "../assets/images/projects/rea_web_locaboat/version_2008/circuits_ti.webp";
import circuits from "../assets/images/projects/rea_web_locaboat/version_2008/circuits.png";

import circuitsAnimThumb from "../assets/images/projects/rea_web_locaboat/version_2008/circuits_animation_ti.webp";
import circuitsAnim from "../assets/images/projects/rea_web_locaboat/version_2008/circuits_animation.png";

import reportagesThumb from "../assets/images/projects/rea_web_locaboat/version_2008/reportages_ti.webp";
import reportages from "../assets/images/projects/rea_web_locaboat/version_2008/reportages.png";

import TarifsThumb from "../assets/images/projects/rea_web_locaboat/version_2008/tarifs_ti.webp";
import Tarifs from "../assets/images/projects/rea_web_locaboat/version_2008/tarifs.png";


import InfoBaseThumb from "../assets/images/projects/rea_web_locaboat/version_2008/infobases_ti.webp";
import InfoBase from "../assets/images/projects/rea_web_locaboat/version_2008/infobases.webp";

import locaboatServices from "../assets/images/projects/rea_web_locaboat/locaboat_services.png";
import multilanguesIMGti from "../assets/images/projects/rea_web_locaboat/locaboat_multilangues_ti.png";

/*
TarifsThumb
circuits
import routeVisual from "../assets/images/projects/rea_web_locaboat/03.png";
import mapVisual from "../assets/images/projects/rea_web_locaboat/04.png";

import offerVisual from "../assets/images/projects/rea_web_locaboat/06.png";
import contentVisual from "../assets/images/projects/rea_web_locaboat/07.png";

reportages_ti

import brochurePanoramaVisual from "../assets/images/projects/rea_bol_locaboat/rea_bol_locaboat_panorama.png";


*/
import bookingVisual from "../assets/images/projects/rea_web_locaboat/module_resa.webp";


import portailVisual00 from "../assets/images/projects/rea_web_locaboat/projet_portail/homepage.webp";
import portailVisual00Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/homepage_ti.webp";

import portailVisual01 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step01.png";
import portailVisual01Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step01_ti.webp";

import portailVisual02 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step02.png";
import portailVisual02Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step02_ti.webp";

import portailVisual03 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step03.png";
import portailVisual03Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step03_ti.webp";

import portailVisual04 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step04.png";
import portailVisual04Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step04_ti.webp";

import portailVisual05 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step05.png";
import portailVisual05Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step05_ti.webp";

import portailVisual06 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step06.png";
import portailVisual06Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step06_ti.webp";

import portailVisual07 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step07.png";
import portailVisual07Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step07_ti.webp";

import portailVisual08 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step08.png";
import portailVisual08Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step08_ti.webp";

import portailVisual09 from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step09.png";
import portailVisual09Thumb from "../assets/images/projects/rea_web_locaboat/projet_portail/portail_step09_ti.webp";

import PasserelleProcess from "../assets/images/projects/rea_web_locaboat/projet_portail/process_schema03_flux.png";




const CircleChevDown = CiCircleChevDown as unknown as ComponentType<{
    className?: string;
}>;
const ArrowRightShort = BsArrowRightShort as unknown as ComponentType<{
    className?: string;
}>;
const ArrowRedo = IoArrowRedo as unknown as ComponentType<{
    className?: string;
}>;

const surfaceClassName =
    "rounded-[28px] border border-black/8 bg-white/78 p-6 shadow-[0_16px_40px_rgba(18,22,29,0.07)] backdrop-blur-md md:p-7";
const shellClassHome =
    "mx-auto max-w-[1200px] gap-10 px-6 pb-0 pt-6 sm:gap-12 sm:px-6 sm:pb-10 sm:pt-10 md:grid md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] md:items-center md:gap-16 md:px-8";
const shellClassName =
    "mx-auto max-w-[1200px] px-6 pb-5 pt-10 sm:px-6 sm:pb-10 sm:pt-10 md:px-8";
const eyebrowClassName =
    "text-[0.79rem] uppercase tracking-[0.32em] text-neutral-500";
const sectionTitleClassName =
    "text-4xl leading-[0.95] tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl";
const fullWidthSection =
    "relative z-10 min-h-[calc(100vh-72px)] w-full py-8";
const fullScreenHome =
    "relative z-10 grid min-h-[calc(100vh-72px)] w-full place-items-center overflow-hidden py-8";

const reveal = {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, amount: 0.2 },
};

const heroFirstReveal = {
    initial: { opacity: 0, filter: "blur(10px) grayscale(100%)" },
    whileInView: { opacity: 1, filter: "blur(0px) grayscale(0%)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.3 },
};

const heroSecondReveal = {
    initial: { opacity: 0, filter: "blur(10px) grayscale(100%)" },
    whileInView: { opacity: 1, filter: "blur(0px) grayscale(0%)" },
    transition: { duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.3 },
};

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    body?: string;
    className?: string;
};

function SectionHeading({
    eyebrow,
    title,
    body,
    className = "",
}: SectionHeadingProps) {
    return (
        <motion.div {...reveal} className={`grid gap-4 ${className}`.trim()}>
            <p className={eyebrowClassName}>{eyebrow}</p>
            <h2
                className={sectionTitleClassName}
                style={{ fontFamily: "var(--font-hero)" }}
            >
                {title}
            </h2>
            {body ? (
                <p className="max-w-3xl text-base leading-8 text-neutral-800 md:text-lg">
                    {body}
                </p>
            ) : null}
        </motion.div>
    );
}

function ArrowListItem({ children }: { children: ReactNode }) {
    return (
        <li className="list-none">
            <div className="flex items-start gap-3">
                <ArrowRightShort className="mt-[0.35rem] h-5 w-5 shrink-0 text-neutral-700" />
                <div className="min-w-0 flex-1 text-base leading-8 text-neutral-700">
                    {children}
                </div>
            </div>
        </li>
    );
}

type GalleryImage = {
    src: string;
    big: string;
    alt: string;
    caption: string;
};
const screenCentreGalleryItems: GalleryImage[] = [
    {
        src: portailVisual00Thumb, big: portailVisual00,
        alt: "Home Page",
        caption: "Home Page",
    },
    {
        src: portailVisual01Thumb, big: portailVisual01,
        alt: "Formulaire de recherche",
        caption: "Formulaire de recherche",
    },
    {
        src: portailVisual02Thumb, big: portailVisual02,
        alt: "Agenda de réservation",
        caption: "Agenda de réservation",
    },
    {
        src: portailVisual03Thumb, big: portailVisual03,
        alt: "Résultats de recherche",
        caption: "Résultats de recherche",
    },
    {
        src: portailVisual04Thumb, big: portailVisual04,
        alt: "Panier de sélections",
        caption: "Panier de sélections",
    },
    {
        src: portailVisual05Thumb, big: portailVisual05,
        alt: "Outils de comparaison",
        caption: "Outils de comparaison",
    },
    {
        src: portailVisual06Thumb, big: portailVisual06,
        alt: "Formulaire de réservation",
        caption: "Formulaire de réservation",
    },
    {
        src: portailVisual07Thumb, big: portailVisual07,
        alt: "Confirmation de réservation",
        caption: "Confirmation de réservation",
    },
    {
        src: portailVisual08Thumb, big: portailVisual08,
        alt: "Recueil d'informations client",
        caption: "Recueil d'informations client",
    },
    {
        src: portailVisual09Thumb, big: portailVisual09,
        alt: "Paiement en ligne",
        caption: "Paiement en ligne",
    },
];
function ImageGallery({
    items,
    onImageClick,
}: {
    items: GalleryImage[];
    onImageClick: (src: string, alt: string) => void;
}) {
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = useCallback(() => {
        const gallery = galleryRef.current;

        if (!gallery) {
            return;
        }

        const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
        setCanScrollLeft(gallery.scrollLeft > 4);
        setCanScrollRight(maxScrollLeft - gallery.scrollLeft > 4);
    }, []);

    useEffect(() => {
        updateScrollState();

        const handleResize = () => updateScrollState();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [items, updateScrollState]);

    useEffect(() => {
        const gallery = galleryRef.current;

        if (!gallery) {
            return;
        }

        const handleWheelScroll = (event: globalThis.WheelEvent) => {
            const canScrollHorizontally = gallery.scrollWidth > gallery.clientWidth;

            if (!canScrollHorizontally || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
                return;
            }

            event.preventDefault();
            gallery.scrollLeft += event.deltaY;
            updateScrollState();
        };

        gallery.addEventListener("wheel", handleWheelScroll, { passive: false });

        return () => {
            gallery.removeEventListener("wheel", handleWheelScroll);
        };
    }, [items, updateScrollState]);

    if (items.length === 0) {
        return null;
    }

    const scrollGalleryBy = (direction: "left" | "right") => {
        const gallery = galleryRef.current;

        if (!gallery) {
            return;
        }

        gallery.scrollBy({
            left: direction === "right" ? Math.max(gallery.clientWidth * 0.72, 280) : -Math.max(gallery.clientWidth * 0.72, 280),
            behavior: "smooth",
        });

        window.setTimeout(updateScrollState, 220);
    };

    return (
        <div className="grid gap-4">
            <div
                ref={galleryRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:pr-8"
                onScroll={updateScrollState}
            >
                {items.map((item, index) => (
                    <button
                        key={`${item.alt}-${index}`}
                        type="button"
                        onClick={() => onImageClick(item.big, item.alt)}
                        aria-label={`Ouvrir ${item.alt}`}
                        className="group relative block w-[min(74vw,320px)] shrink-0 snap-start overflow-hidden rounded-[28px] border border-black/10 bg-white/82 text-left shadow-[0_16px_40px_rgba(18,22,29,0.08)] md:w-70-[300px]"
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="block aspect-4/5 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                            {...lazyImageProps}
                        />
                        <span className="pointer-events-none absolute inset-x-4 bottom-4 rounded-full bg-black/65 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                            {item.caption}
                        </span>
                    </button>
                ))}
            </div>

            <div className="hidden items-center justify-end gap-2 md:flex">
                <button
                    type="button"
                    onClick={() => scrollGalleryBy("left")}
                    disabled={!canScrollLeft}
                    aria-label="Voir les visuels précédents"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/88 text-2xl text-neutral-900 shadow-[0_12px_28px_rgba(18,22,29,0.08)] transition disabled:cursor-not-allowed disabled:opacity-35"
                >
                    <span aria-hidden="true">‹</span>
                </button>
                <button
                    type="button"
                    onClick={() => scrollGalleryBy("right")}
                    disabled={!canScrollRight}
                    aria-label="Voir les visuels suivants"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/88 text-2xl text-neutral-900 shadow-[0_12px_28px_rgba(18,22,29,0.08)] transition disabled:cursor-not-allowed disabled:opacity-35"
                >
                    <span aria-hidden="true">›</span>
                </button>
            </div>
        </div>
    );
}

function Lightbox({
    src,
    alt,
    isOpen,
    onClose,
}: {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}) {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (!isOpen) {
            return;
        }

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    className="fixed inset-0 z-1500 grid place-items-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.img
                        src={src}
                        alt={alt}
                        className="max-h-[90vh] max-w-[90vw] cursor-zoom-out object-contain"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        onClick={(event: MouseEvent<HTMLImageElement>) => {
                            event.stopPropagation();
                            onClose();
                        }}
                    />
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

const summaryCards = [
    {
        value: "2001-2014",
        label: "D'un site 'Brochure' vers une plateforme commerciale et informative.",
        detail:
            "Gestion du site dans la durée : refonte, contenus, SEO, évolutions techniques, conversion et maintenance.",
    },
    {
        value: "Paiement + flotte",
        label: "services connectés",
        detail:
            "Mise en place d'une API de paiement et connexion au service de planning de la flotte.",
    },
    {
        value: "Leader européen",
        label: "croissance accompagnée",
        detail:
            "En dix ans, le site accompagne, notamment gràce à un SEO efficace, la montée en puissance de Locaboat Plaisance sur le tourisme fluvial.",
    },
];

const timelinePhases = [
    {
        period: "Phase 1",
        title: "Devenir une brochure interactive, et bien plus.",
        body:
            "Le premier chantier transforme la brochure commerciale en pages web vivantes, capables de donner envie, de guider le choix et de capter les demandes entrantes.",
        image: moduleVisual,
        alt: "Site Internet Locaboat",
        bullets: [
            "Adaptation de la brochure en pages web pour décupler l'attractivité des destinations.",
            "Création de formulaires pour automatiser la captation et le traitement des prospects.",
            "Déploiement de visites virtuelles, brochure en ligne, parcours animés, tarifs et impressions de pages.",
        ],
    },
    {
        period: "Phase 2",
        title: "Installer le référencement naturel et l'expansion européenne.",
        body:
            "La croissance passe par une stratégie SEO multilingue, des versions locales et des relais éditoriaux capables d'ancrer Locaboat dans ses marchés européens.",
        image: multilanguesIMGti,
        alt: "Carte des destinations Locaboat",
        bullets: [
            "Création des versions néerlandaise et italienne du site.",
            "Optimisation SEO des contenus et des destinations dans les marchés clés.",
            "Multiplication de serveurs CDN locaux et collaborations de contenus avec sites locaux, blogs et presse.",
        ],
    },
    {
        period: "Phase 3",
        title: "Compléter l'offre autour du séjour.",
        body:
            "Le site devient aussi un service pour les clients acquis, avec des informations pratiques et des options complémentaires avant le départ.",
        image: locaboatServices,
        alt: "Informations de base Locaboat",
        bullets: [
            "Pages services et informations détaillées sur les bases de départ, les circuits, les infos pratiques.",
            "Demandes de services complémentaires et commande d'options en ligne.",
            "Transferts de véhicules, livrets de bord, location de vélos, guides de navigation de séjour.",
        ],
    },
    {
        period: "Phase 4",
        title: "Propulser la conversion.",
        body:
            "Le dernier grand chantier connecte le site au planning interne et ouvre un parcours de réservation plus direct, jusqu'au paiement en ligne.",
        image: bookingVisual,
        alt: "Parcours de réservation Locaboat",
        bullets: [
            "Connexion du planning interne au site pour exposer les disponibilités de la flotte.",
            "Mise en place technique de la passerelle et création de l'interface de réservation.",
            "Animation commerciale, offres spéciales, promotions et paiement en ligne.",
        ],
    },
];

const locaboatGalleryItems: GalleryImage[] = [
    {
        src: portailVisual00Thumb,
        big: portailVisual00,
        alt: "Page d'accueil Locaboat",
        caption: "Accueil",
    },
    {
        src: bateauxThumb,
        big: bateaux,
        alt: "Recherche de bateaux Locaboat",
        caption: "Recherche",
    },

    {
        src: bateauxFicheThumb,
        big: bateauxFiche,
        alt: "Fiche de bateaux Locaboat",
        caption: "Fiche bateau",
    },

    {
        src: bateauxVistVisitThumb,
        big: bateauxVistVisit,
        alt: "Visite virtuelle",
        caption: "Visite virtuelle",
    },

    {
        src: circuitsThumb,
        big: circuits,
        alt: "Carte des destinations",
        caption: "Carte des destinations",
    },

    {
        src: circuitsAnimThumb,
        big: circuitsAnim,
        alt: "Tous les circuits animés",
        caption: "Tous les circuits animés",
    },

    {
        src: reportagesThumb,
        big: reportages,
        alt: "Reportages régions",
        caption: "Reportages régions",
    },

    {
        src: TarifsThumb,
        big: Tarifs,
        alt: "Tarifs Locaboat",
        caption: "Grille tarifaire",
    },

    {
        src: InfoBaseThumb,
        big: InfoBase,
        alt: "InfoBase Locaboat",
        caption: "Toutes les infos des bases",
    },

];

const strengths = [
    "Piloter un site touristique dans la durée, entre image de marque, contenu, conversion et contraintes techniques.",
    "Relier des briques métiers hétérogènes : paiement, planning de flotte, contenus multilingues, hébergement et prestataires.",
    "Transformer des supports commerciaux en expériences interactives utiles : carte, visites 3D, brochure online et contenus de séjour.",
    "Maintenir une cohérence entre site vitrine, outil de réservation et patrimoine visuel d'une marque nautique.",
];

const skills = [
    "Refonte graphique et suivi d'interface",
    "Gestion complète de site dynamique",
    "Flash, ActionScript, PHP et MySQL",
    "API de paiement",
    "Connexion au planning de flotte",
    "Optimisation SEO",
    "Versions multilingues",
    "Back-office propriétaire",
    "Création de contenus interactifs",
    "Gestion hébergement et prestataires",
];

type CaseStudyLocaboatProps = {
    project?: Project;
};

const fallbackProject = (projectsData as Project[]).find(
    (entry) => entry.id === 14,
);

export default function CaseStudyLocaboat({
    project,
}: CaseStudyLocaboatProps): ReactElement {
    const resolvedProject = project ?? fallbackProject;
    const [lightboxState, setLightboxState] = useState<{
        isOpen: boolean;
        src: string;
        alt: string;
    }>({ isOpen: false, src: "", alt: "" });

    const { scrollYProgress } = useScroll();
    const grainOpacity = useSpring(
        useTransform(scrollYProgress, [0, 0.21], [0, 0.11]),
        {
            stiffness: 120,
            damping: 28,
            mass: 0.24,
        },
    );

    const openLightbox = (src: string, alt: string) => {
        setLightboxState({ isOpen: true, src, alt });
    };

    const closeLightbox = () => {
        setLightboxState((current) => ({ ...current, isOpen: false }));
    };

    const handleScrollToScreen = (
        event: MouseEvent<HTMLAnchorElement>,
        screenId: string,
    ) => {
        event.preventDefault();
        document.getElementById(screenId)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    if (!resolvedProject) {
        return (
            <main className="mx-auto flex min-h-[60vh] w-full max-w-225 items-center px-6 py-16 text-neutral-950">
                <p className="text-lg leading-8 text-neutral-700">
                    Le projet Locaboat est introuvable dans les données.
                </p>
            </main>
        );
    }

    return (
        <main
            className="relative isolate text-neutral-950"
            style={{ background: "var(--bg)" }}
        >
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-10 mix-blend-multiply"
                style={{
                    opacity: grainOpacity,
                    backgroundImage: `url(${grainTexture})`,
                    backgroundPosition: "center",
                    backgroundSize: "35%",
                    willChange: "opacity",
                }}
            />

            <section className={fullScreenHome} id="screen01">
                <div className={shellClassHome}>
                    <motion.div {...heroFirstReveal}>
                        <div className="relative z-10 grid content-center gap-5">
                            <p className={eyebrowClassName}>Locaboat</p>
                            <h1
                                className="text-[clamp(3.3rem,11vw,7rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Faire naviguer le site avec la marque.
                            </h1>
                            <p className="max-w-xl text-[clamp(1.15rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700">
                                Gestion complète du site Locaboat, leader européen du tourisme fluvial.
                                Une présence digitale renforcée au fil des années.
                            </p>
                            <div className="h-px w-24 bg-black/10" />
                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                                {[
                                    "Tourisme fluvial",
                                    "Site dynamique",
                                    "Paiement",
                                    "SEO",
                                ].map((pill) => (
                                    <span
                                        key={pill}
                                        className="inline-flex items-center gap-3"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <figure className="relative mx-auto w-full max-w-205 pt-5">
                        <motion.img
                            {...heroSecondReveal}
                            src={heroVisual}
                            alt="Aperçu du site Locaboat"
                            {...priorityImageProps}
                            onClick={() =>
                                openLightbox(heroVisual, "Aperçu du site Locaboat")
                            }
                            className="block w-full cursor-zoom-in"
                        />
                    </figure>

                    <Link
                        to="#screen02"
                        className="absolute left-1/2 top-[calc(100vh-110px)] -translate-x-1/2 text-sm text-neutral-700"
                        onClick={(event) => handleScrollToScreen(event, "screen02")}
                    >
                        <div className="flex items-center gap-2">
                            <CircleChevDown className="h-9 w-9" />
                            Scroller
                        </div>
                    </Link>
                </div>
            </section>

            <section className={fullWidthSection} id="screen02">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Mission"
                        title="Un site de tourisme à exploiter comme un produit vivant."
                        body="Locaboat ne demandait pas seulement une présence en ligne : le site devait inspirer, rassurer, orienter le choix d'un séjour, connecter la disponibilité de la flotte et accompagner la conversion."
                    />

                    <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Contexte</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Une marque de voyage, un site à maintenir dans le temps.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                La mission couvre la gestion complète du site Internet de
                                Locaboat : refonte graphique, mise à jour régulière des contenus
                                et des médias, optimisation SEO, suivi technique, hébergement et
                                coordination des prestataires. Le site devait rester fidèle à
                                l'imaginaire de la Pénichette tout en servant des parcours très
                                concrets : choisir une destination, comprendre les itinéraires,
                                consulter les ports, vérifier une disponibilité et réserver.
                            </p>
                        </motion.article>

                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Mon rôle</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Relier l'expérience éditoriale au système métier.
                            </h3>
                            <ul className="mt-5 grid gap-3 p-0">
                                <ArrowListItem>
                                    Concevoir et faire évoluer l'interface du site au rythme des
                                    besoins commerciaux.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Créer des contenus interactifs de promotion : visites 3D,
                                    carte des ports, parcours animés et brochure online.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Brancher les étapes sensibles du parcours : paiement en ligne
                                    et service de planning de la flotte.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Maintenir les versions multilingues, le SEO, les médias et le
                                    socle technique.
                                </ArrowListItem>
                            </ul>
                        </motion.article>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {summaryCards.map((card) => (
                            <motion.article
                                key={card.label}
                                {...reveal}
                                className={surfaceClassName}
                            >
                                <p className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[0.95] tracking-[-0.05em] text-neutral-950">
                                    {card.value}
                                </p>
                                <h3 className="mt-4 text-lg leading-7 text-neutral-900">
                                    {card.label}
                                </h3>
                                <p className="mt-3 text-base leading-8 text-neutral-600">
                                    {card.detail}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={fullWidthSection} id="screen03">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Écosystème"
                        title="Quatre grands chantiers pour faire mûrir le site."
                        body="De 2001 à 2014, la gestion du site accompagne Locaboat Plaisance dans une transformation progressive : brochure interactive, acquisition européenne, services clients, puis réservation connectée."
                    />

                    <div className="grid gap-5 lg:grid-cols-2">
                        {timelinePhases.map((phase) => (
                            <motion.article
                                key={phase.period}
                                {...reveal}
                                className={`${surfaceClassName} overflow-hidden p-0`}
                            >
                                <button
                                    type="button"
                                    className="block w-full cursor-zoom-in text-left"
                                    onClick={() => openLightbox(phase.image, phase.alt)}
                                >
                                    <img
                                        src={phase.image}
                                        alt={phase.alt}
                                        className="block aspect-4/3 w-full object-cover"
                                        {...lazyImageProps}
                                    />
                                </button>
                                <div className="grid gap-4 p-6 md:p-7">
                                    <p className={eyebrowClassName}>{phase.period}</p>
                                    <h3
                                        className="text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                        style={{ fontFamily: "var(--font-hero)" }}
                                    >
                                        {phase.title}
                                    </h3>
                                    <p className="text-base leading-8 text-neutral-600">
                                        {phase.body}
                                    </p>
                                    <ul className="grid gap-3 p-0">
                                        {phase.bullets.map((bullet) => (
                                            <ArrowListItem key={bullet}>{bullet}</ArrowListItem>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={fullWidthSection} id="screen04">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Parcours"
                        title="Inspirer le séjour, puis réduire la distance avec la réservation."
                        body="Le site devait associer une promesse très visuelle, liée au voyage fluvial, à des actions précises : explorer les destinations, comprendre les bateaux, localiser les ports et avancer vers une réservation."
                    />

                    <motion.article
                        {...reveal}
                        className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                    >
                        <p className={eyebrowClassName}>
                            <ArrowRedo className="mr-2 inline h-4 w-4" />
                            Site commercial
                        </p>
                        <h3
                            className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Un parcours qui transforme l'envie d'évasion en choix concret.
                        </h3>
                        <p className="mt-4 text-base leading-8 text-neutral-600">
                            Mon travail consistait à garder l'équilibre entre l'imaginaire de la
                            navigation et l'efficacité d'un site marchand. Les pages devaient
                            donner envie, mais aussi aider l'utilisateur à comparer, se repérer,
                            vérifier les informations utiles et progresser vers la demande ou la
                            réservation.
                        </p>
                        <div className="mt-6">
                            <ImageGallery
                                items={locaboatGalleryItems}
                                onImageClick={openLightbox}
                            />
                        </div>
                    </motion.article>
                </div>
            </section>


            <section className={fullWidthSection} id="screen05">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Réservation"
                        title="Assurer la conversion"
                        body="Le site ne devait plus seulement générer des demandes : il devait rapprocher l'utilisateur d'une réservation ferme, en affichant les disponibilités, en structurant le parcours et en sécurisant le paiement."
                    />
                    <div className="grid gap-5 grid-cols-1">
                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>
                                <ArrowRedo className="mr-2 inline h-4 w-4" />
                                Connexion au planning de flotte
                            </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Un défi technique.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Le défi consistait à relier le site au système interne de Locaboat, basé sur un environnement AS400 et COBOL. J&apos;ai coordonné l'intervention d'un spécialiste de ces technologies pour concevoir une passerelle sécurisée entre les deux applicatifs, rendre les disponibilités exploitables côté web et ouvrir la voie à un parcours de réservation complet.
                            </p>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Cette connexion a permis de passer d'un site très riche en contenus à un outil commercial plus opérationnel : recherche tarifaire, sélection du séjour, recueil des informations client, confirmation et paiement en ligne.
                            </p>
                            <button
                                type="button"
                                className="mt-6 block w-full object-fill  cursor-zoom-in overflow-visible rounded-3xl border border-black/10"
                                onClick={() =>
                                    openLightbox(
                                        PasserelleProcess,
                                        "Schéma de passerelle entre le site Locaboat et le planning interne",
                                    )
                                }
                            >
                                <img
                                    src={PasserelleProcess}
                                    alt="Schéma de passerelle entre le site Locaboat et le planning interne"
                                    className="block w-full"
                                    {...lazyImageProps}
                                />
                            </button>
                            <div className="mt-6">
                                <ImageGallery
                                    items={screenCentreGalleryItems}
                                    onImageClick={openLightbox}
                                />
                            </div>
                        </motion.article>

                    </div>
                </div>
            </section>
            <section className={fullWidthSection} id="screen08">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Points forts"
                        title="Ce que ce projet met en valeur dans ma pratique."
                        body="Une capacité à tenir ensemble l'image, le contenu, les systèmes métiers et l'exploitation technique d'un site touristique dans la durée."
                    />

                    <div className="grid gap-5 lg:grid-cols-[0.96fr_1.04fr]">
                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Ce projet dit de moi</p>
                            <div className="mt-4 grid gap-5">
                                {strengths.map((strength) => (
                                    <div
                                        key={strength}
                                        className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0"
                                    >
                                        <p className="text-base leading-8 text-neutral-700">
                                            {strength}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.article>

                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Compétences mobilisées</p>
                            <ul className="mt-4 grid gap-3 p-0 sm:grid-cols-2">
                                {skills.map((skill) => (
                                    <ArrowListItem key={skill}>{skill}</ArrowListItem>
                                ))}
                            </ul>
                        </motion.article>
                    </div>
                </div>
            </section>

            <section className={`${fullWidthSection} project-detail`} id="screen09">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Fiche projet"
                        title={resolvedProject.title}
                        body="La fiche ci-dessous reprend les données portfolio rattachées au site Internet Locaboat."
                    />

                    <motion.div {...reveal}>
                        <CaseStudyProjectData project={resolvedProject} />
                    </motion.div>
                </div>
            </section>

            <Lightbox
                src={lightboxState.src}
                alt={lightboxState.alt}
                isOpen={lightboxState.isOpen}
                onClose={closeLightbox}
            />
        </main>
    );
}
