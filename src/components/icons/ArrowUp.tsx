import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export function ArrowUp({ width = 14, height = 14, ...props }: ArrowIconProps) {
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
        d="M7 11.5V2.5M7 2.5L4 5.5M7 2.5L10 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
