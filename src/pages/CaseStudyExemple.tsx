import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { type ComponentType, type PointerEvent, type ReactElement, type ReactNode, useEffect, useRef, useState } from "react";

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
import { GoChevronUp } from "react-icons/go";
const ChevronUpIcon = GoChevronUp as unknown as ComponentType<{ className?: string }>;


/*
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
*/
// Visuels
import grainTexture from "../assets/images/textures/grain.png";
import afterImage from "../assets/images/projects/rea_web_dilitrust/home_compare_new2.png";
import beforeImage from "../assets/images/projects/rea_web_dilitrust/home_compare_old2.png";
import heroVisual from "../assets/images/projects/rea_web_dilitrust/new_dilitrust_trsp.png";
import otherVisual from "../assets/images/projects/rea_web_dilitrust/morphing_after.png";
import ResponsiveSlide01 from "../assets/images/projects/rea_web_dilitrust/seo_compare.png";
import ResponsiveSlide02 from "../assets/images/projects/rea_web_dilitrust/charte.png";
import ResponsiveSlide03 from "../assets/images/projects/rea_web_dilitrust/morphing_before.png";
import ResponsiveSlide04 from "../assets/images/projects/rea_web_dilitrust/morphing_after.png";
import ResponsiveSlide05 from "../assets/images/projects/rea_web_dilitrust/mobile_first.png";
import ResponsiveSlide06 from "../assets/images/projects/rea_web_dilitrust/mobile_first.png";
import charteImage from "../assets/images/projects/rea_web_dilitrust/charte.png";

//import oldInterface from "../assets/images/projects/rea_web_dilitrust/pc_phone_old.png";

//import conferenceAssetsImage from "../assets/images/projects/rea_web_dilitrust/conference_assets.png";
//import landingAdminImage from "../assets/images/projects/rea_web_dilitrust/landing_admin.png";
//import newDilitrustImage from "../assets/images/projects/rea_web_dilitrust/new_dilitrust.png";
//import performanceCompareImage from "../assets/images/projects/rea_web_dilitrust/perf_compares.png";
//import contentMapping from "../assets/images/projects/rea_web_dilitrust/wordpress_map.png";

// import { ThemeProvider } from "@material-tailwind/react";

import morphingAfterImage from "../assets/images/projects/rea_web_dilitrust/morphing_after.png";
import morphingBeforeImage from "../assets/images/projects/rea_web_dilitrust/morphing_before.png";

import phoneMenuImage from "../assets/images/projects/rea_web_dilitrust/home_phone_menu.PNG";
import seoCompareImage from "../assets/images/projects/rea_web_dilitrust/seo_compare.png";
/*
// Icons
import { GoArrowDownRight } from "react-icons/go";
import { FiArrowDownRight } from "react-icons/fi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { SiSitepoint } from "react-icons/si";
import { GrNodes } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { GoPin } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { VscDebugStepInto } from "react-icons/vsc";
*/




/*
sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }

*/

const surfaceClassName =
    "rounded-[12px] border border-black/8 bg-white/82 shadow-[0_20px_50px_rgba(18,22,29,0.08)] backdrop-blur-sm p-7 md:p-8";

const reveal = {
    initial: { opacity: 0, y: 48 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, amount: 0.25 },
};

const shellClassName = "mx-auto w-full max-w-[1200px] pt-10 pb-10 px-6 md:px-8";
const eyebrowClassName =
    "text-[0.79rem]  uppercase tracking-[0.32em] text-neutral-500";

const sectionTitleClassName =
    "text-4xl leading-[0.95] tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl";

const simpleSection =
    "relative z-20 pb-0 md:pb-0";

const fullWidthSection =
    "relative z-10 pb-0 md:pb-0 p-px";
const fullLine =
    "h-px  w-full p-0 m-0 bg-black/10";
const neutralCells =
    "flex gap-4 rounded-[12px] border border-black/8 bg-black/[0.02]  bg-white/82 shadow-[0_20px_50px_rgba(18,22,29,0.08)] backdrop-blur-sm px-4 py-4";

/* 
class="max-w-3xl text-base leading-8 text-neutral-600 md:text-lg"
    "flex gap-4 rounded-[12px] border border-black/8 bg-black/[0.02] px-4 py-4";


*/
type ResponsiveSlide = {
    image: string;
    title: string;
    meta: string;
    description: string;
    frame: "browser" | "phone" | "document";
};
type Step = {
    id: string;
    title: string;
    description: string;
    visuel: string;
};
const responsiveSlides: ResponsiveSlide[] = [
    {
        image: ResponsiveSlide01,
        title: "Performance SEO",
        meta: "Une nette amélioration des performances techniques",
        description:
            "Le site a gagné 37% de performance globale, le volume de chargement a été divisé par 7, tout en conservant les fonctionnalités existantes (trackers, analytics, API).",
        frame: "browser",
    },
    {
        image: ResponsiveSlide02,
        title: "Test titre",
        meta: "Home page portrait Â· 357 x 781",
        description:
            "test description",
        frame: "browser",
    },
    {
        image: ResponsiveSlide03,
        title: "Version smartphone",
        meta: "Home page portrait Â· 357 x 781",
        description:
            "Lâ€™ecran final montre une interface pensee pour le pouce, plus directe a parcourir et plus naturelle sur mobile.",
        frame: "phone",
    },

    {
        image: ResponsiveSlide04,
        title: "Approche mobile first",
        meta: "Recomposition des contenus Â· 1245 x 832",
        description:
            "Le scroll fait glisser vers une composition plus resserree, ou les blocs, les appels a lâ€™action et la hierarchie deviennent plus immediats.",
        frame: "browser",
    },

    {
        image: ResponsiveSlide05,
        title: "Version telephone",
        meta: "Home page portrait Â· 357 x 781",
        description:
            "Lâ€™ecran final montre une interface pensee pour le pouce, plus directe a parcourir et plus naturelle sur mobile.",
        frame: "phone",
    },

    {
        image: ResponsiveSlide06,
        title: "Version xxxx",
        meta: "Home page portrait Â· 357 x 781",
        description:
            "Lâ€™ecran final montre une interface pensee pour le pouce, plus directe a parcourir et plus naturelle sur mobile.",
        frame: "phone",
    },

];

const clamp = (value: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, value));

const useCountUp = (end: number, duration: number = 1.6): number => {
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

type BeforeAfterProps = {
    before: string;
    after: string;
};

const BeforeAfter = ({ before, after }: BeforeAfterProps) => {
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
            className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-black/10 bg-neutral-950 shadow-[0_28px_70px_rgba(18,22,29,0.18)] outline-none [touch-action:none] select-none md:min-h-[520px]"
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
            <img
                src={after}
                alt="Version apres"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
            />

            <img
                src={before}
                alt="Version avant"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                draggable={false}
            />

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
};

const Stat = ({ value, label }: StatProps) => {
    const animatedValue = useCountUp(value);

    return (
        <div className="grid gap-4 rounded-[28px] border border-black/8 bg-white/78 p-6 shadow-[0_14px_34px_rgba(18,22,29,0.06)] backdrop-blur-md md:p-7">
            <p className="text-[clamp(3rem,6vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-neutral-950">
                {animatedValue}%
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

type PhoneMockupProps = {
    image: string;
    alt: string;
};

const PhoneMockup = ({ image, alt }: PhoneMockupProps): ReactElement => {
    return (
        <div className="relative mx-auto w-full rounded-[3rem] bg-[linear-gradient(180deg,#1a2232_0%,#111827_55%,#0b1220_100%)] p-[10px] shadow-[0_36px_90px_rgba(15,23,42,0.38)] ring-1 ring-white/8">
            <div className="pointer-events-none absolute inset-y-[72px] left-[6px] w-[3px] rounded-full bg-white/10" />
            <div className="pointer-events-none absolute right-[6px] top-[86px] h-16 w-[3px] rounded-full bg-white/10" />
            <div className="pointer-events-none absolute right-[6px] top-[156px] h-10 w-[3px] rounded-full bg-white/10" />

            <div className="relative overflow-hidden rounded-[2.45rem] bg-[#071732]">
                <div className="absolute left-1/2 top-3 z-20 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/16" />
                <div className="absolute inset-x-0 top-0 z-10 h-14 bg-[linear-gradient(180deg,rgba(7,23,50,0.85),rgba(7,23,50,0))]" />
                <img
                    src={image}
                    alt={alt}
                    className="block w-full rounded-[2.2rem]"
                />
            </div>

            <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-white/10" />
        </div>
    );
};
type BrowserFrameProps = {
    image: string;
    alt: string;
    label: string;
    dark?: boolean;
    fit?: "cover" | "contain";
    imageClassName?: string;
    contentClassName?: string;
};

function BrowserFrame({
    image,
    alt,
    label,
    dark = false,
    fit = "cover",
    imageClassName = "",
    contentClassName = "",
}: BrowserFrameProps) {
    const shellClasses = dark
        ? "border-white/10 bg-[#0b1526] text-white shadow-[0_24px_64px_rgba(15,23,42,0.35)]"
        : "border-black/8 bg-white text-neutral-950 shadow-[0_20px_50px_rgba(18,22,29,0.12)]";
    const barClasses = dark
        ? "border-white/10 bg-white/6"
        : "border-black/6 bg-black/[0.03]";
    const badgeClasses = dark
        ? "border-white/12 bg-white/7 text-white/70"
        : "border-black/8 bg-black/4 text-neutral-600";
    const panelClasses = dark ? "bg-[#081223]" : "bg-[#eef2f7]";

    return (
        <div className={`overflow-hidden rounded-[12px] border ${shellClasses}`}>
            <div
                className={`flex items-center justify-between border-b px-4 py-3 md:px-5 ${barClasses}`}
            >
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-800" />
                    <span className="h-3 w-3 rounded-full bg-yellow-800" />
                    <span className="h-3 w-3 rounded-full bg-green-800" />
                </div>
                <span
                    className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] ${badgeClasses}`}
                >
                    {label}
                </span>
            </div>

            <div className={`${panelClasses} ${contentClassName}`.trim()}>
                <img
                    src={image}
                    alt={alt}
                    className={`block w-full ${fit === "contain" ? "object-contain" : "object-cover"} ${imageClassName}`.trim()}
                />
            </div>
        </div>
    );
}

const ResponsiveShowcase = (): ReactElement => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const progress = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 24,
        mass: 0.28,
    });
    const [progressValue, setProgressValue] = useState(0);
    const [spotlight, setSpotlight] = useState<{
        index: number;
        token: number;
    } | null>(null);

    useEffect(() => {
        const unsubscribe = progress.on("change", (value) => {
            setProgressValue(value);
        });

        return () => unsubscribe();
    }, [progress]);

    useEffect(() => {
        if (!spotlight) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setSpotlight((current) =>
                current?.token === spotlight.token ? null : current,
            );
        }, 950);

        return () => window.clearTimeout(timeoutId);
    }, [spotlight]);

    const slideCount = responsiveSlides.length;
    const maxIndex = slideCount - 1;
    const timelineValue = progressValue * maxIndex;
    const activeIndex = clamp(Math.round(timelineValue), 0, maxIndex);
    const activeSlide = responsiveSlides[activeIndex];
    const progressLine = useTransform(progress, [0, 1], [0, 1]);

    const scrollToSlide = (index: number) => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        setSpotlight({ index, token: Date.now() });

        const targetProgress = maxIndex === 0 ? 0 : index / maxIndex;
        const containerTop = container.getBoundingClientRect().top + window.scrollY;
        const scrollableDistance = Math.max(
            container.offsetHeight - window.innerHeight,
            0,
        );

        window.scrollTo({
            top: containerTop + targetProgress * scrollableDistance,
            behavior: "smooth",
        });
    };

    return (
        <div className={simpleSection}>
            <div className={`${shellClassName} grid gap-4 pb-0 md:pb-0`}>
                <motion.div {...reveal} className="grid max-w-3xl gap-4">
                    <p className={eyebrowClassName}>RÉSULTATS</p>
                    <h2
                        className={sectionTitleClassName}
                        style={{ fontFamily: "var(--font-hero)" }}
                    >
                        Une proposition complète est réalisée et validée..
                    </h2>
                </motion.div>
            </div>

            <div
                ref={containerRef}
                className="relative"
                style={{ height: `${slideCount * 118}svh` }}
            >
                <div className="sticky top-[72px] h-[calc(100svh-72px)]">
                    <div
                        className={`${shellClassName} flex h-full flex-col justify-center gap-6 py-6 md:gap-8 md:py-10`}
                    >
                        <div className="relative flex-1 overflow-hidden rounded-[32px] border border-black/10 bg-[radial-gradient(circle_at_50%_20%,rgba(73,111,168,0.18),transparent_34%),linear-gradient(180deg,#0f1727_0%,#161f33_100%)] shadow-[0_28px_70px_rgba(18,22,29,0.14)]">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

                            {responsiveSlides.map((slide, index) => {
                                const relativeOffset = timelineValue - index;
                                const clampedOffset = clamp(relativeOffset, -1.2, 1.2);
                                const absOffset = Math.abs(clampedOffset);
                                const translateX = 0;
                                const translateY = -clampedOffset * 132;
                                const scale = 1 - absOffset * 0.08;
                                const opacity = clamp(1 - absOffset * 0.82, 0, 1);
                                const rotate = slide.frame === "phone"
                                    ? clampedOffset * -3
                                    : 0;
                                const blur = absOffset * 10;
                                const isSpotlight = spotlight?.index === index;
                                const widthClassName =
                                    slide.frame === "phone"
                                        ? "w-[min(56vw,280px)] md:w-[min(24vw,320px)]"
                                        : slide.frame === "document"
                                            ? "w-[min(90vw,1136px)]"
                                            : index === 1
                                                ? "w-[min(84vw,860px)] md:w-[min(70vw,920px)]"
                                                : "w-[min(90vw,1020px)]";

                                return (
                                    <div
                                        key={`${slide.title}-${index}`}
                                        className={`absolute left-1/2 top-1/2 ${widthClassName} will-change-transform`}
                                        style={{
                                            opacity,
                                            filter: `blur(${blur}px)`,
                                            transform: `translate(-50%, -50%) translateX(${translateX}%) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                                            zIndex: Math.round((1 - absOffset) * 100),
                                        }}
                                    >
                                        <motion.div
                                            animate={
                                                isSpotlight
                                                    ? { scale: [1, 1.025, 1], y: [0, -8, 0] }
                                                    : { scale: 1, y: 0 }
                                            }
                                            transition={{
                                                duration: isSpotlight ? 0.7 : 0.2,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="relative"
                                        >
                                            <AnimatePresence>
                                                {isSpotlight ? (
                                                    <motion.div
                                                        key={`spotlight-${spotlight?.token ?? 0}`}
                                                        className="pointer-events-none absolute inset-[-18px] -z-10 rounded-[40px] bg-[radial-gradient(circle,rgba(255,214,84,0.38),rgba(92,146,255,0.16)_42%,rgba(92,146,255,0))]"
                                                        initial={{ opacity: 0, scale: 0.92 }}
                                                        animate={{ opacity: [0, 0.9, 0], scale: [0.92, 1.05, 1.08] }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                                                    />
                                                ) : null}
                                            </AnimatePresence>

                                            {slide.frame === "phone" ? (
                                                <PhoneMockup image={slide.image} alt={slide.title} />
                                            ) : slide.frame === "document" ? (
                                                <div className="overflow-hidden rounded-[26px] border border-black/8 bg-white/92 p-3 shadow-[0_28px_70px_rgba(18,22,29,0.18)] md:p-4">
                                                    <div className="overflow-hidden rounded-[18px] bg-neutral-100">
                                                        <img
                                                            src={slide.image}
                                                            alt={slide.title}
                                                            className="block aspect-[1136/447] w-full object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#081733] shadow-[0_28px_70px_rgba(18,22,29,0.24)]">
                                                    <div className="flex items-center justify-between border-b border-white/10 bg-white/6 px-4 py-3 md:px-5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="h-3 w-3 rounded-full bg-white/55" />
                                                            <span className="h-3 w-3 rounded-full bg-white/55" />
                                                            <span className="h-3 w-3 rounded-full bg-white/55" />
                                                        </div>
                                                        <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/70">
                                                            {slide.meta}
                                                        </span>
                                                    </div>

                                                    <img
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="block w-full"
                                                    />
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
                            <motion.div
                                key={activeSlide.title}
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                className="rounded-[28px] border border-black/8 bg-white/78 p-5 shadow-[0_16px_34px_rgba(18,22,29,0.06)] backdrop-blur-md md:p-6"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="inline-flex rounded-full border border-black/8 bg-black/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-700">
                                        Etape {activeIndex + 1}
                                    </span>
                                    <span className="text-sm text-neutral-500">
                                        {activeSlide.meta}
                                    </span>
                                </div>

                                <h3
                                    className="text-2xl leading-tight tracking-[-0.03em] text-neutral-950 md:text-[2rem]"
                                    style={{ fontFamily: "var(--font-hero)" }}
                                >
                                    {activeSlide.title}
                                </h3>
                                <p className="mt-3 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
                                    {activeSlide.description}
                                </p>
                            </motion.div>

                            <div className="grid gap-2" aria-label="Etapes du showcase responsive">
                                {responsiveSlides.map((slide, index) => (
                                    <button
                                        key={slide.title}
                                        type="button"
                                        onClick={() => scrollToSlide(index)}
                                        aria-pressed={index === activeIndex}
                                        className={`rounded-2xl border px-4 py-3 text-left transition-[transform,background-color,border-color,box-shadow] duration-300 ${index === activeIndex
                                            ? "border-black/10 bg-white/82 shadow-[0_10px_24px_rgba(18,22,29,0.05)]"
                                            : "border-black/6 bg-white/40 hover:-translate-y-0.5 hover:border-black/10 hover:bg-white/66"
                                            } ${spotlight?.index === index
                                                ? "ring-2 ring-amber-300/70 ring-offset-2 ring-offset-transparent"
                                                : ""
                                            }`}
                                    >
                                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                        <div className="mt-1 text-sm font-medium text-neutral-800">
                                            {slide.title}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rounded-full border border-black/8 bg-white/70 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-700 backdrop-blur-md">
                                Defilement visuel
                            </div>
                            <div className="relative h-px flex-1 overflow-hidden bg-black/10">
                                <motion.div
                                    className="absolute inset-y-0 left-0 w-full origin-left bg-neutral-950"
                                    style={{ scaleX: progressLine }}
                                />
                            </div>
                            <div className="rounded-full border border-black/8 bg-white/70 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-neutral-700 backdrop-blur-md">
                                {slideCount} visuels
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const processSteps: Step[] = [
    {
        id: "01",
        title: "Audit de l'existant",
        description:
            "Analyse SEO, structure des pages, contenus a forte valeur et points de friction du parcours.",
        visuel: '',
    },
    {
        id: "02",
        title: "Repositionnement",
        description:
            "Faire evoluer un site institutionnel vers un site plus lisible, plus rassurant et plus oriente conversion.",
        visuel: '',
    },
    {
        id: "03",
        title: "Prototype UX/UI",
        description:
            "Recomposer la home, valider la nouvelle narration et installer la charte sur les gabarits clefs.",
        visuel: "",
    },
    {
        id: "04",
        title: "Integration sur mesure",
        description:
            "Developper un template WordPress custom tout en conservant trackers, contenus et capital technique.",
        visuel: "",
    },
];
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
                <p className="max-w-3xl text-base leading-8 text-neutral-800 md:text-lg">
                    {body}
                </p>
            ) : null}
        </motion.div>
    );
}


export default function CaseStudyExemple(): ReactElement {


    const stats = [
        { label: "Conversion", value: 35 },
        { label: "Engagement", value: 20 },
        { label: "Bounce", value: 15 },
    ];
    const [accordionOpen, setAccordionOpen] = useState(true);
    const [accordionOpen2, setAccordionOpen2] = useState(false);
    const [accordionOpen3, setAccordionOpen3] = useState(false);
    const { scrollYProgress } = useScroll();
    const grainOpacity = useSpring(
        useTransform(scrollYProgress, [0, 0.45], [0, 0.07]),
        {
            stiffness: 120,
            damping: 28,
            mass: 0.24,
        },
    );

    return (
        <main
            className="relative isolate text-neutral-950"
            style={{
                background: "var(--bg)",
            }}
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

            <section className="relative z-20 px-4 pb-0 pt-32 md:px-6 md:pb-0 md:pt-[180px]">
                <motion.div
                    {...reveal}
                    className={`${shellClassName} grid items-center gap-12 md:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] md:gap-16`}
                >
                    <div className="relative z-10 grid content-center gap-6">
                        <p className={eyebrowClassName}>DiliTrust</p>
                        <div className="grid gap-5">
                            <h1
                                className="text-[clamp(3.5rem,11vw,7rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Refonte de site
                            </h1>

                            <p className="max-w-xl text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.45] tracking-[-0.03em] text-neutral-700">
                                Refondre sans perdre la performance: concilier design,
                                lisibilité et SEO sur un site SaaS dense, du desktop au
                                mobile.
                            </p>
                        </div>

                        <div className="h-px w-24 bg-black/10" />

                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
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

                    <motion.figure
                        initial={{ opacity: 0, x: 24, y: 36 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative mx-auto w-full max-w-[760px]"
                    >
                        <div className="pointer-events-none absolute inset-[-6%] -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(151,176,204,0.34),rgba(244,244,241,0)_68%)] blur-2xl" />
                        <img
                            src={heroVisual}
                            alt="Apercu retravaille du site DiliTrust"
                            className="block w-full "
                        />
                    </motion.figure>
                </motion.div>
            </section>

            <section className={simpleSection}>
                <div className={shellClassName}>
                    <motion.div
                        {...reveal}
                    ><SectionHeading
                            eyebrow="Contexte"
                            title=""
                            body="Avec l'arrivée d'une nouvelle identité graphique, le site devait évoluer sans perdre son capital SEO ni ses contenus à forte valeur."
                        />
                    </motion.div>
                </div>
                <div className={fullLine}></div>
                <div className={shellClassName}>
                    <motion.div
                        {...reveal}
                    ><SectionHeading
                            eyebrow="Réponse"
                            title=""
                            body="Poser un système de pages plus clair, plus convaincant et
                            plus souple a décliner, puis l'intégrer dans un template
                            WordPress sur mesure."
                        />
                    </motion.div>
                </div>

                <div className={fullLine}></div>
                <div className={shellClassName}>
                    <motion.div {...reveal}>
                        <p className={eyebrowClassName}>Objectif(s)</p>
                        <h2
                            className="mt-4 text-3xl leading-tight tracking-[-0.04em] text-neutral-950 md:text-[3rem]"
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Moderniser l’image de marque et améliorer la génération de leads.
                        </h2>

                        <div className="mt-6 grid gap-3 text-base leading-7 text-neutral-700">
                            {[
                                "Installer la nouvelle charte graphique sur l'ensemble du site.",
                                "Preserver la structure SEO, les trackers et les contenus forts.",
                                "Clarifier l'offre produit pour generer davantage de leads.",
                                "Rendre la navigation plus naturelle sur mobile comme sur desktop.",
                            ].map((item, index) => (
                                <motion.div key={item} {...reveal}>
                                    <div
                                        className={neutralCells}
                                    >
                                        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-base/6 text-neutral-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-7 grid gap-5 md:grid-cols-2">
                            <div>
                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                                    Outils
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {["Adobe XD", "Pack Adobe", "Vagrant", "VS Code"].map(
                                        (tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full border border-black/8 bg-white px-3 py-2 text-sm text-neutral-700"
                                            >
                                                {tool}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div>
                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                                    Stack
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {["WordPress", "LESS", "Bootstrap", "PHP", "MySQL"].map(
                                        (tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-black/8 bg-white px-3 py-2 text-sm text-neutral-700"
                                            >
                                                {tech}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div><div className={fullLine}></div>
            </section>


            <section className={fullWidthSection}>
                <div
                    className={`${shellClassName}`}
                >
                    {processSteps.map((step) => (
                        <motion.article
                            key={step.id}
                            {...reveal}
                            className="rounded-[12px] m-4 p-4 bg-white/82 p-6 md:p-7"
                        >
                            <p className="text-[0.72rem] font-light uppercase tracking-[0.28em] text-neutral-400">
                                &Eacute;tape {step.id}
                            </p>
                            <h3
                                className="mt-4 text-2xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                {step.title}
                            </h3>
                            <p className="mt-3 text-base leading-7 text-neutral-600">
                                {step.description}
                            </p>
                            <img src={step.visuel} />
                        </motion.article>
                    ))}

                </div>
            </section>


            {/* ------------- */}

            <section className={simpleSection}>
                <div
                    className={shellClassName}
                >
                    <div className="grid gap-6 md:grid-cols-1">
                        <SectionHeading
                            eyebrow="Avant / après"
                            title="Une home plus lisible, plus structurée et plus attractive."
                            body="Le travail porte autant sur l'image que sur la compréhension immédiate de l'offre. Le comparatif montre le changement de hiérarchie, de respiration et de ton."
                        />
                        <motion.div {...reveal}>
                            <BeforeAfter before={beforeImage} after={afterImage} />
                        </motion.div>
                        <motion.div {...reveal} className="grid gap-4 md:grid-cols-2">
                            <div className={`${surfaceClassName} p-6 md:p-7`}>
                                <p className={eyebrowClassName}>Avant</p>
                                <ul className="text-base text-neutral-700">
                                    <li>Lecture plus dense et parcours moins guide.</li>
                                    <li>Perception plus institutionnelle que produit.</li>
                                    <li>Moins de respiration et moins de focalisation.</li>
                                </ul>
                            </div>

                            <div className={`${surfaceClassName} p-6 md:p-7`}>
                                <p className={eyebrowClassName}>Après</p>
                                <ul className="text-base text-neutral-700">
                                    <li>Une narration plus directe pour convaincre vite.</li>
                                    <li>Une charte plus premium et plus coherente.</li>
                                    <li>Des appels a l'action plus clairs sur tout le parcours.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </section>
            {/* ------------- */}
            <section className={simpleSection}>
                <div
                    className={shellClassName}
                >
                    <div className="grid gap-6 md:grid-cols-1">
                        <SectionHeading
                            eyebrow="Avant / après"
                            title="Une home plus lisible, plus structurée et plus attractive."
                            body="Le travail porte autant sur l'image que sur la compréhension immédiate de l'offre. Le comparatif montre le changement de hiérarchie, de respiration et de ton."
                        />
                        <div className="mt-8 grid gap-3">
                            <MTAccordion
                                open={accordionOpen}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${accordionOpen ? "rotate-180" : ""}`}
                                    />
                                }
                                className={`${surfaceClassName} rounded-[28px] border-black/10 bg-white`}
                            >
                                <MTAccordionHeader
                                    onClick={() => setAccordionOpen((current) => !current)}
                                    className="rounded-[28px] bg-neutral-100 px-5 py-4 text-left text-base font-semibold uppercase tracking-[0.02em] text-neutral-950 shadow-none"
                                >
                                    Pourquoi cette refonte ?
                                </MTAccordionHeader>
                                <MTAccordionBody className="px-5 pb-6 text-base leading-7 text-neutral-700">
                                    Nous avons clarifié l’offre, restructuré le contenu pour le SEO et adapté
                                    l’interface aux parcours mobile-first sans perdre la vitesse ni la
                                    performance technique.
                                </MTAccordionBody>
                            </MTAccordion>

                            <MTAccordion
                                open={accordionOpen2}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${accordionOpen2 ? "rotate-180" : ""}`}
                                    />
                                }
                                className={`${surfaceClassName} rounded-[28px] border-black/10 bg-white`}
                            >
                                <MTAccordionHeader
                                    onClick={() => setAccordionOpen2((current) => !current)}
                                    className="rounded-[28px] bg-neutral-100 px-5 py-4 text-left text-base font-semibold uppercase tracking-[0.02em] text-neutral-950 shadow-none"
                                >
                                    Comment le design a-t-il été optimisé ?
                                </MTAccordionHeader>
                                <MTAccordionBody className="px-5 pb-6 text-base leading-7 text-neutral-700">
                                    La page a été réorganisée pour rendre le parcours plus simple, le message plus
                                    clair et les appels à l’action plus visibles sur desktop comme sur mobile.
                                </MTAccordionBody>
                            </MTAccordion>

                            <MTAccordion
                                open={accordionOpen3}
                                icon={
                                    <ChevronDownIcon
                                        className={`text-xl transition-transform duration-300 ${accordionOpen3 ? "rotate-180" : ""}`}
                                    />
                                }
                                className={`${surfaceClassName} rounded-[28px] border-black/10 bg-white`}
                            >
                                <MTAccordionHeader
                                    onClick={() => setAccordionOpen3((current) => !current)}
                                    className="rounded-[28px] bg-neutral-100 px-5 py-4 text-left text-base font-semibold uppercase tracking-[0.02em] text-neutral-950 shadow-none"
                                >
                                    Quels résultats pouvons-nous attendre ?
                                </MTAccordionHeader>
                                <MTAccordionBody className="px-5 pb-6 text-base leading-7 text-neutral-700">
                                    Résultats attendus : meilleure conversion, navigation plus fluide et une
                                    expérience mobile qui renforce la confiance des utilisateurs.
                                </MTAccordionBody>
                            </MTAccordion>
                        </div>

                    </div>
                </div>
            </section>


            {/* ------------- */}
            <section className="relative z-10 pb-0 md:pb-0">
                <div className={`${shellClassName} grid gap-10`}>
                    <SectionHeading
                        eyebrow="Choix de conception"
                        title="Une refonte guidee par la clarte, la conversion et le mobile."
                        body="Chaque famille d'ecrans a ete retravaillee pour raconter une offre dense plus simplement, sans perdre la richesse du produit ni le cadre technique existant."
                    />

                    <div className="grid gap-5 lg:grid-cols-1">
                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>01 - Territoire visuel</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Installer la nouvelle charte sans rigidite.
                            </h3>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
                                La nouvelle identite ne se limite pas a une couche visuelle:
                                elle reorganise le rythme, les contrastes et la mise en
                                confiance.
                            </p>
                            <div className="mt-6">
                                <BrowserFrame
                                    image={charteImage}
                                    alt="Charte graphique DiliTrust"
                                    label="Direction graphique"
                                    fit="contain"
                                    contentClassName="bg-[#f5efe6] p-4 md:p-6"
                                    imageClassName="aspect-[16/10]"
                                />
                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>02 - Performance</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Garder le SEO dans la boucle du debut a la fin.
                            </h3>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
                                La refonte conserve l'architecture et les integrations
                                critiques tout en gagnant en vitesse de chargement.
                            </p>
                            <div className="mt-6">
                                <BrowserFrame
                                    image={seoCompareImage}
                                    alt="Comparatif SEO DiliTrust"
                                    label="Rapport SEO"
                                    dark
                                    contentClassName="p-2"
                                />
                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>03 - Home page</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Recomposer la narration pour convaincre plus vite.
                            </h3>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
                                Les contenus sont reordonnes pour passer plus vite de la
                                promesse a la preuve, puis a la conversion.
                            </p>
                            <div className="mt-6 grid gap-4 md:grid-cols-1">
                                <BrowserFrame
                                    image={morphingBeforeImage}
                                    alt="Structure initiale de la home"
                                    label="Avant"
                                    dark
                                    contentClassName="p-2"
                                />
                                <PhoneMockup
                                    image={morphingAfterImage}
                                    alt="Structure finale de la home"
                                />
                            </div>
                        </motion.article>

                        <motion.article
                            {...reveal}
                            className={`${surfaceClassName} overflow-hidden p-6 md:p-7`}
                        >
                            <p className={eyebrowClassName}>04 - Mobile first</p>
                            <h3
                                className="mt-3 text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                                style={{ fontFamily: "var(--font-hero)" }}
                            >
                                Rendre le produit plus naturel a parcourir sur smartphone.
                            </h3>
                            <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600">
                                Les ecrans et la navigation sont simplifies pour un usage au
                                pouce, avec un parcours plus direct et plus fluide.
                            </p>
                            <div className="mt-6 flex items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#0b1220_0%,#131d31_100%)] p-6">
                                <motion.img
                                    src={otherVisual}
                                    alt="Apercu mobile de la refonte DiliTrust"
                                    className="block w-full"
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true, amount: 0.2 }}
                                />

                                <PhoneMockup
                                    image={phoneMenuImage}
                                    alt="Version mobile du site DiliTrust"
                                />


                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>

            {/* ------------- */}

            <section className={simpleSection}>
                <div className={shellClassName}>
                    <motion.div
                        {...reveal}
                        className={`${shellClassName}`}
                    >
                        <p className={eyebrowClassName}>Avant / après</p>
                        <p>
                            Avec l'arrivée d'une nouvelle identité graphique, le site
                            devait évoluer sans perdre son capital SEO ni ses contenus
                            à forte valeur.
                        </p>
                    </motion.div>
                </div>


                <div className={`${shellClassName} grid gap-10`}>
                    <motion.div {...reveal} className="grid max-w-3xl gap-4">
                        <p className={eyebrowClassName}>APPROCHE UX & STRAT&Eacute;GIE(s)</p>
                        <h2
                            className={sectionTitleClassName}
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Moderniser l’image de marque et améliorer la génération de leads.
                        </h2>
                        <div className="text-base leading-8 text-neutral-600 md:text-lg">

                            <ul>

                                <li>1. Audit de l’existant
                                    <ul>
                                        <li> • Analyse SEO</li>
                                        <li> • structure des pages </li>
                                        <li> • identification des contenus à forte valeur</li>
                                        <li> • mapping des parcours utilisateurs</li>
                                    </ul>
                                </li>

                                <li>2. Repositionnement du site
                                    <ul>
                                        <li> • Transformation du site :
                                            <ul>
                                                <li> D’un site institutionnel vers un site orienté conversion</li>
                                            </ul>
                                        </li>

                                        <li> • Mise en place de :
                                            <ul>
                                                <li> •	funnels de conversion </li>
                                                <li> •	logique de réassurance </li>
                                                <li> •	parcours en 3 étapes (comprendre → convaincre → convertir)</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                                <li>3. UX + contenu
                                    <ul>
                                        <li> •	réorganisation des contenus existants </li>
                                        <li> •	conservation de l’architecture SEO </li>
                                        <li> •	amélioration de la lisibilité  </li>
                                        <li> •	hiérarchisation de l’information </li>
                                    </ul>
                                </li>

                                <li>4. Design & UI
                                    <ul>
                                        <li>Intégration de la nouvelle charte :
                                            <ul>
                                                <li> •	respect des codes visuels  </li>
                                                <li> •	adaptation mobile-first </li>
                                                <li> •	amélioration de la lisibilité  </li>
                                                <li> •	cohérence produit  </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>5. Prototype & validation
                                    <ul>
                                        <li> •	Création Home Page </li>
                                        <li> •	pages types  </li>
                                        <li> •	composants clés </li>
                                    </ul>
                                </li>

                                <li>6. Implémentation technique
                                    <ul>
                                        <li> •	développement front-end </li>
                                        <li> •	intégration WordPress custom </li>
                                        <li> •	respect des contraintes SEO </li>
                                        <li> •	Inplémentation des trackers de suivi</li>
                                        <li> •	sécurisation des workflows backend </li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative z-20 px-4 pb-0 md:px-6 md:pb-0">
                <p className={eyebrowClassName}>RÉSULTATS</p>
                <h2
                    className={sectionTitleClassName}
                    style={{ fontFamily: "var(--font-hero)" }}
                >
                    Une proposition complète est réalisée et validée.
                    Le prototype répond aux objectifs :
                </h2>
                <ul>
                    <li> •	✅ SEO préservé, vitesse de chargement améliorée  </li>
                    <li> •	✅  nouvelle identité graphique intégrée </li>
                    <li> •	✅ parcours utilisateur clarifié </li>
                    <li> •	✅ conversion optimisée (logique en 3 clics) </li>
                    <li> •	✅  livraison en 4 mois </li>
                </ul>
                <motion.figure
                    {...reveal}
                    className="mx-auto w-full max-w-[1320px] overflow-hidden rounded-[34px] border border-black/8 bg-white/84 shadow-[0_28px_70px_rgba(18,22,29,0.12)]"
                >
                    <motion.img
                        src={ResponsiveSlide05}
                        alt="Apercu mobile de la refonte DiliTrust"
                        className="block w-full"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.2 }}
                    />
                    <figcaption className="px-5 py-4 text-sm leading-7 text-neutral-600 md:px-6 md:text-base">
                        Une direction mobile first qui rend l&apos;experience plus directe,
                        plus aeree et plus simple a parcourir.
                    </figcaption>
                </motion.figure>
            </section>



            <section className={simpleSection}>
                <div className={`${shellClassName} grid gap-10`}>
                    <motion.div {...reveal} className="grid max-w-3xl gap-4">
                        <p className={eyebrowClassName}>Avant / Apres</p>
                        <h2
                            className={sectionTitleClassName}
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Clarifier la promesse sans effacer la profondeur.
                        </h2>
                        <p className="text-base leading-8 text-neutral-600 md:text-lg">
                            La comparaison directe met en evidence le gain de lisibilite,
                            l&apos;organisation du contenu et la sensation de produit plus
                            premium sur desktop comme sur mobile.
                        </p>
                    </motion.div>

                    <motion.div {...reveal}>
                        <BeforeAfter before={beforeImage} after={afterImage} />
                    </motion.div>
                </div>
            </section>

            <ResponsiveShowcase />

            <section className="relative z-20 px-4 pb-0 md:px-6 md:pb-0">
                <motion.figure
                    {...reveal}
                    className="mx-auto w-full max-w-[1320px] overflow-hidden rounded-[34px] border border-black/8 bg-white/84 shadow-[0_28px_70px_rgba(18,22,29,0.12)]"
                >
                    <motion.img
                        src={otherVisual}
                        alt="Apercu mobile de la refonte DiliTrust"
                        className="block w-full"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true, amount: 0.2 }}
                    />
                    <figcaption className="px-5 py-4 text-sm leading-7 text-neutral-600 md:px-6 md:text-base">
                        Une direction mobile first qui rend l&apos;experience plus directe,
                        plus aeree et plus simple a parcourir.
                    </figcaption>
                </motion.figure>
            </section>

            <section className="relative z-20 pb-0 md:pb-0">
                <div className={`${shellClassName} grid gap-10`}>
                    <motion.div {...reveal} className="grid max-w-3xl gap-4">
                        <p className={eyebrowClassName}>Resultats</p>
                        <h2
                            className={sectionTitleClassName}
                            style={{ fontFamily: "var(--font-hero)" }}
                        >
                            Des gains perceptibles des les premiers parcours.
                        </h2>
                        <p className="text-base leading-8 text-neutral-600 md:text-lg">
                            Les chiffres ci-dessous montrent l&apos;impact attendu d&apos;une
                            experience plus claire, plus narrative et plus rassurante.
                        </p>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {stats.map((stat) => (
                            <Stat key={stat.label} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
