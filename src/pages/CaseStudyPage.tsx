import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { type PointerEvent, useRef, useState } from "react";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import afterImage from "../assets/images/projects/rea_web_dilitrust/home_compare_new2.png";
import beforeImage from "../assets/images/projects/rea_web_dilitrust/home_compare_old2.png";
import charteImage from "../assets/images/projects/rea_web_dilitrust/charte.png";
import conferenceAssetsImage from "../assets/images/projects/rea_web_dilitrust/conference_assets.png";
import heroVisual from "../assets/images/projects/rea_web_dilitrust/new_dilitrust_trsp.png";
import landingAdminImage from "../assets/images/projects/rea_web_dilitrust/landing_admin.png";
import morphingAfterImage from "../assets/images/projects/rea_web_dilitrust/morphing_after.png";
import morphingBeforeImage from "../assets/images/projects/rea_web_dilitrust/morphing_before.png";
import newDilitrustImage from "../assets/images/projects/rea_web_dilitrust/new_dilitrust.png";
import performanceCompareImage from "../assets/images/projects/rea_web_dilitrust/perf_compares.png";
import phoneMenuImage from "../assets/images/projects/rea_web_dilitrust/home_phone_menu.PNG";
import seoCompareImage from "../assets/images/projects/rea_web_dilitrust/seo_compare.png";

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  viewport: { once: true, amount: 0.2 },
};

const shellClassName = "mx-auto w-full max-w-[1240px] px-6 md:px-8";
const eyebrowClassName =
  "text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-neutral-500";
const sectionTitleClassName =
  "text-4xl leading-[0.96] tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl";
const surfaceClassName =
  "rounded-[30px] border border-black/8 bg-white/82 shadow-[0_20px_50px_rgba(18,22,29,0.08)] backdrop-blur-sm";

type Step = {
  id: string;
  title: string;
  description: string;
};

type Metric = {
  value: string;
  label: string;
  detail: string;
};

const processSteps: Step[] = [
  {
    id: "01",
    title: "Audit de l'existant",
    description:
      "Analyse SEO, structure des pages, contenus a forte valeur et points de friction du parcours.",
  },
  {
    id: "02",
    title: "Repositionnement",
    description:
      "Faire evoluer un site institutionnel vers un site plus lisible, plus rassurant et plus oriente conversion.",
  },
  {
    id: "03",
    title: "Prototype UX/UI",
    description:
      "Recomposer la home, valider la nouvelle narration et installer la charte sur les gabarits clefs.",
  },
  {
    id: "04",
    title: "Integration sur mesure",
    description:
      "Developper un template WordPress custom tout en conservant trackers, contenus et capital technique.",
  },
];

const metrics: Metric[] = [
  {
    value: "37%",
    label: "de performance globale en plus",
    detail:
      "Les optimisations techniques ont allege le site sans sacrifier les integrations existantes.",
  },
  {
    value: "x7",
    label: "moins de poids a charger",
    detail:
      "Le front a ete repense pour garder une experience rapide sur des pages riches en contenu.",
  },
  {
    value: "SEO",
    label: "socle preserve pendant la refonte",
    detail:
      "L'architecture et les acquis organiques restent au coeur de la nouvelle mouture.",
  },
  {
    value: "4 mois",
    label: "du prototype a la livraison",
    detail:
      "Le projet a avance vite, de la validation UX a l'integration finale des templates.",
  },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

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
        <p className="max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
          {body}
        </p>
      ) : null}
    </motion.div>
  );
}

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
    <div className={`overflow-hidden rounded-[26px] border ${shellClasses}`}>
      <div
        className={`flex items-center justify-between border-b px-4 py-3 md:px-5 ${barClasses}`}
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-current/45" />
          <span className="h-3 w-3 rounded-full bg-current/45" />
          <span className="h-3 w-3 rounded-full bg-current/45" />
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

type PhoneMockupProps = {
  image: string;
  alt: string;
};

function PhoneMockup({ image, alt }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rounded-[3rem] bg-[linear-gradient(180deg,#192233_0%,#0a101a_100%)] p-[10px] shadow-[0_36px_80px_rgba(15,23,42,0.38)] ring-1 ring-white/10">
      <div className="pointer-events-none absolute inset-y-[72px] left-[6px] w-[3px] rounded-full bg-white/10" />
      <div className="pointer-events-none absolute right-[6px] top-[86px] h-16 w-[3px] rounded-full bg-white/10" />
      <div className="pointer-events-none absolute right-[6px] top-[156px] h-10 w-[3px] rounded-full bg-white/10" />

      <div className="relative overflow-hidden rounded-[2.45rem] bg-[#061121]">
        <div className="absolute left-1/2 top-3 z-20 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/16" />
        <img src={image} alt={alt} className="block w-full rounded-[2.2rem]" />
      </div>

      <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-white/10" />
    </div>
  );
}

type BeforeAfterProps = {
  before: string;
  after: string;
};

function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [position, setPosition] = useState(52);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) {
      return;
    }

    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(percent, 0, 100));
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
      className="relative min-h-[320px] overflow-hidden rounded-[30px] border border-black/10 bg-neutral-950 shadow-[0_32px_80px_rgba(18,22,29,0.22)] outline-none [touch-action:none] select-none md:min-h-[560px]"
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
          setPosition((current) => clamp(current - 5, 0, 100));
        }

        if (event.key === "ArrowRight") {
          setPosition((current) => clamp(current + 5, 0, 100));
        }
      }}
    >
      <img
        src={after}
        alt="Version retravaillee du site DiliTrust"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <img
        src={before}
        alt="Version precedente du site DiliTrust"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[2px] -translate-x-1/2 bg-white/95 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_0_40px_rgba(255,255,255,0.35)]"
        style={{ left: `${position}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-20 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] md:h-[60px] md:w-[60px]"
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
}

export default function CaseStudyPage() {
  const { scrollYProgress } = useScroll();
  const heroPanelY = useSpring(useTransform(scrollYProgress, [0, 0.35], [0, -28]), {
    stiffness: 120,
    damping: 26,
    mass: 0.28,
  });
  const accentOrbY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 140]), {
    stiffness: 110,
    damping: 28,
    mass: 0.32,
  });

  return (
    <PageTransition>
      <div className="site-page">
        <main className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#f5f0e8_0%,#f6f4ef_25%,#ffffff_58%,#eef3f8_100%)] text-neutral-950">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_top_left,rgba(230,192,153,0.38),transparent_36%),radial-gradient(circle_at_80%_16%,rgba(151,185,225,0.38),transparent_30%)]"
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-12%] top-24 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#d8e4f4]/80 blur-3xl"
            style={{ y: accentOrbY }}
          />

          <section className="relative px-4 pb-18 pt-30 md:px-6 md:pb-26 md:pt-[170px]">
            <motion.div
              {...reveal}
              className={`${shellClassName} grid items-center gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-18`}
            >
              <div className="grid gap-7">
                <div className="grid gap-5">
                  <p className={eyebrowClassName}>Case study - DiliTrust</p>
                  <h1
                    className="max-w-[11ch] text-[clamp(3.5rem,11vw,7rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950"
                    style={{ fontFamily: "var(--font-hero)" }}
                  >
                    Refonte du site web DiliTrust
                  </h1>
                  <p className="max-w-2xl text-[clamp(1.18rem,2.5vw,1.65rem)] leading-[1.48] tracking-[-0.03em] text-neutral-700">
                    Refondre sans perdre la performance: concilier design,
                    lisibilite et SEO sur un site SaaS dense, du desktop au
                    mobile.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-neutral-600">
                  {["UX strategy", "WordPress custom", "Mobile first", "SEO care"].map(
                    (pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-black/8 bg-white/65 px-4 py-2 shadow-[0_8px_20px_rgba(18,22,29,0.05)]"
                      >
                        {pill}
                      </span>
                    ),
                  )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className={`${surfaceClassName} p-6 md:p-7`}>
                    <p className={eyebrowClassName}>Contexte</p>
                    <p className="mt-4 text-base leading-8 text-neutral-700">
                      Avec l'arrivee d'une nouvelle identite graphique, le site
                      devait evoluer sans perdre son capital SEO ni ses contenus
                      a forte valeur.
                    </p>
                  </div>

                  <div className={`${surfaceClassName} p-6 md:p-7`}>
                    <p className={eyebrowClassName}>Reponse</p>
                    <p className="mt-4 text-base leading-8 text-neutral-700">
                      Poser un systeme de pages plus clair, plus convaincant et
                      plus souple a decliner, puis l'integrer dans un template
                      WordPress sur mesure.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div style={{ y: heroPanelY }} className="relative">
                <div className="relative overflow-hidden rounded-[34px] border border-black/8 bg-[linear-gradient(180deg,rgba(10,16,26,0.96),rgba(16,26,43,0.9))] p-4 shadow-[0_34px_100px_rgba(16,24,40,0.24)] md:p-6">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_36%),radial-gradient(circle_at_70%_70%,rgba(255,198,125,0.18),transparent_26%)]" />
                  <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#0d1728_0%,#111e33_100%)] p-6 md:p-10">
                    <img
                      src={heroVisual}
                      alt="Apercu du nouveau territoire visuel DiliTrust"
                      className="mx-auto block w-full max-w-[720px]"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-white/82 backdrop-blur-sm md:px-5">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/58">
                        Direction
                      </p>
                      <p className="mt-2 text-sm leading-6 md:text-base">
                        Une interface plus claire, plus premium et plus
                        credible pour un produit SaaS juridique.
                      </p>
                    </div>
                    <div className="hidden rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70 md:block">
                      Prototype valide
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:absolute md:-bottom-8 md:left-4 md:w-[47%] md:max-w-[360px]">
                  <BrowserFrame
                    image={charteImage}
                    alt="Extraction de la nouvelle charte DiliTrust"
                    label="Charte"
                    fit="contain"
                    contentClassName="bg-[#f4efe8] p-4"
                    imageClassName="aspect-[4/3]"
                  />
                </div>

                <div className="mt-4 ml-auto grid w-full max-w-[320px] gap-4 md:absolute md:-right-6 md:top-[12%] md:w-[42%] md:max-w-none">
                  <BrowserFrame
                    image={seoCompareImage}
                    alt="Comparatif de performance et SEO"
                    label="SEO"
                    dark
                    contentClassName="p-2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section className="relative z-10 pb-20 md:pb-28">
            <div
              className={`${shellClassName} grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]`}
            >
              <motion.div {...reveal} className={`${surfaceClassName} p-7 md:p-8`}>
                <p className={eyebrowClassName}>Objectifs</p>
                <h2
                  className="mt-4 text-3xl leading-tight tracking-[-0.04em] text-neutral-950 md:text-[3rem]"
                  style={{ fontFamily: "var(--font-hero)" }}
                >
                  Moderniser l'image de marque sans casser l'existant.
                </h2>

                <div className="mt-6 grid gap-3 text-base leading-7 text-neutral-700">
                  {[
                    "Installer la nouvelle charte graphique sur l'ensemble du site.",
                    "Preserver la structure SEO, les trackers et les contenus forts.",
                    "Clarifier l'offre produit pour generer davantage de leads.",
                    "Rendre la navigation plus naturelle sur mobile comme sur desktop.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-[22px] border border-black/6 bg-black/[0.02] px-4 py-4"
                    >
                      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </div>
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

              <div className="grid gap-4 md:grid-cols-2">
                {processSteps.map((step) => (
                  <motion.article
                    key={step.id}
                    {...reveal}
                    className={`${surfaceClassName} p-6 md:p-7`}
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                      Etape {step.id}
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
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative z-10 pb-20 md:pb-28">
            <div
              className={`${shellClassName} grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center`}
            >
              <div className="grid gap-6">
                <SectionHeading
                  eyebrow="Avant / apres"
                  title="Une home plus lisible, plus structuree et plus desirable."
                  body="Le travail porte autant sur l'image que sur la comprehension immediate de l'offre. Le comparatif montre le changement de hierarchie, de respiration et de ton."
                />

                <motion.div {...reveal} className="grid gap-4 md:grid-cols-2">
                  <div className={`${surfaceClassName} p-6 md:p-7`}>
                    <p className={eyebrowClassName}>Avant</p>
                    <ul className="mt-4 grid gap-3 text-base leading-7 text-neutral-700">
                      <li>Lecture plus dense et parcours moins guide.</li>
                      <li>Perception plus institutionnelle que produit.</li>
                      <li>Moins de respiration et moins de focalisation.</li>
                    </ul>
                  </div>

                  <div className={`${surfaceClassName} p-6 md:p-7`}>
                    <p className={eyebrowClassName}>Apres</p>
                    <ul className="mt-4 grid gap-3 text-base leading-7 text-neutral-700">
                      <li>Une narration plus directe pour convaincre vite.</li>
                      <li>Une charte plus premium et plus coherente.</li>
                      <li>Des appels a l'action plus clairs sur tout le parcours.</li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              <motion.div {...reveal}>
                <BeforeAfter before={beforeImage} after={afterImage} />
              </motion.div>
            </div>
          </section>

          <section className="relative z-10 pb-20 md:pb-28">
            <div className={`${shellClassName} grid gap-10`}>
              <SectionHeading
                eyebrow="Choix de conception"
                title="Une refonte guidee par la clarte, la conversion et le mobile."
                body="Chaque famille d'ecrans a ete retravaillee pour raconter une offre dense plus simplement, sans perdre la richesse du produit ni le cadre technique existant."
              />

              <div className="grid gap-5 lg:grid-cols-2">
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
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <BrowserFrame
                      image={morphingBeforeImage}
                      alt="Structure initiale de la home"
                      label="Avant"
                      dark
                    />
                    <BrowserFrame
                      image={morphingAfterImage}
                      alt="Structure finale de la home"
                      label="Apres"
                      dark
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
                    <PhoneMockup
                      image={phoneMenuImage}
                      alt="Version mobile du site DiliTrust"
                    />
                  </div>
                </motion.article>
              </div>
            </div>
          </section>

          <section className="relative z-10 pb-20 md:pb-28">
            <div className={`${shellClassName} grid gap-10`}>
              <SectionHeading
                eyebrow="Livrables"
                title="Un systeme de pages qui se declinait du coeur de site aux supports de campagne."
                body="La refonte ne s'est pas arretee a la home. Le dispositif couvre les gabarits editoriaux, les modules administrables et des assets relies a la vie de marque."
              />

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <motion.article
                  {...reveal}
                  className={`${surfaceClassName} overflow-hidden p-5 md:p-6`}
                >
                  <BrowserFrame
                    image={newDilitrustImage}
                    alt="Version responsive finale du site DiliTrust"
                    label="Responsive release"
                    dark
                    contentClassName="p-2"
                  />
                  <div className="mt-5 grid gap-2 px-2 pb-1">
                    <h3
                      className="text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                      style={{ fontFamily: "var(--font-hero)" }}
                    >
                      Une base responsive solide pour les gabarits clefs.
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-neutral-600">
                      La nouvelle base visuelle installe la marque, clarifie les
                      contenus et cree une lecture plus premium sur les pages
                      les plus exposees.
                    </p>
                  </div>
                </motion.article>

                <div className="grid gap-6">
                  <motion.article
                    {...reveal}
                    className={`${surfaceClassName} overflow-hidden p-5 md:p-6`}
                  >
                    <BrowserFrame
                      image={landingAdminImage}
                      alt="Module de landing page administrable dans WordPress"
                      label="Admin module"
                      dark
                      contentClassName="p-2"
                    />
                    <div className="mt-5 px-2 pb-1">
                      <h3
                        className="text-2xl leading-tight tracking-[-0.03em] text-neutral-950"
                        style={{ fontFamily: "var(--font-hero)" }}
                      >
                        Des modules sur mesure pilotables depuis WordPress.
                      </h3>
                      <p className="mt-2 text-base leading-7 text-neutral-600">
                        Les campagnes et landing pages profitent de la meme
                        coherence graphique tout en restant simples a administrer.
                      </p>
                    </div>
                  </motion.article>

                  <div className="grid gap-6 md:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
                    <motion.article
                      {...reveal}
                      className={`${surfaceClassName} overflow-hidden p-6`}
                    >
                      <p className={eyebrowClassName}>Navigation mobile</p>
                      <div className="mt-5 flex items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#0b1220_0%,#11192b_100%)] p-5">
                        <PhoneMockup
                          image={phoneMenuImage}
                          alt="Menu mobile du site DiliTrust"
                        />
                      </div>
                    </motion.article>

                    <motion.article
                      {...reveal}
                      className={`${surfaceClassName} overflow-hidden p-5 md:p-6`}
                    >
                      <div className="overflow-hidden rounded-[26px] border border-black/8 bg-[linear-gradient(180deg,#f2ece3_0%,#ffffff_100%)] p-4">
                        <img
                          src={conferenceAssetsImage}
                          alt="Assets print et digitaux relies a la marque DiliTrust"
                          className="block w-full rounded-[18px]"
                        />
                      </div>
                      <div className="mt-5 px-2 pb-1">
                        <p className={eyebrowClassName}>Assets de marque</p>
                        <h3
                          className="mt-3 text-2xl leading-tight tracking-[-0.03em] text-neutral-950"
                          style={{ fontFamily: "var(--font-hero)" }}
                        >
                          Une direction qui se prolonge aussi hors du site.
                        </h3>
                        <p className="mt-2 text-base leading-7 text-neutral-600">
                          Le projet a aussi nourrit des assets print et digitaux,
                          pour garder une marque coherente sur les temps forts.
                        </p>
                      </div>
                    </motion.article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 pb-24 md:pb-32">
            <div
              className={`${shellClassName} grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start`}
            >
              <div className="grid gap-8">
                <SectionHeading
                  eyebrow="Resultats"
                  title="Une proposition complete, validee et ancree dans les contraintes reelles du projet."
                  body="Le prototype et l'integration repondent aux enjeux du brief: nouvelle identite, experience plus claire, meilleur confort mobile et performance technique maintenue."
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <motion.article
                      key={metric.label}
                      {...reveal}
                      className={`${surfaceClassName} p-6 md:p-7`}
                    >
                      <p className="text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-neutral-950">
                        {metric.value}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold leading-7 text-neutral-900">
                        {metric.label}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-neutral-600">
                        {metric.detail}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>

              <motion.article
                {...reveal}
                className={`${surfaceClassName} overflow-hidden p-5 md:p-6`}
              >
                <BrowserFrame
                  image={performanceCompareImage}
                  alt="Comparatif de performance du site DiliTrust"
                  label="Impact technique"
                  dark
                  contentClassName="p-2"
                />
                <div className="mt-5 grid gap-2 px-2 pb-1">
                  <p className={eyebrowClassName}>Validation</p>
                  <h3
                    className="text-3xl leading-tight tracking-[-0.03em] text-neutral-950"
                    style={{ fontFamily: "var(--font-hero)" }}
                  >
                    Le design a gagne en intensite sans perdre le cadre
                    technique.
                  </h3>
                  <p className="max-w-2xl text-base leading-8 text-neutral-600">
                    La page conserve les integrations critiques, le socle SEO et
                    la logique de conversion, tout en faisant nettement monter la
                    perception de qualite.
                  </p>
                </div>
              </motion.article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
