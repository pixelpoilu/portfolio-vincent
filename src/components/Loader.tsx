export default function Loader() {
  return (
    <div className="loader">
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          className="loader-circle"
        />
      </svg>
    </div>
  );
}