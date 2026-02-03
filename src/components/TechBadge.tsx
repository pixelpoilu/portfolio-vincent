type Props = {
  label: string;
};

export default function TechBadge({ label }: Props) {
  return (
    <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
      {label}
    </span>
  );
}
