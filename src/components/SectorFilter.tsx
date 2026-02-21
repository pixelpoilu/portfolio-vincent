interface SectorFilterProps {
  sectors: string[];
  activeSector: string | null;
  onChange: (sector: string | null) => void;
}

export default function SectorFilter({
  sectors,
  activeSector,
  onChange,
}: SectorFilterProps) {
  return (
    <div className="sector-filter filter-bar">
      <button
        className={activeSector === null ? "active" : ""}
        onClick={() => onChange(null)}
      >
        Tous les secteurs
      </button>
      {sectors.map((sector) => (
        <button
          key={sector}
          className={activeSector === sector ? "active" : ""}
          onClick={() =>
            onChange(activeSector === sector ? null : sector)
          }
        >
          {sector}
        </button>
      ))}
    </div>
  );
}
