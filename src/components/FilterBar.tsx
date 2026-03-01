import { useEffect, useRef, useState } from "react";
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
  projectsCount: number;
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
  onSearchChange,
  projectsCount,
}: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const toggleValue = (
    currentValues: string[],
    value: string,
    onChange: (nextValues: string[]) => void
  ) => {
    if (currentValues.includes(value)) {
      onChange(currentValues.filter((item) => item !== value));
      return;
    }
    onChange([...currentValues, value]);
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

  return (
    <div className="detail-wrapper">
      <div className="filter-wrapper" ref={filterRef}>
        <div className="filter-top">
          <span className="projects-count">
            {projectsCount} projet{projectsCount > 1 ? "s" : ""}
          </span>
          {(activeSectors.length > 0 ||
            activeTypes.length > 0 ||
            activeTools.length > 0 ||
            activeTechs.length > 0 ||
            searchQuery.trim() !== "") && (
              <button
                type="button"
                className="clear-filters"
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

        <div className="search-row">
          <input
            type="text"
            className="search-input"
            placeholder="Rechercher un projet, client, techno..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>

        <div className="filter-bar">
          <button
            type="button"
            className={`filter-pill ${activeSectors.length === 0 &&
                activeTypes.length === 0 &&
                activeTools.length === 0 &&
                activeTechs.length === 0 &&
                searchQuery.trim() === ""
                ? "active"
                : ""
              }`}
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

          <div
            className="dropdown"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={`dropdown-trigger ${activeSectors.length > 0 ? "active" : ""}`}
              onClick={() => toggle("sector")}
              aria-expanded={open === "sector"}
            >
              <span className="trigger-label">
                Secteur {activeSectors.length > 0 ? `(${activeSectors.length})` : ""}
              </span>
              <span className="trigger-caret">{open === "sector" ? "▴" : "▾"}</span>
            </button>

            {open === "sector" && (
              <div className="menu">
                {sectors.map((sector) => (
                  <div
                    key={sector}
                    className={`menu-item ${activeSectors.includes(sector) ? "selected" : ""}`}
                    onClick={() => {
                      toggleValue(activeSectors, sector, onSectorChange);
                    }}
                  >
                    <span className="check">{activeSectors.includes(sector) ? "x" : ""}</span>
                    <span className="menu-label">{sector}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={`dropdown-trigger ${activeTypes.length > 0 ? "active" : ""}`}
              onClick={() => toggle("type")}
              aria-expanded={open === "type"}
            >
              <span className="trigger-label">
                Type {activeTypes.length > 0 ? `(${activeTypes.length})` : ""}
              </span>
              <span className="trigger-caret">{open === "type" ? "▴" : "▾"}</span>
            </button>

            {open === "type" && (
              <div className="menu">
                {types.map((type) => (
                  <div
                    key={type}
                    className={`menu-item ${activeTypes.includes(type) ? "selected" : ""}`}
                    onClick={() => {
                      toggleValue(activeTypes, type, onTypeChange);
                    }}
                  >
                    <span className="check">{activeTypes.includes(type) ? "x" : ""}</span>
                    <span className="menu-label">{type}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={`dropdown-trigger ${activeTools.length > 0 ? "active" : ""}`}
              onClick={() => toggle("tool")}
              aria-expanded={open === "tool"}
            >
              <span className="trigger-label">
                Outils {activeTools.length > 0 ? `(${activeTools.length})` : ""}
              </span>
              <span className="trigger-caret">{open === "tool" ? "▴" : "▾"}</span>
            </button>
            {open === "tool" && (
              <div className="menu scroll">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className={`menu-item ${activeTools.includes(tool) ? "selected" : ""}`}
                    onClick={() => {
                      toggleValue(activeTools, tool, onToolChange);
                    }}
                  >
                    <span className="check">{activeTools.includes(tool) ? "x" : ""}</span>
                    <span className="menu-label">{tool}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={clearCloseTimeout}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={`dropdown-trigger ${activeTechs.length > 0 ? "active" : ""}`}
              onClick={() => toggle("tech")}
              aria-expanded={open === "tech"}
            >
              <span className="trigger-label">
                Tech {activeTechs.length > 0 ? `(${activeTechs.length})` : ""}
              </span>
              <span className="trigger-caret">{open === "tech" ? "▴" : "▾"}</span>
            </button>

            {open === "tech" && (
              <div className="menu scroll">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className={`menu-item ${activeTechs.includes(tech) ? "selected" : ""}`}
                    onClick={() => {
                      toggleValue(activeTechs, tech, onTechChange);
                    }}
                  >
                    <span className="check">{activeTechs.includes(tech) ? "x" : ""}</span>
                    <span className="menu-label">{tech}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
