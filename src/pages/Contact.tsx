import {
    motion,
    useScroll,
    useSpring,
    useTransform
} from "framer-motion";
import { type ComponentType } from "react";
import { type FormEvent, useState } from "react";

import grainTexture from "../assets/images/textures/grain.png";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const shellClassName = "mx-auto w-full max-w-[1200px] px-6 sm:px-6 md:px-8";
const eyebrowClassName =
    "text-[0.79rem] uppercase tracking-[0.32em] text-neutral-500";
const surfaceClassName =
    "rounded-[28px] border border-black/8 bg-white/82 shadow-[0_20px_50px_rgba(18,22,29,0.08)] backdrop-blur-md";
const inputClassName =
    "w-full border-0 border-b border-black/12 bg-transparent px-0 py-4 text-base text-neutral-900 transition placeholder:text-neutral-400 focus:border-black/60 focus:outline-none";

const heroFirstReveal = {
    initial: { opacity: 0, filter: "blur(10px) grayscale(100%)" },
    animate: { opacity: 1, filter: "blur(0px) grayscale(0%)" },
    transition: { duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] as const },
};

const heroSecondReveal = {
    initial: { opacity: 0, filter: "blur(10px) grayscale(100%)" },
    animate: { opacity: 1, filter: "blur(0px) grayscale(0%)" },
    transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const },
};

const highlightPills = [
    "Refonte",
    "UX / UI",
    "React",
    "Mobile first",
];

import { BsArrowRightShort } from "react-icons/bs";
const ArrowRightShort = BsArrowRightShort as unknown as ComponentType<{ className?: string }>;

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const [submitState, setSubmitState] = useState<SubmitState>("idle");
    const { scrollYProgress } = useScroll();

    const grainOpacity = useSpring(
        useTransform(scrollYProgress, [0, 0.21], [0, 0.11]),
        {
            stiffness: 120,
            damping: 28,
            mass: 0.24,
        },
    );

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        setSubmitState("submitting");

        try {
            const response = await fetch("https://formspree.io/f/maqddkrq", {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                setSubmitState("error");
                return;
            }

            setSubmitState("success");
            form.reset();
        } catch {
            setSubmitState("error");
        }
    }

    const statusMessage =
        submitState === "success"
            ? "Message envoyé. Je vous réponds au plus vite."
            : submitState === "error"
                ? "L'envoi a échoué. Vous pouvez réessayer dans un instant."
                : null;

    return (
        <PageTransition>
            <>
                <main
                    className="relative isolate overflow-hidden text-neutral-950"
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


                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[-9rem] top-20 h-64 w-64 rounded-full bg-white/70 blur-3xl sm:h-80 sm:w-80"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-10 right-[-8rem] h-72 w-72 rounded-full bg-stone-300/45 blur-3xl sm:h-96 sm:w-96"
                    />

                    <div
                        className={`${shellClassName} relative z-10 grid items-start gap-10 pt-24 pb-16 sm:gap-12 sm:pt-28 sm:pb-20 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16`}
                    >
                        <motion.div {...heroFirstReveal} className="grid gap-8">
                            <div className="grid gap-5">
                                <p className={eyebrowClassName}>Contact</p>
                                <h1
                                    className="text-[clamp(3.2rem,10vw,6.6rem)] leading-[0.88] tracking-[-0.05em] text-neutral-950"
                                    style={{ fontFamily: "var(--font-hero)" }}
                                >
                                    Parlons de votre prochain projet.
                                </h1>
                                <p className="max-w-xl text-[clamp(1.08rem,2.5vw,1.6rem)] leading-[1.5] tracking-[-0.03em] text-neutral-700">
                                    Disponible pour les projets digitaux exigeants.
                                </p>
                            </div>

                            <div className="h-px w-24 bg-black/10" />

                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                                {highlightPills.map((pill) => (
                                    <span
                                        key={pill}
                                        className="inline-flex items-center gap-3"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                                        {pill}
                                    </span>
                                ))}
                            </div>



                        </motion.div>

                        <motion.div
                            {...heroSecondReveal}
                            className={`${surfaceClassName} p-6 sm:p-8 md:p-10`}
                        >
                            <div className="grid gap-6">
                                <div className="grid gap-3">
                                    <p className={eyebrowClassName}>FORMULAIRE DE CONTACT</p>
                                    <h2
                                        className="text-3xl leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl"
                                        style={{ fontFamily: "var(--font-hero)" }}
                                    >
                                        Décrivez le contexte, je reviens vers vous
                                        rapidement.
                                    </h2>
                                    <p className="max-w-2xl text-base leading-8 text-neutral-600">
                                        Quelques lignes suffisent: objectif, périmètre,
                                        échéance et contraintes éventuelles.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="grid gap-6">
                                    <label className="grid gap-3">
                                        <input
                                            className={inputClassName}
                                            type="text"
                                            name="name"
                                            placeholder="Nom complet"
                                            autoComplete="name"
                                            required
                                        />
                                    </label>

                                    <label className="grid gap-3">
                                        <input
                                            className={inputClassName}
                                            type="email"
                                            name="email"
                                            placeholder="votre email@exemple.com"
                                            autoComplete="email"
                                            required
                                        />
                                    </label>

                                    <label className="grid gap-3">
                                        <input
                                            className={inputClassName}
                                            type="text"
                                            name="subject"
                                            placeholder="Le sujet de votre message..."
                                            required
                                        />
                                    </label>

                                    <label className="grid gap-3">
                                        <textarea
                                            className={`${inputClassName} min-h-[148px] resize-y`}
                                            name="message"
                                            placeholder="Votre message..."
                                            rows={6}
                                            required
                                        />
                                    </label>

                                    <div className="flex flex-row gap-4 pt-2 flex-row-reverse">
                                        <button
                                            type="submit"
                                            disabled={submitState === "submitting"}
                                            className="inline-flex w-full items-center justify-between gap-4 rounded-full bg-neutral-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                                        >

                                            <span>
                                                <ArrowRightShort className="inline object-cover  text-2xl" />
                                                {submitState === "submitting"
                                                    ? "Envoi..."
                                                    : "Envoyer"}
                                            </span>

                                        </button>

                                        {statusMessage ? (
                                            <p
                                                aria-live="polite"
                                                className={`text-sm leading-6 ${submitState === "success"
                                                    ? "text-emerald-700"
                                                    : "text-rose-600"
                                                    }`}
                                            >
                                                {statusMessage}
                                            </p>
                                        ) : null}
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </main>

                <div className="site-page">
                    <Footer />
                </div>
            </>
        </PageTransition>
    );
}
