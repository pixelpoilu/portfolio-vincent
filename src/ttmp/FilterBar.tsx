interface Props {
  selectedType: string;
  onSelectType: (type: string) => void;
}

const projectTypes = [
  { label: "Tous", value: "all" },
  { label: "Site", value: "site" },
  { label: "Plateforme", value: "plateforme" },
  { label: "CMS", value: "cms" },
  { label: "E-commerce", value: "ecommerce" },
];

export default function FilterBar({
  selectedType,
  onSelectType,
}: Props) {
  return (
    <div className="filter-bar">
      {projectTypes.map((type) => (
        <button
          key={type.value}
          onClick={() => onSelectType(type.value)}
          className={
            selectedType === type.value ? "active" : ""
          }
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
