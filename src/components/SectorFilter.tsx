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