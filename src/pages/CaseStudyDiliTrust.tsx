import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { type ComponentType, type MouseEvent, type PointerEvent, type ReactElement, type ReactNode, useEffect, useRef, useState } from "react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const MTAccordion = Accordion as unknown as ComponentType<{
    open: boolean;
    icon?: ReactNode;
    className?: string;
    children: ReactNode;
}>;
const MTAccordionHeader = AccordionHeader as unknown as ComponentType<{
    onClick?: () => void;
    className?: string;
    children: ReactNode;
}>;
const MTAccordionBody = AccordionBody as unknown as ComponentType<{
    className?: string;
    children: ReactNode;
}>;
import { GoChevronDown } from "react-icons/go";
const ChevronDownIcon = GoChevronDown as unknown as ComponentType<{ className?: string }>;
import { Link } from "react-router-dom";

import { CiCircleChevDown } from "react-icons/ci";
const CircleChevDown = CiCircleChevDown as unknown as ComponentType<{ className?: string }>;

import { BsArrowRightShort } from "react-icons/bs";
const ArrowRightShort = BsArrowRightShort as unknown as ComponentType<{ className?: string }>;

import { IoArrowRedo } from "react-icons/io5";
const ArrowRedo = IoArrowRedo as unknown as ComponentType<{ className?: string }>;

// Visuels
import grainTexture from "../assets/images/textures/grain.png";

//Comparaison HOME
import homeBeforeImage from "../assets/images/projects/rea_web_dilitrust/home_before.png";
import homeBeforeImageTablet from "../assets/images/projects/rea_web_dilitrust/home_before_tablette.png";
import homeBeforeImageLaptop from "../assets/images/projects/rea_web_dilitrust/home_before_laptop.png";
import homeBeforeImageDesktop from "../assets/images/projects/rea_web_dilitrust/home_before_desktop.png";
import homeAfterImage from "../assets/images/projects/rea_web_dilitrust/home_after.png";
import homeAfterImageTablet from "../assets/images/projects/rea_web_dilitrust/home_after_tablette.png";
import homeAfterImageLaptop from "../assets/images/projects/rea_web_dilitrust/home_after_laptop.png";
import homeAfterImageDesktop from "../assets/images/projects/rea_web_dilitrust/home_after_desktop.png";



import heroVisual from "../assets/images/projects/rea_web_dilitrust/new_dilitrust_trsp.png";



import productBeforeImage from "../assets/images/projects/rea_web_dilitrust/product_before.png";
import productBeforeImageTablet from "../assets/images/projects/rea_web_dilitrust/product_before_tablette.png";
import productBeforeImageLaptop from "../assets/images/projects/rea_web_dilitrust/product_before_laptop.png";
import productBeforeImageDesktop from "../assets/images/projects/rea_web_dilitrust/product_before_desktop.png";

import productAfterImage from "../assets/images/projects/rea_web_dilitrust/product_after.png";
import productAfterImageTablet from "../assets/images/projects/rea_web_dilitrust/product_after_tablette.png";
import productAfterImageLaptop from "../assets/images/projects/rea_web_dilitrust/product_after_laptop.png";
import productAfterImageDesktop from "../assets/images/projects/rea_web_dilitrust/product_after_desktop.png";




import ApplicationCharte from "../assets/images/projects/rea_web_dilitrust/new_charte_application.png";

import new3Iphones from "../assets/images/projects/rea_web_dilitrust/new_3_iphones.png";
import socleTechnique from "../assets/images/projects/rea_web_dilitrust/socle_technique.png";
import seaProcess from "../assets/images/projects/rea_web_dilitrust/sea_process.png";
import seoPerform from "../assets/images/projects/rea_web_dilitrust/seo_perform.png";

const surfaceClassName =
    "rounded-[12px] border border-black/8 bg-white/82 shadow-[0_20px_50px_rgba(18,22,29,0.08)] backdrop-blur-sm 2xl:p-5 xl:p-5 p-7 md:p-8";
/*
const surfaceClassName =
    "rounded-[12px] border border-black/8 bg-white/82 shadow-[0_20px_50px_rgba(18,22,29,0.08)] backdrop-blur-sm p-7 md:p-8";

sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }


    */
const reveal = {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, amount: 0.25 },
};

const heroFirstReveal = {
    initial: { opacity: 0, filter: "blur(10px) grayscale(100%)" },
    whileInView: { opacity: 1, filter: "blur(0px) grayscale(0%)" },
    transition: { duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.3 },
};

const heroSecondReveal = {
    initial: { opacity: 0, filter: "blur(10px) grayscale(100%)" },
    whileInView: { opacity: 1, filter: "blur(0px) grayscale(0%)" },
    transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, amount: 0.3 },
};


const shellClassName = "mx-auto max-w-[1200px] pt-10 pb-10 px-6 md:px-8";
const eyebrowClassName =
    "text-[0.79rem]  uppercase tracking-[0.32em] text-neutral-500";

const sectionTitleClassName =
    "text-4xl leading-[0.95] tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl";
const fullLine =
    "h-px  w-full p-0 m-0 bg-black/10";

// Accordeon Syles
const AccordeonClass =
    "rounded-[12px] mb-0 mt-0 p-4 bg-white/82 p-6 md:p-7";
const AccordeonHeaderClass =
    "border-transparent p-0 m-0 mt-3";
const StepNumClass =
    "border-red-100 text-left text-[0.72rem] font-light uppercase tracking-[0.28em] text-neutral-400 place-items-start m-0 p-0";
const AccordeonHeaderTitleClass =
    "mt-4 tracking-[-0.03em] text-[1.5rem]  m-0 p-0";
const AccordeonBodyClass =
    "m-0  font-light text-neutral-600 text-base leading-8";
const AccordeonAnswerClass =
    "m-0 text-base leading-8";

const fullScreen =
    "w-full mx-auto z-10 h-[calc(100vh-72px)] grid place-items-center py-8 relative overflow-hidden";
const fullWidthSection =
    "w-full mx-auto z-10 min-h-[calc(100vh-72px)]  py-8 relative";

const nextScreenLinkClass =
    "bg-transparent absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2";
const InsertIcon =
    "inline object-cover";
/*
const clamp = (value: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, value));
*/
const useCountUp = (end: number, duration: number = 2.1): number => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let frame = 0;
        const start = performance.now();

        const animate = (time: number) => {
            const progress = Math.min((time - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(end * eased));

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [duration, end]);

    return value;
};
type MetricOld = {
    value: string;
    label: string;
    detail: string;
};
type BeforeAfterProps = {
    beforeMobile?: string;
    afterMobile?: string;
    beforeTablet?: string;
    afterTablet?: string;
    beforeLaptop?: string;
    afterLaptop?: string;
    beforeDesktop?: string;
    afterDesktop?: string;
    // for backward compatibility
    before?: string;
    after?: string;
};

const BeforeAfter = ({
    beforeMobile,
    afterMobile,
    beforeTablet,
    afterTablet,
    beforeLaptop,
    afterLaptop,
    beforeDesktop,
    afterDesktop,
    before,
    after,
}: BeforeAfterProps) => {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isDraggingRef = useRef(false);

    const updatePosition = (clientX: number) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect || rect.width === 0) {
            return;
        }

        const percent = ((clientX - rect.left) / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percent)));
    };

    const stopDragging = (target: HTMLDivElement, pointerId?: number) => {
        if (pointerId !== undefined && target.hasPointerCapture(pointerId)) {
            target.releasePointerCapture(pointerId);
        }

        isDraggingRef.current = false;
    };

    const startDragging = (event: PointerEvent<HTMLDivElement>) => {
        isDraggingRef.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        updatePosition(event.clientX);
    };

    const drag = (event: PointerEvent<HTMLDivElement>) => {
        if (!isDraggingRef.current) {
            return;
        }

        updatePosition(event.clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative min-h-[320px] overflow-hidden rounded-[12px] border border-black/10 bg-neutral-950 shadow-[0_28px_70px_rgba(18,22,29,0.18)] outline-none [touch-action:none] select-none md:min-h-[520px]"
            role="slider"
            tabIndex={0}
            aria-label="Comparaison avant apres"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            onPointerDown={startDragging}
            onPointerMove={drag}
            onPointerUp={(event) => stopDragging(event.currentTarget, event.pointerId)}
            onPointerCancel={(event) =>
                stopDragging(event.currentTarget, event.pointerId)
            }
            onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                    setPosition((current) => Math.max(0, current - 5));
                }

                if (event.key === "ArrowRight") {
                    setPosition((current) => Math.min(100, current + 5));
                }
            }}
        >
            {/* After images - full visible */}
            {(afterMobile || after) && (
                <img
                    src={afterMobile || after}
                    alt="Version apres mobile"
                    className="absolute inset-0 h-full w-full object-cover block md:hidden"
                    draggable={false}
                />
            )}
            {afterTablet && (
                <img
                    src={afterTablet}
                    alt="Version apres tablet"
                    className="absolute inset-0 h-full w-full object-cover hidden md:block lg:hidden"
                    draggable={false}
                />
            )}
            {afterLaptop && (
                <img
                    src={afterLaptop}
                    alt="Version apres laptop"
                    className="absolute inset-0 h-full w-full object-cover hidden lg:block xl:hidden"
                    draggable={false}
                />
            )}
            {afterDesktop && (
                <img
                    src={afterDesktop}
                    alt="Version apres desktop"
                    className="absolute inset-0 h-full w-full object-cover hidden xl:block"
                    draggable={false}
                />
            )}

            {/* Before images - clipped */}
            {(beforeMobile || before) && (
                <img
                    src={beforeMobile || before}
                    alt="Version avant mobile"
                    className="absolute inset-0 h-full w-full object-cover block md:hidden"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    draggable={false}
                />
            )}
            {beforeTablet && (
                <img
                    src={beforeTablet}
                    alt="Version avant tablet"
                    className="absolute inset-0 h-full w-full object-cover hidden md:block lg:hidden"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    draggable={false}
                />
            )}
            {beforeLaptop && (
                <img
                    src={beforeLaptop}
                    alt="Version avant laptop"
                    className="absolute inset-0 h-full w-full object-cover hidden lg:block xl:hidden"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    draggable={false}
                />
            )}
            {beforeDesktop && (
                <img
                    src={beforeDesktop}
                    alt="Version avant desktop"
                    className="absolute inset-0 h-full w-full object-cover hidden xl:block"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    draggable={false}
                />
            )}

            <div
                className="pointer-events-none absolute inset-y-0 z-10 w-[2px] -translate-x-1/2 bg-white/95 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_40px_rgba(255,255,255,0.35)]"
                style={{ left: `${position}%` }}
            />

            <div
                className="pointer-events-none absolute top-1/2 z-20 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] md:h-[60px] md:w-[60px]"
                style={{ left: `${position}%` }}
            >
                <span className="h-4 w-[18px] border-x-2 border-neutral-700/55 md:h-[18px]" />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-black/55 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md md:left-5 md:top-5">
                Avant
            </span>
            <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-black/55 px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md md:right-5 md:top-5">
                Apres
            </span>
        </div>
    );
};

type StatProps = {
    value: number;
    label: string;
    unit?: string;
    variant?: string;
};

const Stat = ({ value, label, unit, variant }: StatProps) => {
    const animatedValue = useCountUp(value);

    return (
        <div className="grid gap-4 rounded-[28px] border border-black/8 bg-white/78 p-6 shadow-[0_14px_34px_rgba(18,22,29,0.06)] backdrop-blur-md md:p-7">
            <p className="text-[clamp(3rem,6vw,4.8rem)] font-semibold leading-[0.99] tracking-[-0.05em] text-neutral-600">
                <span className="text-[clamp(3rem,6vw,4.8rem)] tracking-[-0.01em] font-normal text-neutral-500">{variant}</span>
                {animatedValue}
                <span className="text-base tracking-[-0.01em] font-normal text-neutral-500"> {unit}</span>
            </p>
            <p className="text-base leading-7 text-neutral-600">{label}</p>
            <div className="h-1.5 overflow-hidden rounded-full bg-black/12">
                <motion.div
                    className="h-full origin-left rounded-full bg-gradient-to-r from-neutral-950 via-neutral-800 to-slate-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: value / 100 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.7 }}
                />
            </div>
        </div>
    );
};

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    body?: string;
    className?: string;
};
function SectionHeading({
    eyebrow,
    title = "",
    body,
    className = "",
}: SectionHeadingProps) {
    return (
        <motion.div {...reveal} className={`grid gap-4 ${className}`.trim()}>
            {eyebrow ? (
                <p className={eyebrowClassName}>{eyebrow}</p>
            ) : null}
            {title ? (
                <h2
                    className={sectionTitleClassName}
                    style={{ fontFamily: "var(--font-hero)" }}
                >
                    {title}
                </h2>
            ) : null}
            {body ? (
                <p className="max-w-1xl text-base leading-8 text-neutral-800 md:text-lg">
                    {body}
                </p>
            ) : null}
        </motion.div>
    );
}

const metricsOlds: MetricOld[] = [
    {
        value: "1 150",
        label: "pages maîtresses analysées",
        detail:
            "",
    },
    {
        value: "5",
        label: "langues synchronisées",
        detail:
            "",
    },
    {
        value: "1 750",
        label: "articles de blog recensés",
        detail:
            "",
    },
    {
        value: "20%",
        label: "de contenus à forte valeur mis en avant",
        detail:
            "",
    },
];
export default function CaseStudyDiliTrust(): ReactElement {
    const stats = [
        { label: "Performances SEO", value: 37, unit: "points", variant: "+" },
        { label: "Rapidité de chargement", value: 700, unit: "%", variant: "+" },
        { label: "Du projet à la livraison", value: 4, unit: " mois", variant: " " },
    ];

    const [myAccor01Open, setmyAccor01Open] = useState(false);
    const [myAccor01Open2, setmyAccor01Open2] = useState(false);
    const [myAccor01Open3, setmyAccor01Open3] = useState(false);
    const [myAccor01Open4, setmyAccor01Open4] = useState(false);
    const { scrollYProgress } = useScroll();
    const grainOpacity = useSpring(
        useTransform(scrollYProgress, [0, 0.45], [0, 0.07]),
        {
            stiffness: 120,
            damping: 28,
            mass: 0.24,
        },
    );

    const handleScrollToScreen = (
        event: MouseEvent<HTMLAnchorElement>,
        screenId: string,
    ) => {
        event.preventDefault();
        document.getElementById(screenId)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <main
            className="relative isolate text-neutral-950"
            style={{
                background: "var(--bg)",
            }}
        >
            {/* -----BG texture-------- */}
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
            {/* SCREEN01 -----Header-------- */}
            <section className={fullScreen} id="screen01">
                <div
                    className={`${shellClassName} grid items-center gap-12 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:gap-16`}
                >
                    <motion.div  {...heroFirstReveal} id="heroTitre">
                        <div className="relative z-10 grid content-center gap-6">
                            <p className={eyebrowClassName}>DiliTrust</p>
                            <div className="grid gap-5">
                                <h1
                                    className="text-[clamp(3.5rem,11vw,7rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950"
                                    style={{ fontFamily: "var(--font-hero)" }}
                                >
                                    Refonte de site
                                </h1>

                                <p

                                    className="max-w-xl text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700"
                                >
                                    Refondre sans perdre la performance: concilier design,
                                    lisibilité et SEO sur un site SaaS dense, du desktop au
                                    mobile.
                                </p>
                            </div>

                            <div className="h-px w-24 bg-black/10" />
                            <div
                                className="flex flex-wrap gap-x-6 gap-y-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500"
                            >
                                {["UX strategy", "Product clarity", "Mobile first"].map((pill) => (
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
                    <figure
                        className="relative mx-auto w-full max-w-[760px]"
                    >
                        <motion.img id="heroImg"
                            {...heroSecondReveal}
                            src={heroVisual}
                            alt="Apercu retravaille du site DiliTrust"
                            className="block w-full"
                        />
                    </figure>
                </div>
                <Link
                    to="#screen02"
                    className={`${nextScreenLinkClass} inset-s-0 top-[calc(100vh-95px)]`}
                    onClick={(event) => handleScrollToScreen(event, "screen02")}
                >
                    <div><CircleChevDown className={`${InsertIcon} h-9 w-9 `} /> Scroller</div>
                </Link>
            </section>

            {/* SCREEN02 --- Contexte / Réponse--------- */}

            <section className={fullScreen} id="screen02">
                <motion.div {...reveal}>
                    <div className={shellClassName}>
                        <p className={eyebrowClassName}>problématique</p>
                        <h2
                            className="mt-4 text-3xl leading-tight tracking-[-0.04em] text-neutral-950 md:text-[3rem]"
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Le contexte
                        </h2>
                        <p className="mt-4 text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700">
                            Avec l'instauration d'une nouvelle identité graphique et d'un rebranding produit, le site
                            devait s'aligner sans perdre son capital SEO ni ses contenus à fort trafic.
                        </p>
                    </div>
                </motion.div>
                <motion.div {...reveal}>
                    <div className={shellClassName}>
                        <p className={eyebrowClassName}>Réponse</p>
                        <h2
                            className="mt-4 text-3xl leading-tight tracking-[-0.04em] text-neutral-950 md:text-[3rem]"
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Le projet
                        </h2>
                        <p className="mt-4 text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700">
                            Proposer une interface plus claire et contrastée, répondant aux objectifs de conversion et d'expérience utilisateur, puis l'intégrer dans un template
                            WordPress sur mesure. Pour répondre aux enjeux d'alignement avec la nouvelle identité visuelle, un délai de 5 mois est proposé.
                        </p>
                    </div>
                </motion.div>
                <Link
                    to="#screen02"
                    className={`${nextScreenLinkClass} inset-s-0 top-[calc(100vh-95px)]`}
                    onClick={(event) => handleScrollToScreen(event, "screen03")}
                >
                    <div><CircleChevDown className={`${InsertIcon} h-9 w-9 `} /> Scroller</div>
                </Link>


            </section>
            {/* ----- Accordéon 01 -------- */}
            <section className={fullWidthSection} id="screen03">
                <div className={shellClassName}>
                    <motion.div
                        {...reveal}
                    ><SectionHeading
                            eyebrow="Réalisation"
                            title="Les grandes étapes du projet"
                            body=""
                            className="m-0 p-0"
                        />
                    </motion.div>
                </div>
                <div className={`${shellClassName} grid gap-4 pb-0 md:pb-0`}>

                    <div className="m-0 p-0 grid gap-6 md:grid-cols-1">
                        <motion.div
                            {...reveal}
                        >
                            <MTAccordion
                                open={myAccor01Open}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${myAccor01Open ? "rotate-180" : ""}`}
                                    />
                                } className={AccordeonClass}
                            >
                                <MTAccordionHeader
                                    onClick={() => setmyAccor01Open((current) => !current)}
                                    className={AccordeonHeaderClass}
                                >
                                    <div
                                    >
                                        <div className={StepNumClass}>
                                            &Eacute;tape 1
                                        </div>

                                        <span className={AccordeonHeaderTitleClass} style={{ fontFamily: "var(--font-hero)" }}>
                                            Audit de l'existant
                                        </span>
                                        <p className={AccordeonBodyClass} >
                                            &Eacute;tat des lieux complet, afin d'identifier les forces a conserver et les points de friction a éliminer.
                                        </p>

                                    </div>
                                </MTAccordionHeader>
                                <MTAccordionBody className={AccordeonAnswerClass}>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {metricsOlds.map((metricOld) => (
                                            <motion.article
                                                key={metricOld.label}
                                                {...reveal}
                                                className="rounded-[30px] border border-black/8 bg-white/82 shadow-[0_10px_10px_rgba(18,22,29,0.08)] backdrop-blur-sm p-6 md:p-7"
                                            >
                                                <p className="text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[0.92] tracking-[-0.1em] text-neutral-600" style={{ opacity: 0.55 }}>
                                                    {metricOld.value}
                                                </p>
                                                <h3 className="mt-3 text-lg font-thin text-neutral-600">
                                                    {metricOld.label}
                                                </h3>
                                                <p className="mt-3 text-base text-neutral-600">
                                                    {metricOld.detail}
                                                </p>
                                            </motion.article>
                                        ))}
                                        Résultat attendu : Définir et préparer les contenus à intégrer.
                                    </div>
                                </MTAccordionBody>
                            </MTAccordion>
                        </motion.div>
                        <motion.div {...reveal}>
                            <MTAccordion
                                open={myAccor01Open2}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${myAccor01Open2 ? "rotate-180" : ""}`}
                                    />
                                } className={AccordeonClass}
                            >
                                <MTAccordionHeader
                                    onClick={() => setmyAccor01Open2((current) => !current)}
                                    className={AccordeonHeaderClass}
                                >
                                    <div
                                    >
                                        <div className={StepNumClass}>
                                            &Eacute;tape 2
                                        </div>

                                        <span className={AccordeonHeaderTitleClass} style={{ fontFamily: "var(--font-hero)" }}>
                                            Prototype UX/UI
                                        </span>
                                        <p className={AccordeonBodyClass} >
                                            Faire evoluer un site institutionnel vers un site plus lisible, plus rassurant et plus oriente conversion.
                                        </p>

                                    </div>
                                </MTAccordionHeader>
                                <MTAccordionBody className={AccordeonAnswerClass}>
                                    <ul className="columns-2">
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Définition des personas, rédaction des parcours utilisateurs.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Détermination des points de conversion.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Création d'une bibliothèque de composants UI.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Maquette statique des pages principales.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Prototype fonctionnel.
                                            <ul>
                                                <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Parcours de l'entrée à la conversion pour chaque persona.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    Résultat attendu : Faire valider le prototype pour déclencher la réalisation.
                                </MTAccordionBody>
                            </MTAccordion>
                        </motion.div>

                        <motion.div {...reveal}>
                            <MTAccordion
                                open={myAccor01Open3}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${myAccor01Open3 ? "rotate-180" : ""}`}
                                    />
                                } className={AccordeonClass}
                            >
                                <MTAccordionHeader
                                    onClick={() => setmyAccor01Open3((current) => !current)}
                                    className={AccordeonHeaderClass}
                                >
                                    <div
                                    >
                                        <div className={StepNumClass}>
                                            &Eacute;tape 3
                                        </div>

                                        <span className={AccordeonHeaderTitleClass} style={{ fontFamily: "var(--font-hero)" }}>
                                            Un peu de technique
                                        </span>
                                        <p className={AccordeonBodyClass} >
                                            Coder et redéfinir un process de production pour intégrer le nouveau site sur des bases solides.
                                        </p>

                                    </div>
                                </MTAccordionHeader>
                                <MTAccordionBody className={AccordeonAnswerClass}>

                                    <ul className="columns-2">
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Mise en place d'un processus de développement (dev/preprod/prod).</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Création du thème WordPress custom (sur une base T2).</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Montage des pages maîtresses.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Data cleaning, intégration des anciens contenus.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Développement du back office et des workflows.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Tests utilisateurs et validation fonctionnelle.</li>
                                    </ul>
                                    Résultat attendu : Obtenir une validation pour mise en ligne
                                </MTAccordionBody>
                            </MTAccordion>
                        </motion.div>

                        <motion.div {...reveal}>
                            <MTAccordion
                                open={myAccor01Open4}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${myAccor01Open4 ? "rotate-180" : ""}`}
                                    />
                                } className={AccordeonClass}
                            >
                                <MTAccordionHeader
                                    onClick={() => setmyAccor01Open4((current) => !current)}
                                    className={AccordeonHeaderClass}
                                >
                                    <div
                                    >
                                        <div className={StepNumClass}>
                                            &Eacute;tape 4
                                        </div>

                                        <span className={AccordeonHeaderTitleClass} style={{ fontFamily: "var(--font-hero)" }}>
                                            Mise en service
                                        </span>
                                        <p className={AccordeonBodyClass} >
                                            Assurer une mise en ligne dans les meilleures conditions.
                                        </p>

                                    </div>
                                </MTAccordionHeader>
                                <MTAccordionBody className={AccordeonAnswerClass}>
                                    <ul className="columns-2">
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Intégration des trackers et formulaire.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Optimisation SEO.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Connexion des landing pages.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Déploiement des plugins essentiels.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Contrôle qualité</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Validation préprod.</li>
                                        <li> <ArrowRightShort className={`${InsertIcon} h-6 w-6 `} /> Lancement et monitoring post-lancement.</li>
                                    </ul>
                                    Résultat attendu : Une transition fluide vers la nouvelle version du site.
                                </MTAccordionBody>
                            </MTAccordion>
                        </motion.div>



                    </div>
                </div>
            </section>
            {/* ---Avant/Après HOME--------- */}
            <section className={fullWidthSection} id="screen04">
                <div
                    className={shellClassName}
                >
                    <div className="grid gap-2 md:grid-cols-1">
                        <SectionHeading
                            eyebrow="Avant / après"
                            title="Une Home plus lisible, plus structurée et plus attractive."
                            body="Le travail porte autant sur l'image que sur la compréhension immédiate de l'offre. Le comparatif montre le changement de hiérarchie, de respiration et de ton."
                        />
                        <motion.div {...reveal}>
                            <BeforeAfter
                                beforeMobile={homeBeforeImage}
                                afterMobile={homeAfterImage}
                                beforeTablet={homeBeforeImageTablet}
                                afterTablet={homeAfterImageTablet}
                                beforeLaptop={homeBeforeImageLaptop}
                                afterLaptop={homeAfterImageLaptop}
                                beforeDesktop={homeBeforeImageDesktop}
                                afterDesktop={homeAfterImageDesktop}
                            />
                        </motion.div>
                        <motion.div {...reveal} className="grid gap-2 md:grid-cols-2">
                            <div className={`${surfaceClassName} p-6 md:p-7`}>
                                <p className={eyebrowClassName}>Avant</p>
                                <ul className="text-base p-0 m-0 text-neutral-700">
                                    <li>Lecture peu contrastée.</li>
                                    <li>Perception plus institutionnelle que produit.</li>
                                    <li>Moins de respiration et moins de focalisation.</li>
                                </ul>
                            </div>

                            <div className={`${surfaceClassName} p-6 md:p-7`}>
                                <p className={eyebrowClassName}>Après</p>
                                <ul className="text-base text-neutral-700">
                                    <li>Narration plus directe pour convaincre vite.</li>
                                    <li>Des appels a l'action plus clairs sur tout le parcours.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ---Avant/Après PRODUITS --------- */}
            <section className={fullWidthSection} id="screen05">
                <div
                    className={shellClassName}
                >
                    <div className="grid gap-6 md:grid-cols-1">
                        <SectionHeading
                            eyebrow="Avant / après"
                            title="Une offre plus cohérente et compréhensible."
                            body="Le regroupement des solutions SASS sous forme de suite et l'identification de chaque module par un icone, rendent la lecture plus efficace, ainsi que la prise de décision pour l'utilisateur."
                        />
                        <motion.div {...reveal}>
                            <BeforeAfter
                                beforeMobile={productBeforeImage}
                                afterMobile={productAfterImage}
                                beforeTablet={productBeforeImageTablet}
                                afterTablet={productAfterImageTablet}
                                beforeLaptop={productBeforeImageLaptop}
                                afterLaptop={productAfterImageLaptop}
                                beforeDesktop={productBeforeImageDesktop}
                                afterDesktop={productAfterImageDesktop}


                            />
                        </motion.div>
                        <motion.div {...reveal} className="grid gap-2 md:grid-cols-2">
                            <div className={`${surfaceClassName} p-6 md:p-7`}>
                                <p className={eyebrowClassName}>Avant</p>
                                <ul className="text-base text-neutral-700">
                                    <li>Une lecture très espacée de l'offre.</li>
                                    <li>Un parcours utilisateur peu intuitif.</li>
                                    <li>Identification des modules SASS uniquement liée au nom.</li>
                                </ul>
                            </div>

                            <div className={`${surfaceClassName} p-6 md:p-7`}>
                                <p className={eyebrowClassName}>Après</p>
                                <ul className="text-base text-neutral-700">
                                    <li>Compréhension rapide de la gamme de produits.</li>
                                    <li>Identification directe des modules par un icone.</li>
                                    <li>Une lecture plus compacte.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ----- Blocs Txt/images -------- */}
            <section className={fullWidthSection} id="screen06">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Choix de conception"
                        title="Une refonte guidée par la clarté, la conversion et le mobile."
                        body="Chaque famille d'écrans a ete retravaillée pour raconter une offre dense plus simplement, sans perdre la richesse du produit ni le cadre technique existant."
                    />

                    <div className="grid gap-5 lg:grid-cols-1">
                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}><ArrowRedo className={`${InsertIcon}  `} /> Territoire visuel</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Installer la nouvelle charte sans rigidité.
                            </h3>
                            <p className="mt-4 max-w-1xl text-base leading-8 text-neutral-600">
                                La nouvelle identite ne se limite pas a une couche visuelle :
                                elle reorganise le rythme, les contrastes et la mise en confiance.

                            </p>
                            <div className="mt-6">
                                <motion.img
                                    src={ApplicationCharte}
                                    alt="Application de la charte graphique DiliTrust"
                                    className="block w-full"
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true, amount: 0.2 }}
                                />
                                <figcaption className="px-5 py-4 text-sm leading-7 text-center text-neutral-600 md:px-6 md:text-base">
                                    Application de la charte graphique DiliTrust
                                </figcaption>

                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}><ArrowRedo className={`${InsertIcon}  `} /> Smartphone</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Une navigation pensée pour le mobile, sans sacrifier la version desktop.
                            </h3>
                            <p className="mt-4 max-w-1xl text-base leading-8 text-neutral-600">
                                Les écrans et la navigation sont simplifies pour un usage au
                                pouce, avec un parcours plus direct et plus fluide.
                            </p>

                            <motion.img
                                src={new3Iphones}
                                alt="Exemples d'écrans mobile"
                                className="block w-full"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, amount: 0.2 }}
                            />
                        </motion.article>


                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}><ArrowRedo className={`${InsertIcon}  `} /> Socle technique </p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Un livrable pensé pour le long terme.
                            </h3>
                            <p className="mt-4 max-w-1xl text-base leading-8 text-neutral-600">
                                Les processus de développement et d'intégration ont été repensés pour faciliter les mises à jour, la maintenance et l'évolution du site, l'utilisation du back office est documentée.
                            </p>

                            <motion.img
                                src={socleTechnique}
                                alt="La bible du site DiliTrust"
                                className="block w-full"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, amount: 0.2 }}
                            />
                            <figcaption className="px-5 py-4 text-sm leading-7  text-center  text-neutral-600 md:px-6 md:text-base">
                                La bible du site DiliTrust.
                            </figcaption>
                            <div className={`${fullLine} mt-3 mb-6`}></div>
                            <div className="mt-6">
                                <motion.img
                                    src={seaProcess}
                                    alt="Pages SEA"
                                    className="block w-full"
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true, amount: 0.2 }}
                                />
                                <figcaption className="px-5 py-4 text-sm leading-7 text-center  text-neutral-600 md:px-6 md:text-base">
                                    Process de réalisation des pages SEA repensé.
                                </figcaption>

                            </div>
                            <div className={`${fullLine} mt-3 mb-6`}></div>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Une structure performante.
                            </h3>
                            <p className="mt-4 max-w-1xl text-base leading-8 text-neutral-600">
                                Le développement du thème WordPress propriétaire a été repensé dans un souci de clarté de code et de lisibilité, ce qui a fait grimper la note SEO.
                            </p>
                            <div className="mt-6">
                                <motion.img
                                    src={seoPerform}
                                    alt="Score SEO"
                                    className="block w-full"
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true, amount: 0.2 }}
                                />
                                <figcaption className="px-5 py-4 text-sm leading-7 text-center  text-neutral-600 md:px-6 md:text-base">
                                    Score SEO avant/après.
                                </figcaption>

                            </div>


                        </motion.article>
                    </div>
                </div>
            </section>
            {/* --- Résultats --------- */}
            <section className={fullWidthSection} id="screen07">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Résultats"
                        title="Des gains perceptibles des les premiers parcours."
                        body="Les chiffres ci-dessous montrent l&apos;impact attendu d&apos;une expérience plus claire et les objectifs atteints."
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        {stats.map((stat) => (
                            <Stat key={stat.label} value={stat.value} label={stat.label} unit={stat.unit} variant={stat.variant} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
