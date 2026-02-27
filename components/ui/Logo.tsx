export function Logo({
  size = 48,
  primary = "#F7F3EE",
  accent = "#C4A265",
  className = "",
}: {
  size?: number;
  primary?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SZ Monograma"
    >
      <path
        d="M74 26C74 26 66 14 50 14C34 14 24 26 24 38C24 50 34 56 50 60C66 64 76 70 76 82C76 94 66 106 50 106C34 106 26 96 26 96"
        stroke={primary}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42.4 31.7H57.2L42.4 88.7H57.2"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
