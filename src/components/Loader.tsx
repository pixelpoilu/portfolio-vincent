export default function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-[60px] w-[60px]">
        <circle
          cx="50"
          cy="50"
          r="40"
          className="loader-circle fill-none stroke-white"
        />
      </svg>
    </div>
  );
}
