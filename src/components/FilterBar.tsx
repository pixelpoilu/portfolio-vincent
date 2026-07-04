import { type ComponentType, useEffect, useRef, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine, RiCloseLine } from "react-icons/ri";

const ArrowDownIcon = RiArrowDownSLine as unknown as ComponentType<{ className?: string }>;
const ArrowUpIcon = RiArrowUpSLine as unknown as ComponentType<{ className?: string }>;
const CloseIcon = RiCloseLine as unknown as ComponentType<{ className?: string }>;

const shellClassName =
  "mx-auto w-full max-w-[1450px] px-5 sm:px-8";
/*  
const stickyPanelClassName =
  "sticky z-[900] top-[72px] w-full border-y border-slate-200/80  py-2  max-[640px]:top-[72px] bg-[#f0efeb]/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.08)]";
*/
const stickyPanelClassName =
  "sticky z-[900] top-[72px] w-full border-y border-slate-200/80 bg-[#f0efeb]/95 py-2 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] max-[640px]:top-[72px]";


const controlBaseClassName =
  "inline-flex min-h-11 w-full items-center justify-between gap-3 border border-slate-300 bg-white px-3 py-2 text-[14px] font-medium leading-none text-slate-700 transition duration-200 hover:border-slate-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:px-4";
const controlActiveClassName =
  "border-slate-500 bg-stone-200 pr-16 text-stone-700 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.15)] sm:pr-18";
const menuClassName =
  "absolute left-0 top-full z-20 mt-2 min-w-[180px] max-w-[88vw] border border-slate-200 bg-white p-1.5 shadow-[0_20px_40px_rgba(15,23,42,0.16)] sm:min-w-[220px] sm:max-w-[360px]";
const menuItemClassName =
  "block w-full rounded-lg px-2.5 py-2 text-left text-sm leading-tight text-slate-800 transition hover:bg-slate-50";

interface Props {
  sectors: string[];
  types: string[];
  tools: string[];
  technologies: string[];
  activeSectors: string[];
  activeTypes: string[];
  activeTools: string[];
  activeTechs: string[];
  searchQuery: string;
  onSectorChange: (value: string[]) => void;
  onTypeChange: (value: string[]) => void;
  onToolChange: (value: string[]) => void;
  onTechChange: (value: string[]) => void;
  onSearchChange: (value: string) => void;
}

export default function FilterBar({
  sectors,
  types,
  tools,
  technologies,
  activeSectors,
  activeTypes,
  activeTools,
  activeTechs,
  searchQuery,
  onSectorChange,
  onTypeChange,
  onToolChange,
  onTechChange,
  onSearchChange
}: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasActiveFilters =
    activeSectors.length > 0 ||
    activeTypes.length > 0 ||
    activeTools.length > 0 ||
    activeTechs.length > 0 ||
    searchQuery.trim() !== "";

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(null);
      closeTimeoutRef.current = null;
    }, 2000);
  };

  const toggle = (name: string) => {
    clearCloseTimeout();
    setOpen((current) => (current === name ? null : name));
  };

  const selectValue = (
    value: string,
    onChange: (nextValues: string[]) => void
  ) => {
    clearCloseTimeout();
    onChange([value]);
    setOpen(null);
  };

  const clearSelection = (onChange: (nextValues: string[]) => void) => {
    clearCloseTimeout();
    onChange([]);
    setOpen(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!filterRef.current?.contains(event.target as Node)) {
        clearCloseTimeout();
        setOpen(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => () => clearCloseTimeout(), []);

  const getTriggerClassName = (isActive: boolean) =>
    `${controlBaseClassName} ${isActive ? controlActiveClassName : ""}`.trim();

  const getTriggerLabel = (defaultLabel: string, activeValues: string[]) =>
    activeValues.length > 0 ? activeValues.join(", ") : defaultLabel;

  const triggerLabelClassName =
    "min-w-0 flex-1 truncate text-left leading-tight";

  const clearButtonClassName =
    "absolute right-8 top-1/2 z-10 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-lg text-slate-500 transition hover:bg-white/70 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:right-9";

  return (
    <div className={stickyPanelClassName}>
      <div className={`${shellClassName} py-1`} ref={filterRef}>
        <div className="mb-2.5 flex items-stretch gap-2">
          <div className="relative min-w-0 flex-1">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16.5 16.5 4 4" />
            </svg>
            <input
              type="text"
              className="min-h-13 w-full border border-slate-300 bg-white pl-13 pr-4 text-sm text-slate-800 transition duration-200 placeholder:text-slate-400 focus:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300/20"
              placeholder="Rechercher un projet, client, techno..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              className="shrink-0 border border-slate-300 bg-white px-3.5 text-xs font-medium text-slate-700 transition duration-200 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:px-5"
              onClick={() => {
                onSectorChange([]);
                onTypeChange([]);
                onToolChange([]);
                onTechChange([]);
                onSearchChange("");
                setOpen(null);
              }}
            >
              Effacer
            </button>
          )}
        </div>

        <div className="mx-auto grid w-full grid-cols-2 items-center gap-2 lg:flex lg:flex-nowrap lg:gap-3">

          <span className="hidden lg:inline lg:shrink-0 lg:whitespace-nowrap">J'ai réalisé des</span>
          {/*Types Filter*/}

          <div
            className="relative min-w-0 lg:flex-1"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={getTriggerClassName(activeTypes.length > 0)}
              onClick={() => toggle("type")}
              aria-expanded={open === "type"}
            >
              <span className={triggerLabelClassName}>
                {getTriggerLabel("Types", activeTypes)}
              </span>
              <span className="inline-flex text-[19px] leading-none opacity-75">
                {open === "type" ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </button>

            {activeTypes.length > 0 && (
              <button type="button" className={clearButtonClassName} onClick={() => clearSelection(onTypeChange)} aria-label={`Effacer le filtre type ${activeTypes[0]}`}>
                <CloseIcon />
              </button>
            )}

            {open === "type" && (
              <div className={menuClassName}>
                {types.map((type) => (
                  <button
                    type="button"
                    key={type}
                    className={`${menuItemClassName} ${activeTypes.includes(type)
                      ? "bg-stone-200 text-stone-700"
                      : ""
                      }`.trim()}
                    onClick={() => {
                      selectValue(type, onTypeChange);
                    }}
                  >
                    <span className="wrap-break-word">{type}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {/*Secteur Filter*/}
          <span className="hidden lg:inline lg:shrink-0 lg:whitespace-nowrap">pour le secteur</span>
          <div
            className="relative min-w-0 lg:flex-1"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={getTriggerClassName(activeSectors.length > 0)}
              onClick={() => toggle("sector")}
              aria-expanded={open === "sector"}
            >
              <span className={triggerLabelClassName}>
                {getTriggerLabel("Secteurs", activeSectors)}
              </span>
              <span className="inline-flex text-[19px] leading-none opacity-75">
                {open === "sector" ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </button>

            {activeSectors.length > 0 && (
              <button type="button" className={clearButtonClassName} onClick={() => clearSelection(onSectorChange)} aria-label={`Effacer le filtre secteur ${activeSectors[0]}`}>
                <CloseIcon />
              </button>
            )}

            {open === "sector" && (
              <div className={`${menuClassName} max-lg:left-auto max-lg:right-0`}>
                {sectors.map((sector) => (
                  <button
                    type="button"
                    key={sector}
                    className={`${menuItemClassName} ${activeSectors.includes(sector)
                      ? "bg-stone-200 text-stone-700"
                      : ""
                      }`.trim()}
                    onClick={() => {
                      selectValue(sector, onSectorChange);
                    }}
                  >
                    <span className="wrap-break-word">{sector}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {/*Tools Filter*/}
          <span className="hidden lg:inline lg:shrink-0 lg:whitespace-nowrap">avec </span>

          <div
            className="relative min-w-0 lg:flex-1"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={getTriggerClassName(activeTools.length > 0)}
              onClick={() => toggle("tool")}
              aria-expanded={open === "tool"}
            >
              <span className={triggerLabelClassName}>
                {getTriggerLabel("Outils", activeTools)}
              </span>
              <span className="inline-flex text-[19px] leading-none opacity-75">
                {open === "tool" ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </button>
            {activeTools.length > 0 && (
              <button type="button" className={clearButtonClassName} onClick={() => clearSelection(onToolChange)} aria-label={`Effacer le filtre outil ${activeTools[0]}`}>
                <CloseIcon />
              </button>
            )}
            {open === "tool" && (
              <div className={`${menuClassName} max-h-65 overflow-y-auto`}>
                {tools.map((tool) => (
                  <button
                    type="button"
                    key={tool}
                    className={`${menuItemClassName} ${activeTools.includes(tool)
                      ? "bg-stone-200 text-stone-700"
                      : ""
                      }`.trim()}
                    onClick={() => {
                      selectValue(tool, onToolChange);
                    }}
                  >
                    <span className="wrap-break-word">{tool}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/*Technologies Filter*/}

          <span className="hidden lg:inline lg:shrink-0 lg:whitespace-nowrap">en utilisant </span>
          <div
            className="relative min-w-0 lg:flex-1"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={getTriggerClassName(activeTechs.length > 0)}
              onClick={() => toggle("tech")}
              aria-expanded={open === "tech"}
            >
              <span className={triggerLabelClassName}>
                {getTriggerLabel("Technologies", activeTechs)}
              </span>
              <span className="inline-flex text-[19px] leading-none opacity-75">
                {open === "tech" ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </span>
            </button>

            {activeTechs.length > 0 && (
              <button type="button" className={clearButtonClassName} onClick={() => clearSelection(onTechChange)} aria-label={`Effacer le filtre technologie ${activeTechs[0]}`}>
                <CloseIcon />
              </button>
            )}

            {open === "tech" && (
              <div className={`${menuClassName} max-h-65 overflow-y-auto max-lg:left-auto max-lg:right-0`}>
                {technologies.map((tech) => (
                  <button
                    type="button"
                    key={tech}
                    className={`${menuItemClassName} ${activeTechs.includes(tech)
                      ? "bg-stone-200 text-stone-700"
                      : ""
                      }`.trim()}
                    onClick={() => {
                      selectValue(tech, onTechChange);
                    }}
                  >
                    <span className="wrap-break-word">{tech}</span>
                  </button>
                ))}



              </div>
            )}
          </div>

          {/*Tous*/}
          <button
            type="button"
            className={`${getTriggerClassName(
              activeSectors.length === 0 &&
              activeTypes.length === 0 &&
              activeTools.length === 0 &&
              activeTechs.length === 0 &&
              searchQuery.trim() === ""
            )} col-span-2 lg:w-auto lg:shrink-0`}
            onClick={() => {
              onSectorChange([]);
              onTypeChange([]);
              onToolChange([]);
              onTechChange([]);
              onSearchChange("");
              setOpen(null);
            }}
          >
            Tous
          </button>

        </div>
      </div>
    </div>
  );
}
