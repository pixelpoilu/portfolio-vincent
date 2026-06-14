import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/images/hero/portrait-bw-tel.webp";
import portraitMD from "../assets/images/hero/portrait-bw-md.webp";
import portraitHD from "../assets/images/hero/portrait-bw.webp";
import Logo from "./Logo";

const DeferredFooter = lazy(() => import("./Footer"));

const heroRoles = [
  "WEBMASTER FRONT UX/UI",
  "VISUAL PRODUCT DESIGNER",
  "DESIGNER D'INTERFACES",
];

const dilitrustCaseStudyPath = "/etudes-de-cas/refonte-du-site-web-dilitrust";
const docbikerCaseStudyPath = "/etudes-de-cas/site-internet-doc-biker";

export default function Hero() {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [shouldRenderFooter, setShouldRenderFooter] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const renderFooter = () => setShouldRenderFooter(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(renderFooter, { timeout: 1600 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(renderFooter, 800);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return (
    <main
      className="sm:relative h-[calc(100vh+200px)] overflow-hidden sm:h-auto"
      style={{ background: "#f0eeed" }}
    >
      <div className="hidden md:block z-9999 absolute translate-x-1/15 -translate-y-1/15 top-1/15 left-1/15">
        <Logo className="
        size-min lg:size-max xl:size-max
        md:w-[120%] lg:w-[125%] xl:w-[130%]
        2xl:w-[150%]
        fill-(--mycolor-black) opacity-70 lg:opacity-50 xl:opacity-40 2xl:opacity-30" />
      </div>
      <section className=" 
       mx-auto items-center col-span-full grid grid-cols-1 w-full 
       sm:max-w-fit sm:py-6 sm:px-6 
       md:grid-template-columns[1fr 1fr] md:h-[calc(100vh-83px)] md:flex-1 md:max-w-fit md:gap[2rem] md:grid-cols-2
       lg:m-0 lg:p-0 lg:max-w-none lg:w-screen lg:grid lg:gap[2rem] 
      ">
        <div className=" h-[calc(60vh-180px)] py-4 px-4 overflow-hidden order-2 
        sm:order-2 sm:max-w-155 sm:mx-auto 
        md:h-auto md:py-0 md:px-4 md:m-y-5
        lg:order-2 lg:w-[calc(50vw)] lg:max-w-130 lg:ml-auto  lg:mr-0 lg:float-right lg:overflow-hidden 
        max-[380px]:overflow-visible 
        ">
          <h1
            className="text-center text-[clamp(2.1rem,11vw,4rem)] leading-[0.95] tracking-[-0.02em] text-(--text) 
            md:text-left md:text-[clamp(2.1rem,11vw,4rem)]
            lg:text-[64px] lg:tracking-[-1px] "
            style={{ fontFamily: "var(--font-hero)", fontWeight: 500 }}
          >
            Vincent Lepr&ecirc;tre
          </h1>
          <span
            className="py-2 my-0  block min-h-[1.2rem] overflow-hidden text-[0.75rem] leading-[1.2] tracking-[0.18em] text-[#6d7b8a] 
            md:inline lg:mt-5 lg:text-[14px] lg:tracking-[4px]  md:pt-5"
            aria-live="polite"
          >
            <span className="relative block min-h-[1.2rem] w-full">
              <span
                key={heroRoles[activeRoleIndex]}
                className="hero-role-reveal absolute block left-1/2 whitespace-nowrap mb-3 mt-2 transform -translate-x-1/2  -translate-y-1/2 md:translate-x-1  md:translate-y-1  md:left-0 md:top-0 md:mb-3 md:mt-2"
              >
                {heroRoles[activeRoleIndex]}
              </span>
            </span>
          </span>
          <div className="mb-2 h-px w-auto lg:w-16 bg-[#222] lg:my-7.5 
          md:w-20 md:mt-6 md:mb-4 md:h-px " />
          <div id="homeLinks" className="text-center text-base leading-[1.55] text-[#555] md:text-left lg:max-w-105 lg:text-lg lg:leading-[1.7]">
            <p className="block sm:hidden">
              Product Designer orienté UI, je conçois des interfaces claires,
              cohérentes et performantes.
            </p>
            <p className="hidden sm:block">
              Product Designer orienté UI, je conçois des interfaces claires, cohérentes et performantes, où vision, usage et exécution avancent ensemble.
            </p>
            <div className="mt-4 flex flex-wrap gap-[0.62rem] justify-end md:justify-start  max-[380px]:gap-0.75 max-[380px]:m-0 max-[380px]:justify-center ">
              <Link
                to={dilitrustCaseStudyPath}
                className="inline-flex items-center rounded-full border bg-white border-black/15 px-3 py-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#222] transition duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white max-[380px]:px-2 "
                style={{ fontFamily: "var(--font-btn)" }}
              >
                DiliTrust
              </Link>
              <Link
                to={docbikerCaseStudyPath}
                className="inline-flex items-center rounded-full border bg-white border-black/15 px-3 py-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#222] transition duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white max-[380px]:px-2 "
                style={{ fontFamily: "var(--font-btn)" }}
              >
                DOC-BIKER
              </Link>
              <Link
                to="/etudes-de-cas/site-internet-locaboat"
                className="inline-flex items-center rounded-full border bg-white border-black/15 px-3 py-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#222] transition duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white max-[380px]:px-2 "
                style={{ fontFamily: "var(--font-btn)" }}
              >
                LOCABOAT
              </Link>
            </div>
          </div>
          <div className=" mt-5 grid grid-cols-2 gap-3 sm:flex-row sm:flex-wrap lg:mt-10 lg:gap-5 max-[380px]:grid-cols-1 max-[380px]:overflow-visible">
            <Link
              to="/contact?sendCv=1"
              className="btn-flipB w-full sm:w-auto"
              data-back="Telecharger mon CV"
              data-front="Telecharger mon CV"
            />
            <a
              href="/portfolio"
              className="btn-flip w-full sm:w-auto"
              data-back="Voir mes projets"
              data-front="Voir mes projets"
            />
          </div>
        </div>
        <div className="h-[calc(40vh-19px)] overflow-hidden 
        sm:h-[calc(45vh)] 
          md:order-2 md:h-auto md:overflow-visible
        lg:h-[calc(60vh-180px)] lg:max-w-fit
          relative order-1 flex items-center justify-center pt-2 lg:order-2 lg:pt-0">
          {!isPortraitLoaded && (
            <div
              className="pointer-events-none absolute inset-0 z-3 bg-[rgba(8,12,18,0.08)]"
              aria-hidden="true"
            />
          )}
          <picture>
            <source media="(min-width: 1280px)" srcSet={portraitHD} />
            <source media="(min-width: 768px)" srcSet={portraitMD} />
            <img
              src={portrait}
              alt="Vincent Lepretre"
              className={`h-auto w-full max-w-155 object-contain transition-opacity duration-300 max-[900px]:max-h-[56svh] md:max-w-[50vw] lg:max-h-160 max-[380px]:overflow-visible ${isPortraitLoaded ? "opacity-100" : "opacity-0"
                }`}
              loading="eager"
              decoding="async"
              {...({ fetchpriority: "high" } as { fetchpriority: "high" })}
              onLoad={() => setIsPortraitLoaded(true)}
              onError={() => setIsPortraitLoaded(true)}
            />
          </picture>
        </div>
      </section>
      {shouldRenderFooter ? (
        <Suspense fallback={<div className="h-[83px] max-[380px]:hidden" />}>
          <DeferredFooter className=" relative flex h-[calc(83px)] mt-0! md:mt-0! max-[380px]:hidden" />
        </Suspense>
      ) : (
        <div className="h-[83px] max-[380px]:hidden" aria-hidden="true" />
      )}
    </main>
  );
}
