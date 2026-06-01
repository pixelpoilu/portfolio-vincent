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

import grainTexture from "../assets/images/textures/grain.png";
import CaseStudyProjectData from "../components/CaseStudyProjectData";
import projectsData from "../data/project-prod.json";
import type { Project } from "../types/Project";

import heroVisual from "../assets/images/projects/rea_web_locaboat/rea_web_locaboat_diapo.png";
import homeVisual from "../assets/images/projects/rea_web_locaboat/01.jpg";
import searchVisual from "../assets/images/projects/rea_web_locaboat/02.jpg";
import routeVisual from "../assets/images/projects/rea_web_locaboat/03.jpg";
import mapVisual from "../assets/images/projects/rea_web_locaboat/04.png";
import bookingVisual from "../assets/images/projects/rea_web_locaboat/05.jpg";
import offerVisual from "../assets/images/projects/rea_web_locaboat/06.jpg";
import contentVisual from "../assets/images/projects/rea_web_locaboat/07.jpg";

import industriesHeroVisual from "../assets/images/projects/rea_web_locaboatindustries/rea_web_locaboatindustries_diapo.jpg";
import industriesHomeVisual from "../assets/images/projects/rea_web_locaboatindustries/locaboat_ind_00.jpg";
import industriesBoatVisual from "../assets/images/projects/rea_web_locaboatindustries/locaboat_ind_05.jpg";
import industriesPortListVisual from "../assets/images/projects/rea_web_locaboatindustries/locaboat_ind_04.jpg";
import industriesPortDetailVisual from "../assets/images/projects/rea_web_locaboatindustries/locaboat_ind_03.jpg";
import industriesAdminVisual from "../assets/images/projects/rea_web_locaboatindustries/locaboat_ind_admin_01.jpg";
import industries3dVisual01 from "../assets/images/projects/rea_web_locaboatindustries/locaboat_3D_07.jpg";
import industries3dVisual02 from "../assets/images/projects/rea_web_locaboatindustries/locaboat_3D_08.jpg";
import industries3dVisual03 from "../assets/images/projects/rea_web_locaboatindustries/locaboat_3D_09.jpg";

import brochurePanoramaVisual from "../assets/images/projects/rea_bol_locaboat/rea_bol_locaboat_panorama.png";
import brochureVisual01 from "../assets/images/projects/rea_bol_locaboat/01.jpg";
import brochureVisual02 from "../assets/images/projects/rea_bol_locaboat/02.jpg";
import brochureVisual03 from "../assets/images/projects/rea_bol_locaboat/03.jpg";
import brochureVisual04 from "../assets/images/projects/rea_bol_locaboat/04.jpg";

import portailVisual01 from "../assets/images/projects/rea_web_docbiker/franchise_formulaire_candidatures.png";
import portailVisual01Thumb from "../assets/images/projects/rea_web_docbiker/franchise_formulaire_candidatures_thumb.png";

import portailVisual02 from "../assets/images/projects/rea_web_docbiker/franchise_admin_centre_infos.png";
import portailVisual02Thumb from "../assets/images/projects/rea_web_docbiker/franchise_admin_centre_infos_thumb.png";

import portailVisual03 from "../assets/images/projects/rea_web_docbiker/franchise_admin_promo.png";
import portailVisual03Thumb from "../assets/images/projects/rea_web_docbiker/franchise_admin_promo_thumb.png";

import networkVisual from "../assets/images/projects/rea_web_docbiker/reseau_de_communication_siteweb_centres_via_ecrans-2026-04-26-1202.png";

import reseauScreenVisual01 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_01.png";
import reseauScreenVisual01Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_01_thumb.png";

import reseauScreenVisual02 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_02.png";
import reseauScreenVisual02Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_02_thumb.png";

import reseauScreenVisual03 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_03.png";
import reseauScreenVisual03Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_03_thumb.png";

import reseauScreenVisual04 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_04.png";
import reseauScreenVisual04Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_04_thumb.png";


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
        src: reseauScreenVisual01Thumb, big: reseauScreenVisual01,
        alt: "Variante de visuel promotionnel Doc'Biker",
        caption: "écran headquarter",
    },
    {
        src: reseauScreenVisual02Thumb, big: reseauScreenVisual02,
        alt: "Configuration du back-office Doc'Biker",
        caption: "écran dans un centre",
    },
    {
        src: reseauScreenVisual03Thumb, big: reseauScreenVisual03,
        alt: "Variante de visuel promotionnel Doc'Biker",
        caption: "exemple de diffusion",
    },
    {
        src: reseauScreenVisual04Thumb, big: reseauScreenVisual04,
        alt: "Variante de visuel promotionnel Doc'Biker",
        caption: "synchro avec le site",
    },
];
const portailGalleryItems: GalleryImage[] = [
    {
        src: portailVisual01Thumb,
        big: portailVisual01,
        alt: "Page franchise Doc'Biker",
        caption: "Recrutement franchise",
    },
    {
        src: portailVisual02Thumb,
        big: portailVisual02,
        alt: "Back-office Doc'Biker",
        caption: "Admin centre franchisé",
    },
    {
        src: portailVisual03Thumb,
        big: portailVisual03,
        alt: "Promotion franchise Doc'Biker",
        caption: "Admin Promotion franchise",
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
                        className="group relative block w-[min(74vw,320px)] shrink-0 snap-start overflow-hidden rounded-[28px] border border-black/10 bg-white/82 text-left shadow-[0_16px_40px_rgba(18,22,29,0.08)] md:w-[280px] lg:w-[300px]"
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="block aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
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
                    aria-label="Voir les visuels precedents"
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
                    className="fixed inset-0 z-[1500] grid place-items-center"
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
        value: "2001-2011",
        label: "D'un site 'Brochure' vers une plateforme commerciale et informative.",
        detail:
            "Refonte graphique, déploiement des contenus, optimisation SEO, évolutions techniques et maintenance.",
    },
    {
        value: "Paiement + flotte",
        label: "services connectés",
        detail:
            "Mise en place d'une API de paiement et connexion au service de planning de la flotte.",
    },
    {
        value: "Multi-support",
        label: "expérience de voyage",
        detail:
            "Site, contenus interactifs, visites 3D, carte des ports et brochure online travaillent comme un même dispositif.",
    },
];

const timelinePhases = [
    {
        period: "2002",
        title: "Présenter le constructeur et ses modèles.",
        body:
            "Locaboat Industries avait besoin d'un site dynamique pour valoriser la fabrication des Pénichettes, présenter les modèles et donner de la visibilité aux ports partenaires.",
        image: industriesHeroVisual,
        alt: "Site Locaboat Industries",
        bullets: [
            "Création d'un site dynamique en Flash, PHP et MySQL.",
            "Mise en place d'un back-office propriétaire pour les contenus et les médias.",
            "Présentation des modèles, des ports et des aménagements intérieurs.",
        ],
    },
    {
        period: "2010",
        title: "Faire vivre le site de location comme un outil commercial.",
        body:
            "Locaboat m'a confié la gestion complète de son site Internet : refonte, contenus, SEO, suivi technique et maintien d'une expérience cohérente pour préparer les séjours.",
        image: heroVisual,
        alt: "Site Internet Locaboat",
        bullets: [
            "Refonte graphique et évolution régulière de l'interface.",
            "Optimisation des versions multilingues et suivi SEO.",
            "Gestion des prestataires techniques et de l'hébergement.",
        ],
    },
    {
        period: "Services",
        title: "Connecter inspiration, disponibilité et réservation.",
        body:
            "Le site ne se limitait pas à une vitrine : il devait accompagner le choix de destination, vérifier la disponibilité et sécuriser les étapes de conversion.",
        image: bookingVisual,
        alt: "Parcours de réservation Locaboat",
        bullets: [
            "Mise en place d'une API de paiement.",
            "Connexion au service de planning de la flotte.",
            "Création de contenus interactifs de promotion des séjours.",
        ],
    },
];

const locaboatGalleryItems: GalleryImage[] = [
    {
        src: homeVisual,
        big: homeVisual,
        alt: "Page d'accueil Locaboat",
        caption: "Accueil",
    },
    {
        src: searchVisual,
        big: searchVisual,
        alt: "Recherche de séjour Locaboat",
        caption: "Recherche",
    },
    {
        src: routeVisual,
        big: routeVisual,
        alt: "Parcours de navigation Locaboat",
        caption: "Itinéraires",
    },
    {
        src: mapVisual,
        big: mapVisual,
        alt: "Carte des ports Locaboat",
        caption: "Carte des ports",
    },
    {
        src: bookingVisual,
        big: bookingVisual,
        alt: "Réservation Locaboat",
        caption: "Réservation",
    },
    {
        src: offerVisual,
        big: offerVisual,
        alt: "Offres Locaboat",
        caption: "Offres",
    },
    {
        src: contentVisual,
        big: contentVisual,
        alt: "Contenu éditorial Locaboat",
        caption: "Contenu",
    },
];

const industriesGalleryItems: GalleryImage[] = [
    {
        src: industriesHomeVisual,
        big: industriesHomeVisual,
        alt: "Accueil Locaboat Industries",
        caption: "Home industrie",
    },
    {
        src: industriesBoatVisual,
        big: industriesBoatVisual,
        alt: "Modèle de Pénichette",
        caption: "Modèle",
    },
    {
        src: industriesPortListVisual,
        big: industriesPortListVisual,
        alt: "Liste des ports Locaboat",
        caption: "Ports",
    },
    {
        src: industriesPortDetailVisual,
        big: industriesPortDetailVisual,
        alt: "Fiche port Locaboat",
        caption: "Fiche port",
    },
    {
        src: industriesAdminVisual,
        big: industriesAdminVisual,
        alt: "Administration Locaboat Industries",
        caption: "Back-office",
    },
];

const immersiveGalleryItems: GalleryImage[] = [
    {
        src: industries3dVisual01,
        big: industries3dVisual01,
        alt: "Visite 3D d'une Pénichette",
        caption: "Visite 3D",
    },
    {
        src: industries3dVisual02,
        big: industries3dVisual02,
        alt: "Détail d'aménagement intérieur",
        caption: "Aménagement",
    },
    {
        src: industries3dVisual03,
        big: industries3dVisual03,
        alt: "Personnalisation d'intérieur",
        caption: "Intérieur",
    },
    {
        src: brochureVisual01,
        big: brochureVisual01,
        alt: "Brochure online Locaboat",
        caption: "Brochure",
    },
    {
        src: brochureVisual02,
        big: brochureVisual02,
        alt: "Navigation dans la brochure online",
        caption: "Lecture PDF",
    },
    {
        src: brochureVisual03,
        big: brochureVisual03,
        alt: "Page de brochure Locaboat",
        caption: "Page brochure",
    },
    {
        src: brochureVisual04,
        big: brochureVisual04,
        alt: "Interface de brochure online",
        caption: "Interface",
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
            <main className="mx-auto flex min-h-[60vh] w-full max-w-[900px] items-center px-6 py-16 text-neutral-950">
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
                                Gestion complète du site Locaboat : refonte graphique,
                                contenus interactifs, optimisation SEO, paiement en ligne,
                                connexion au planning de flotte et suivi technique.
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

                    <figure className="relative mx-auto w-full max-w-[820px] pt-5">
                        <motion.img
                            {...heroSecondReveal}
                            src={heroVisual}
                            alt="Aperçu du site Locaboat"
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
                        title="Trois chantiers autour d'une même expérience nautique."
                        body="Le projet Locaboat s'étend du site commercial à des outils plus spécialisés : site constructeur, contenus immersifs, brochure online et briques connectées à la réservation."
                    />

                    <div className="grid gap-5 lg:grid-cols-3">
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
                                        className="block aspect-[4/3] w-full object-cover"
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
                        eyebrow="Contenus immersifs"
                        title="Rendre le produit touristique visible avant le départ."
                        body="Pour vendre un séjour fluvial, il faut aider l'utilisateur à se projeter : dans le bateau, dans les ports, dans le parcours et dans les supports commerciaux consultés à distance."
                    />

                    <div className="grid gap-5 lg:grid-cols-2">
                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>
                                <ArrowRedo className="mr-2 inline h-4 w-4" />
                                Locaboat Industries
                            </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Présenter les modèles, les ports et l'outil d'administration.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Le site constructeur complète l'écosystème Locaboat : il met en
                                avant les Pénichettes, les ports partenaires et les contenus
                                administrables. Cette partie montre ma capacité à produire un site
                                dynamique complet, avec une couche back-office sur mesure.
                            </p>
                            <div className="mt-6">
                                <ImageGallery
                                    items={industriesGalleryItems}
                                    onImageClick={openLightbox}
                                />
                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>
                                <ArrowRedo className="mr-2 inline h-4 w-4" />
                                3D et brochure online
                            </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Transformer les supports commerciaux en expériences consultables.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Les visites 3D, les vues d'aménagement et la brochure online
                                prolongent le site : elles donnent accès aux détails du bateau et
                                aux supports de vente sans rompre l'expérience digitale.
                            </p>
                            <button
                                type="button"
                                className="mt-6 block w-full cursor-zoom-in overflow-hidden rounded-[24px] border border-black/10"
                                onClick={() =>
                                    openLightbox(
                                        brochurePanoramaVisual,
                                        "Brochure online Locaboat",
                                    )
                                }
                            >
                                <img
                                    src={brochurePanoramaVisual}
                                    alt="Brochure online Locaboat"
                                    className="block w-full"
                                />
                            </button>
                            <div className="mt-6">
                                <ImageGallery
                                    items={immersiveGalleryItems}
                                    onImageClick={openLightbox}
                                />
                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>
            <section className={fullWidthSection} id="screen06">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Réservation"
                        title="Assurer la conversion"
                        body="Le site s'ouvre à la réservation ferme en ligne et à la connexion au planning de flotte."
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
                                J&apos;ai mis en relation un spécialiste des réseaux AS400, afin de pouvoir créer un pont entre le site et le système interne, il a donc fallu prévoir une passerelle sécurisée entre les 2 applicatifs.
                            </p>
                            <button
                                type="button"
                                className="mt-6 block w-full object-fill  cursor-zoom-in overflow-visible rounded-[24px] border border-black/10"
                                onClick={() =>
                                    openLightbox(
                                        networkVisual,
                                        "Schéma du réseau d'écrans Doc'Biker",
                                    )
                                }
                            >
                                <img
                                    src={networkVisual}
                                    alt="Schéma du réseau d'écrans Doc'Biker"
                                    className="block w-full"
                                />
                            </button>
                            <div className="mt-6">
                                <ImageGallery
                                    items={screenCentreGalleryItems}
                                    onImageClick={openLightbox}
                                />
                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>
                                <ArrowRedo className="mr-2 inline h-4 w-4" />
                                Franchise et back-office
                            </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Faire du site un pilier du développement de la franchise.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Au fil des refontes, mon rôle a dépassé la simple administration
                                de contenus : j&apos;ai transformé le site en outil de croissance pour
                                le réseau Doc&apos;Biker. Côté siège, les formulaires en ligne
                                centralisaient les candidatures de futurs franchisés et facilitaient
                                les routines de création d&apos;un nouveau centre. Côté terrain, les
                                chefs de centre gagnaient en autonomie sur les informations
                                pratiques, les opérations commerciales et le suivi des demandes
                                entrantes.
                            </p>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Cette approche qualifie mon intervention comme un rôle de
                                développeur produit orienté réseau : relier acquisition franchise,
                                exploitation quotidienne et génération de prospects dans un même
                                écosystème web.
                            </p>
                            <ul className="mt-5 grid gap-3 p-0">
                                <ArrowListItem>
                                    Recrutement en ligne des candidats à la franchise via des
                                    formulaires exploitables par le headquarter.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Automatisation des routines de création de centre pour accélérer
                                    l&apos;ouverture et la mise en ligne des fiches locales.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Outils web-to-shop pour rendre les franchisés plus autonomes dans
                                    leur communication promotionnelle et informative.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Mise à disposition d&apos;un espace documentaire en ligne pour
                                    partager les ressources utiles au réseau.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Administration des fiches centre et génération de devis donnant
                                    aux responsables une liste directe de clients potentiels.
                                </ArrowListItem>
                            </ul>
                            <div className="mt-6 grid gap-4  p-5 sm:grid-cols-[0.45fr_1.55fr] sm:items-center">
                                <div className="grid gap-4 rounded-[28px] border border-black/8 bg-white/78 p-6 shadow-[0_14px_34px_rgba(18,22,29,0.06)] backdrop-blur-md md:p-7">
                                    <p className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.99] tracking-[-0.10em] text-neutral-600  p-y-0 m-y-0 mx-auto">
                                        59<span className="text-base tracking-[-0.01em] font-normal text-neutral-500"> %</span></p>
                                    <p className="text-base p-y-0 m-y-0 leading-7 text-neutral-600 mx-auto text-center">de centres franchisés</p>
                                </div>
                                <p className="text-base leading-8 text-neutral-600">
                                    Le réseau passe d&apos;environ 13 centres au lancement de la
                                    franchise en 2011 à 22 centres en 2018. Le site
                                    accompagne cette structuration en outillant à la fois le siège,
                                    les chefs de centre et les parcours de devis.
                                </p>
                            </div>
                            <div className="mt-6">
                                <ImageGallery
                                    items={portailGalleryItems}
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

            <section className={fullWidthSection} id="screen09">
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
