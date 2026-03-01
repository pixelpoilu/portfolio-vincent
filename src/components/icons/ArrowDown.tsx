import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export function ArrowDown({ width = 14, height = 14, ...props }: ArrowIconProps) {
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
        d="M7 2.5V11.5M7 11.5L4 8.5M7 11.5L10 8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
