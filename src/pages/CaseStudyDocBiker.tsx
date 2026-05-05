import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import {
    type ComponentType,
    type MouseEvent,
    type ReactElement,
    type ReactNode,
    type WheelEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { Link } from "react-router-dom";

import { CiCircleChevDown } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";
import { IoArrowRedo } from "react-icons/io5";

import grainTexture from "../assets/images/textures/grain.png";
import CaseStudyProjectData from "../components/CaseStudyProjectData";
import type { Project } from "../types/Project";

import heroVisual from "../assets/images/projects/rea_web_docbiker/new_docbiker_trsp.png";
import stage2006Visual from "../assets/images/projects/rea_web_docbiker/2006_docbiker_trsp.png";
import stage2011Visual from "../assets/images/projects/rea_web_docbiker/2011_docbiker_trsp.png";
import stage2017Visual from "../assets/images/projects/rea_web_docbiker/2017_docbiker_trsp.png";
import seoVisual from "../assets/images/projects/rea_web_docbiker/results_google.png";

import GalleryUxHome from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_home.png";
import GalleryUxHomeThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_home_thumb.png";

import GalleryUxHomeMenu from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_menu.png";
import GalleryUxHomeMenuThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_menu_thumb.png";

import GalleryUxForfaits from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_forfaits_n1.png";
import GalleryUxForfaitsThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_forfaits_n1_thumb.png";

import GalleryUxForfaitDetail from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_forfaits_n2.png";
import GalleryUxForfaitDetailThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_forfaits_n2_thumb.png";

import GalleryUxPneuSearch from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_pneu_n1.png";
import GalleryUxPneuSearchThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_pneu_n1_thumb.png";

import GalleryUxPneuSearchResults from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_pneu_n2.png";
import GalleryUxPneuSearchResultsThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_pneu_n2_thumb.png";

import GalleryUxPneuSearcDetail from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_pneus_n3.png";
import GalleryUxPneuSearcDetailThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_pneus_n3_thumb.png";

import GalleryUxAdmin from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_admin_home.png";
import GalleryUxAdminThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_admin_home_thumb.png";


import GalleryUxAdminPneus from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_admin_pneus_n1.png";
import GalleryUxAdminPneusThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_admin_pneus_n1_thumb.png";

import GalleryUxAdminPneuDetail from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_admin_pneus_n2.png";
import GalleryUxAdminPneuDetailThumb from "../assets/images/projects/rea_web_docbiker/2017_gallery_ux_admin_pneus_n2_thumb.png";




/*
import GalleryUxFranchise from "../assets/images/projects/rea_web_docbiker/gallery_ux_franchise.png";
import GalleryUxFranchiseThumb from "../assets/images/projects/rea_web_docbiker/gallery_ux_franchise_thumb.png";
import GalleryUxFranchise from "../assets/images/projects/rea_web_docbiker/gallery_ux_franchise.png";
import GalleryUxFranchiseThumb from "../assets/images/projects/rea_web_docbiker/gallery_ux_franchise_thumb.png";
import centreDetailVisual from "../assets/images/projects/rea_web_docbiker/fiche_centre.png";
import centerMapVisual from "../assets/images/projects/rea_web_docbiker/carte_centres.png";
import quoteVisual from "../assets/images/projects/rea_web_docbiker/devis.png";
import packagesVisual from "../assets/images/projects/rea_web_docbiker/forfaits.png";
import backofficeVisual from "../assets/images/projects/rea_web_docbiker/capture_backoffice.jpg";
import adminVisual from "../assets/images/projects/rea_web_docbiker/admin.png";
import mobileSearchVisual from "../assets/images/projects/rea_web_docbiker/mobile01.png";


*/

import networkVisual from "../assets/images/projects/rea_web_docbiker/reseau_de_communication_siteweb_centres_via_ecrans-2026-04-26-1202.png";

import projectsData from "../data/project-prod.json";


import reseauScreenVisual01 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_01.png";
import reseauScreenVisual01Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_01_thumb.png";

import reseauScreenVisual02 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_02.png";
import reseauScreenVisual02Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_02_thumb.png";


import reseauScreenVisual03 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_03.png";
import reseauScreenVisual03Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_03_thumb.png";

import reseauScreenVisual04 from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_04.png";
import reseauScreenVisual04Thumb from "../assets/images/projects/rea_web_docbiker/screen-reseaul-gallery_04_thumb.png";

import franchiseVisual01 from "../assets/images/projects/rea_web_docbiker/franchise_formulaire_candidatures.png";
import franchiseVisual01Thumb from "../assets/images/projects/rea_web_docbiker/franchise_formulaire_candidatures_thumb.png";

import franchiseVisual02 from "../assets/images/projects/rea_web_docbiker/franchise_admin_centre_infos.png";
import franchiseVisual02Thumb from "../assets/images/projects/rea_web_docbiker/franchise_admin_centre_infos_thumb.png";

import franchiseVisual03 from "../assets/images/projects/rea_web_docbiker/franchise_admin_promo.png";
import franchiseVisual03Thumb from "../assets/images/projects/rea_web_docbiker/franchise_admin_promo_thumb.png";



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

type ArrowListItemProps = {
    children: ReactNode;
};

function ArrowListItem({ children }: ArrowListItemProps) {
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

type ImageGalleryProps = {
    items: GalleryImage[];
    onImageClick: (src: string, big: string, alt: string) => void;
};

function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
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

    if (items.length === 0) {
        return null;
    }

    const handleWheelScroll = (event: WheelEvent<HTMLDivElement>) => {
        const gallery = event.currentTarget;
        const canScrollHorizontally = gallery.scrollWidth > gallery.clientWidth;

        if (!canScrollHorizontally || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
            return;
        }

        event.preventDefault();
        gallery.scrollLeft += event.deltaY;
        updateScrollState();
    };

    const scrollGalleryBy = (direction: "left" | "right") => {
        const gallery = galleryRef.current;

        if (!gallery) {
            return;
        }

        const offset = Math.max(gallery.clientWidth * 0.72, 280);
        gallery.scrollBy({
            left: direction === "right" ? offset : -offset,
            behavior: "smooth",
        });

        window.setTimeout(updateScrollState, 220);
    };

    return (
        <div className="grid gap-4">

            <div
                ref={galleryRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:pr-8"
                onWheel={handleWheelScroll}
                onScroll={updateScrollState}
            >
                {items.map((item, index) => (
                    <button
                        key={`${item.alt}-${index}`}
                        type="button"
                        onClick={() => onImageClick(item.big, item.alt, item.src)}
                        aria-label={`Ouvrir ${item.alt}`}
                        className="group relative block w-[min(74vw,320px)] shrink-0 snap-start overflow-hidden rounded-[28px] border border-black/10 bg-white/82 text-left shadow-[0_16px_40px_rgba(18,22,29,0.08)] md:w-[280px] lg:w-[300px]"
                    >
                        <img
                            src={item.src}
                            data-big={item.big}
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

type LightboxProps = {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
};

function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
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
        value: "2006-2018",
        label: "réalisation et suivi technique",
        detail:
            "Douze ans d'évolutions livrées, maintenues et fiabilisées, du socle SEO au site responsive administrable.",
    },
    {
        value: "3",
        label: "refontes intégrées",
        detail:
            "Trois refontes majeures réalisées à partir de wireframes et de maquettes Photoshop fournis par le directeur artistique.",
    },
    {
        value: "Web + centres",
        label: "exploitation web-to-store",
        detail:
            "Le site, les promotions, le back-office et les écrans en centres forment un même dispositif opérationnel.",
    },
];

const timelinePhases = [
    {
        period: "2006-2007",
        title: "Transformer une intention visuelle en base indexable.",
        body:
            "Premier enjeu : traduire l'univers graphique Doc'Biker en pages HTML exploitables par les moteurs, tout en conservant l'identité imaginée côté direction artistique.",
        image: stage2006Visual,
        alt: "Première version HTML du site Doc'Biker",
        bullets: [
            "Découpage, intégration et structuration HTML plus lisible et plus indexable.",
            "Création des premières pages utiles autour des centres, des pneus et des forfaits.",
            "Mise en place d'un socle technique capable de servir l'acquisition locale.",
        ],
    },
    {
        period: "2011",
        title: "Industrialiser les maquettes et clarifier l'offre.",
        body:
            "La refonte suivante accompagne la montée en puissance de l'enseigne. Mon rôle : transformer les wireframes et maquettes Photoshop en un site plus structuré, maintenable et cohérent dans Joomla.",
        image: stage2011Visual,
        alt: "Refonte 2011 du site Doc'Biker",
        bullets: [
            "Intégration d'une navigation plus claire entre centres, promos, forfaits et contenus.",
            "Mise en place de gabarits pour la franchise, les actualités et les opérations commerciales.",
            "Amélioration de la qualité d'administration pour rendre le réseau plus visible au quotidien.",
        ],
    },
    {
        period: "2017-2018",
        title: "Livrer un outil responsive, robuste et exploitable.",
        body:
            "La dernière phase pousse plus loin l'UX, le responsive et l'autonomie métier. À partir des intentions validées avec le directeur artistique, j'ai pris en charge la réalisation, les arbitrages techniques et la qualité de livraison.",
        image: stage2017Visual,
        alt: "Refonte 2017-2018 du site Doc'Biker",
        bullets: [
            "Parcours plus directs vers les centres, la révision, les pneus et le devis.",
            "Intégration responsive pensée pour le mobile et les parcours rapides.",
            "Back-office renforcé pour administrer les centres, les promos et les contenus avec plus d'autonomie.",
        ],
    },
];

const UxGalleryItems: GalleryImage[] = [
    {
        src: GalleryUxHomeThumb,
        big: GalleryUxHome,
        alt: "Page d'accueil Doc'Biker",
        caption: "Home plus directe",
    },
    {
        src: GalleryUxHomeMenuThumb,
        big: GalleryUxHomeMenu,
        alt: "Menu intuitif",
        caption: "Menu intuitif",
    },
    {
        src: GalleryUxForfaitsThumb,
        big: GalleryUxForfaits,
        alt: "Forfaits Doc'Biker",
        caption: "Un accès simplifié aux forfaits",
    },


    {
        src: GalleryUxForfaitDetailThumb,
        big: GalleryUxForfaitDetail,
        alt: "Forfait Doc'Biker",
        caption: "Détail du forfait en 1 click",
    },

    {
        src: GalleryUxPneuSearchThumb,
        big: GalleryUxPneuSearch,
        alt: "Recherche de pneus Doc'Biker",
        caption: "Recherche rapide de pneus",
    },

    {
        src: GalleryUxPneuSearchResultsThumb,
        big: GalleryUxPneuSearchResults,
        alt: "Une page résultat lisible et rapide",
        caption: "Des résultats simplifiés",
    },

    {
        src: GalleryUxPneuSearcDetailThumb,
        big: GalleryUxPneuSearcDetail,
        alt: "Une page détail lisible et rapide",
        caption: "Une conversion en 3 clicks",
    },

    {
        src: GalleryUxAdmin,
        big: GalleryUxAdminThumb,
        alt: "Administration",
        caption: "Un accès à l'admin, même depuis un smartphone",
    },
    {
        src: GalleryUxAdminPneus,
        big: GalleryUxAdminPneusThumb,
        alt: "Administration",
        caption: "Une vue rapide de l'ensemble des pneus",
    },
    {
        src: GalleryUxAdminPneuDetail,
        big: GalleryUxAdminPneuDetailThumb,
        alt: "Administration",
        caption: "Modification en live de chaque pneu",
    },

];
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
/*
const franchiseGalleryItems: GalleryImage[] = [
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
    {
        src: adminVisual, big: mobileSearchVisual,
        alt: "Back-office Joomla Doc'Biker",
        caption: "Administration",
    },
    {
        src: reseauScreenVisual01Thumb, big: reseauScreenVisual01,
        alt: "Configuration du back-office Doc'Biker",
        caption: "écran headquarter",
    },
];
*/
const franchiseGrowthGalleryItems: GalleryImage[] = [
    {
        src: franchiseVisual01Thumb,
        big: franchiseVisual01,
        alt: "Page franchise Doc'Biker",
        caption: "Recrutement franchise",
    },
    {
        src: franchiseVisual02Thumb,
        big: franchiseVisual02,
        alt: "Back-office Doc'Biker",
        caption: "Admin centre franchisé",
    },
    {
        src: franchiseVisual03Thumb,
        big: franchiseVisual03,
        alt: "Promotion franchise Doc'Biker",
        caption: "Admin Promotion franchise",
    },
];

const strengths = [
    "Transformer des wireframes et des maquettes Photoshop en interfaces fiables, responsives et administrables.",
    "Assurer la continuité technique d'un site sur plusieurs cycles, sans casser l'existant utile.",
    "Faire converger direction artistique, SEO, conversion, back-office et contraintes d'exploitation terrain.",
    "Faire preuve d'adaptabilité et mettre en place une solution efficace et innovante (réseau d'écrans).",
];

const skills = [
    "Réalisation web à partir de maquettes Photoshop",
    "Intégration responsive HTML / CSS",
    "Architecture d'information et hiérarchisation d'offre",
    "SEO local et logique d'acquisition",
    "Theming Joomla sur mesure",
    "Qualité front-end et compatibilité navigateurs",
    "Parcours centres, forfaits et devis",
    "Back-office et outils d'administration",
    "Communication web-to-store",
];

type CaseStudyDocBikerProps = {
    project?: Project;
};

const fallbackProject = (projectsData as Project[]).find(
    (entry) => entry.client.trim() === "DOC-BIKER",
);

export default function CaseStudyDocBiker({
    project,
}: CaseStudyDocBikerProps): ReactElement {
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
                    Le projet Doc&apos;Biker est introuvable dans les données.
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
                            <p className={eyebrowClassName}>Doc&apos;Biker</p>
                            <h1
                                className="text-[clamp(3.3rem,11vw,7rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Piloter un site <br /> dans la durée.
                            </h1>
                            <p className="max-w-xl text-[clamp(1.15rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700">
                                Entre 2006 et 2018, j&apos;ai piloté l&apos;évolution du site
                                Doc&apos;Biker comme un outil business : acquisition locale,
                                clarification de l&apos;offre, conception d'applicatifs en ligne, animation
                                commerciale et déploiement digital du réseau de centres.
                            </p>
                            <div className="h-px w-24 bg-black/10" />
                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                                {[
                                    "Gestion long terme",
                                    "SEO local",
                                    "UX / UI",
                                    "Site sur mesure",
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
                            alt="Aperçu de la refonte finale du site Doc'Biker"
                            onClick={() =>
                                openLightbox(
                                    heroVisual,
                                    "Aperçu de la refonte finale du site Doc'Biker",
                                )
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
                        title="Des maquettes validées, un site à rendre réel et durable."
                        body="Je travaillais avec un directeur artistique qui fournissait les wireframes et les maquettes Photoshop. Mon rôle consistait à transformer ces intentions en un site concret, fiable, responsive, administrable et utile pour le réseau."
                    />

                    <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Contexte</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Le site suit la maturité de l'enseigne.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Le point de départ date de 2005, quand j&apos;ai proposé une duplication du site Flash en HTML brut, uniquement destinée aux moteurs de recherche.
                                C&apos;était un premier pas vers une logique plus orientée contenu, performance d&apos;indexation et acquisition locale, qui s&apos;est confirmée dans les années suivantes.
                                Entre 2006 et 2018, les priorités changent. D&apos;abord,
                                sortir d&apos;une logique trop visuelle pour retrouver une base
                                indexable.
                                Ensuite, intégrer les nouvelles directions graphiques, structurer l&apos;offre et rendre le réseau
                                plus visible.
                                Enfin, faire du site un outil de service, de
                                conversion et d&apos;exploitation destiné aux franchisés pour leur clientèle.
                            </p>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                C&apos;est ce temps long qui donne de la valeur au projet :
                                faire évoluer un même produit digital sans rupture, en gardant le cap
                                sur l&apos;utile, la qualité de réalisation et la capacité des équipes à
                                le faire vivre.
                            </p>
                        </motion.article>

                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Mon rôle</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Réaliser, mettre en place, fiabiliser.
                            </h3>
                            <ul className="mt-5 grid gap-3 p-0">
                                <ArrowListItem>
                                    Traduction technique des wireframes et maquettes Photoshop
                                    fournis par le directeur artistique.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Intégration des interfaces, construction des gabarits et
                                    adaptation responsive des parcours clés.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Développement d&apos;un thème Joomla sur mesure et d&apos;un
                                    back-office administrable dans la durée.
                                </ArrowListItem>
                                <ArrowListItem>
                                    Suivi de la qualité technique, du SEO, des contenus et de la
                                    cohérence entre site, promotions et communication des centres.
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
                        eyebrow="Évolutions"
                        title="Trois étapes, trois niveaux de réalisation."
                        body="Chaque refonte répond à un moment précis de la vie de l'enseigne : rendre le site indexable, industrialiser les maquettes, puis livrer un outil responsive et exploitable au quotidien."
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
                        eyebrow="SEO, UX, UI"
                        title="La valeur du projet vient autant de l'exécution que des écrans."
                        body="Les maquettes donnaient la direction visuelle. Mon travail consistait à les rendre utilisables, rapides, cohérentes, bien structurées pour le SEO et simples à administrer."
                    />

                    <div className="grid gap-5">
                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 lg:grid lg:grid-cols-[0.92fr_1.08fr]`}
                        >
                            <button
                                type="button"
                                className="block w-full cursor-zoom-in"
                                onClick={() =>
                                    openLightbox(
                                        seoVisual,
                                        "Résultats Google sur la requête pneu moto",
                                    )
                                }
                            >
                                <img
                                    src={seoVisual}
                                    alt="Résultats Google sur la requête pneu moto"
                                    className="block h-full w-full object-cover"
                                />
                            </button>
                            <div className="grid gap-4 p-6 md:p-7">
                                <p className={eyebrowClassName}>
                                    <ArrowRedo className="mr-2 inline h-4 w-4" />
                                    SEO local
                                </p>
                                <h3
                                    className="text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                    style={{ fontFamily: "var(--font-hero)" }}
                                >
                                    Ancrer Doc&apos;Biker sur les requetes locales utiles.
                                </h3>
                                <p className="text-base leading-8 text-neutral-600">
                                    Le point de départ est clair : sortir d&apos;un site peu
                                    exploitable par les moteurs et construire des pages utiles,
                                    lisibles, techniquement propres et alignées sur des intentions locales comme les
                                    pneus moto à Paris.
                                </p>
                                <ul className="grid gap-3 p-0">
                                    <ArrowListItem>
                                        Passage vers une structure HTML plus propre pour Google.
                                    </ArrowListItem>
                                    <ArrowListItem>
                                        Mise en place de gabarits utiles pour l&apos;offre, les centres et les contenus longue traîne.
                                    </ArrowListItem>
                                    <ArrowListItem>
                                        Suivi éditorial et ajustements SEO menés dans la durée.
                                    </ArrowListItem>
                                </ul>
                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>
                                <ArrowRedo className="mr-2 inline h-4 w-4" />
                                UX, responsive et mobile
                            </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Des parcours plus rapides, plus lisibles et plus fluides.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Le site s&apos;organise autour des actions les plus concrètes :
                                trouver le bon pneu, comprendre un forfait, contacter un centre
                                ou demander un devis. À partir des wireframes et des maquettes,
                                j&apos;ai simplifié les enchaînements, hiérarchisé les contenus et
                                intégré des gabarits capables de rester lisibles du desktop au
                                smartphone.
                            </p>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                La réalisation responsive a aussi été pensée côté performance :
                                interfaces moins lourdes, chargement plus rapide, navigation plus
                                directe et interactions plus souples sur mobile. L&apos;objectif était
                                de donner une sensation d&apos;interface fluide, sans rupture entre la
                                recherche, les résultats et les pages de détail.
                            </p>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                Le point fort de l'enseigne est surtout son stock de pneus disponible :
                                le moteur de recherche exploite 3 500 références de pneumatiques des principaux constructeurs, assurant un résultat pertinent pour tout type de 2 roues.
                            </p>
                            <div className="mt-6">
                                <ImageGallery
                                    items={UxGalleryItems}
                                    onImageClick={openLightbox}
                                />
                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>

            <section className={fullWidthSection} id="screen05">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Exploitation"
                        title="Le site ne s'arrête pas à l'interface publique."
                        body="Le projet touche aussi à l'animation commerciale, à l'administration quotidienne, à la qualité des contenus et à la cohérence entre web et centres."
                    />

                    <div className="grid gap-5 lg:grid-cols-2">
                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-0 sm:p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>
                                <ArrowRedo className="mr-2 inline h-4 w-4" />
                                Réseau d&apos;écrans
                            </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Un même contenu promo du site jusqu&apos;aux points de vente.
                            </h3>
                            <p className="mt-4 text-base leading-8 text-neutral-600">
                                J&apos;ai mis en place un réseau d&apos;écrans synchronisé dans les
                                centres. Les contenus préparés pour le site pouvaient ainsi être
                                rediffusés sur les points de vente, avec moins de ressaisie et
                                plus de réactivité commerciale.
                            </p>
                            <button
                                type="button"
                                className="mt-6 block w-full cursor-zoom-in overflow-hidden rounded-[24px] border border-black/10"
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
                            <div className="mt-6 grid gap-4 rounded-[24px] border border-black/8 bg-white/72 p-5 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">

                                <div className="grid gap-4 rounded-[28px] border border-black/8 bg-white/78 p-6 shadow-[0_14px_34px_rgba(18,22,29,0.06)] backdrop-blur-md md:p-7">
                                    <p className="text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[0.99] tracking-[-0.10em] text-neutral-600  p-y-0 m-y-0 ">
                                        59<span className="text-base tracking-[-0.01em] font-normal text-neutral-500"> %</span></p>
                                    <p className="text-base p-y-0 m-y-0 leading-7text-neutral-600">de centres Franchisés</p>
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
                                    items={franchiseGrowthGalleryItems}
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
                        eyebrow="Points forts"
                        title="Ce que ce projet met en valeur dans ma pratique."
                        body="Surtout une capacité à prendre le relais après la conception graphique : produire proprement, intégrer durablement, fiabiliser et faire avancer un produit digital au rythme du terrain."
                    />

                    <div className="grid gap-5 lg:grid-cols-[0.96fr_1.04fr]">
                        <motion.article {...reveal} className={surfaceClassName}>
                            <p className={eyebrowClassName}>Ce projet dit de moi</p>
                            <div className="mt-4 grid gap-5">
                                {strengths.map((strength) => (
                                    <div key={strength} className="border-b border-black/8 pb-5 last:border-b-0 last:pb-0">
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

            <section className={fullWidthSection} id="screen07">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Fiche projet"
                        title={resolvedProject.title}
                        body="La fiche ci-dessous reprend les données portfolio. Le récit ci-dessus documente, lui, l'ensemble de la mission entre 2006 et 2018."
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
