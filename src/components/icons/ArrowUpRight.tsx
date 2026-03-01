import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRight({ width = 14, height = 14, ...props }: ArrowIconProps) {
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
        d="M3 11L11 3M11 3H5.5M11 3V8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
