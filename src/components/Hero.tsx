import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/images/hero/portrait-bw-tel.png";
import portraitMD from "../assets/images/hero/portrait-bw-md.png";
import portraitHD from "../assets/images/hero/portrait-bw.png";
import { getDedicatedCaseStudyPathByProjectId } from "../config/dedicatedCaseStudies";
import Footer from "./Footer";
import Logo from "./Logo";
import Loader from "./Loader";

const heroRoles = [
  "WEBMASTER FRONT UX/UI",
  "VISUAL PRODUCT DESIGNER",
  "DESIGNER D'INTERFACES",
];

const dilitrustCaseStudyPath =
  getDedicatedCaseStudyPathByProjectId(180) ?? "/etudes-de-cas";
const docbikerCaseStudyPath =
  getDedicatedCaseStudyPathByProjectId(64) ?? "/etudes-de-cas";



export default function Hero() {
  const [isPortraitLoaded, setIsPortraitLoaded] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);


  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="sm:relative h-[calc(100vh+200px)] overflow-hidden sm:h-auto" style={{ background: "#f0eeed" }}>
      <div className="hidden md:block z-9999 absolute translate-x-1/15 -translate-y-1/15 top-1/15 left-1/15
     
      ">
        <Logo className="
        size-min lg:size-max xl:size-max
        md:w-[120%] lg:w-[125%] xl:w-[130%]
        2xl:w-[150%]
        fill-[var(--mycolor-black)] opacity-70 lg:opacity-50 xl:opacity-40 2xl:opacity-30" />
      </div>
      <section className="
       mx-auto items-center col-span-full grid grid-cols-1 w-full 
       sm:max-w-fit sm:py-6 sm:px-6 
       md:grid-template-columns[1fr 1fr] md:h-[calc(100vh-83px)] md:flex-1 md:max-w-fit md:gap[2rem] md:grid-cols-2
       lg:m-0 lg:p-0 lg:max-w-none lg:w-screen lg:grid lg:gap[2rem] 
      ">
        <div className="h-[calc(60vh-180px)] py-4 px-4 overflow-hidden order-2 
        sm:order-2 sm:max-w-[620px] sm:mx-auto 
        md:h-auto md:py-0 md:px-4 md:m-y-5
        lg:order-2 lg:w-[calc(50vw)] lg:max-w-[520px] lg:ml-auto  lg:mr-0 lg:float-right lg:overflow-hidden 
        ">
          <h1
            className="text-center text-[clamp(2.1rem,11vw,4rem)] leading-[0.95] tracking-[-0.02em] text-[var(--text)] 
            md:text-left md:text-[clamp(2.1rem,11vw,4rem)]
            lg:text-[64px] lg:tracking-[-1px]"
            style={{ fontFamily: "var(--font-hero)", fontWeight: 500 }}
          >
            Vincent Lepr&ecirc;tre
          </h1>
          <span
            className="py-2 my-0  block min-h-[1.2rem] overflow-hidden text-[0.75rem] leading-[1.2] tracking-[0.18em] text-[#6d7b8a] 
            md:inline lg:mt-5 lg:text-[14px] lg:tracking-[4px]  md:pt-5"
            aria-live="polite"
          >
            { /*py-0 my-0  relative block min-h-[1.2rem] w-auto md:w-full md:relative*/
              /* w-[200px] left-0 right-0 md:right-auto top-0 block whitespace-nowrap absolute md:top-0 md:left-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 */
            }
            <span className="relative block min-h-[1.2rem] w-full">
              <AnimatePresence initial={false} mode="sync">
                <motion.span
                  key={heroRoles[activeRoleIndex]}
                  className="absolute block left-1/2 whitespace-nowrap mb-3 mt-2 transform -translate-x-1/2  -translate-y-1/2 md:translate-x-1  md:translate-y-1  md:left-0 md:top-0 md:mb-3 md:mt-2"
                  initial={{ clipPath: "inset(0 100% 0 0)", x: -18 }}
                  animate={{ clipPath: "inset(0 0 0 0)", x: 0 }}
                  exit={{ clipPath: "inset(0 0 0 100%)", x: 18 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "clip-path, transform" }}
                >
                  {heroRoles[activeRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
          <div className="mb-2 h-px w-auto lg:w-16 bg-[#222] lg:my-[30px] 
          md:w-20 md:mt-6 md:mb-4 md:h-px " />
          <div id="homeLinks" className="text-center text-base leading-[1.55] text-[#555] md:text-left lg:max-w-[420px] lg:text-lg lg:leading-[1.7]">
            <p className="block sm:hidden">
              Product Designer orienté UI, je conçois des interfaces claires,
              cohérentes et performantes.
            </p>
            <p className="hidden sm:block">
              Product Designer orienté UI, je conçois des interfaces claires, cohérentes et performantes, où vision, usage et exécution avancent ensemble.
            </p>
            <div className="mt-4 flex flex-wrap gap-[0.62rem] justify-end md:justify-start ">
              <Link
                to={dilitrustCaseStudyPath}
                className="inline-flex items-center rounded-full border bg-white border-black/15 px-3 py-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#222] transition duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white"
                style={{ fontFamily: "var(--font-btn)" }}
              >
                DiliTrust
              </Link>
              <Link
                to={docbikerCaseStudyPath}
                className="inline-flex items-center rounded-full border bg-white border-black/15 px-3 py-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#222] transition duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white"
                style={{ fontFamily: "var(--font-btn)" }}
              >
                DOC-BIKER
              </Link>
              <Link
                to="/etudes-de-cas/site-internet-locaboat"
                className="inline-flex items-center rounded-full border bg-white border-black/15 px-3 py-1.5 text-[0.74rem] uppercase tracking-[0.08em] text-[#222] transition duration-300 hover:border-[#222] hover:bg-[#222] hover:text-white"
                style={{ fontFamily: "var(--font-btn)" }}
              >
                LOCABOAT
              </Link>
            </div>
          </div>
          <div className="mt-5 flex flex-col grid grid-cols-2 gap-3 sm:flex-row sm:flex-wrap lg:mt-10 lg:gap-5">
            <a
              href="/cv.pdf"
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
              className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center bg-[rgba(8,12,18,0.22)]"
              aria-hidden="true"
            >
              <Loader />
            </div>
          )}
          <img
            src={portrait}
            alt="Vincent Lepretre"
            className={`h-auto w-full max-w-[620px] object-contain transition-opacity duration-300 max-[900px]:max-h-[56svh]
             md:hidden
              }`}
            onLoad={() => setIsPortraitLoaded(true)}
            onError={() => setIsPortraitLoaded(true)}
          />
          <img
            src={portraitMD}
            alt="Vincent Lepretre"
            className={`hidden 
              transition-opacity duration-300 max-[900px]:max-h-[56svh] 
              md:block xl:hidden h-auto w-full max-w-[50vw] object-contain lg:max-h-[640px]
              ${isPortraitLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setIsPortraitLoaded(true)}
            onError={() => setIsPortraitLoaded(true)}
          />
          <img
            src={portraitHD}
            alt="Vincent Lepretre"
            className={`hidden 
              transition-opacity duration-300 max-[900px]:max-h-[56svh] 
              md:hidden xl:block h-auto w-full max-w-[50vw] object-contain lg:max-h-[640px]
              ${isPortraitLoaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setIsPortraitLoaded(true)}
            onError={() => setIsPortraitLoaded(true)}
          />

        </div>

      </section>
      <Footer className=" relative flex h-[calc(83px)] !mt-0 md:!mt-0" />
    </main>
  );
}
