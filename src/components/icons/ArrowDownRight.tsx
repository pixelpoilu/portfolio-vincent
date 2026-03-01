import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export function ArrowDownRight({ width = 14, height = 14, ...props }: ArrowIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 3L11 11M11 11H5.5M11 11V5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
