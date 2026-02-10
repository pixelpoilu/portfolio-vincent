interface TypeFilterProps {
  types: string[];
  activeType: string | null;
  onChange: (type: string | null) => void;
}

export default function TypeFilter({
  types,
  activeType,
  onChange,
}: TypeFilterProps) {
  return (
    <div className="filter-bar">
      <button
        className={!activeType ? "active" : ""}
        onClick={() => onChange(null)}
      >
        Tous les types
      </button>

      {types.map((type) => (
        <button
          key={type}
          className={activeType === type ? "active" : ""}
          onClick={() => onChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
