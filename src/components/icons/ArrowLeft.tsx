import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export function ArrowLeft({ width = 14, height = 14, ...props }: ArrowIconProps) {
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
        d="M11.5 7H2.5M2.5 7L5.5 4M2.5 7L5.5 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
