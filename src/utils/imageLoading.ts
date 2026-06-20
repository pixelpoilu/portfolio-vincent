export const priorityImageProps = {
  loading: "eager",
  decoding: "async",
  fetchpriority: "high",
} as const;

export const lazyImageProps = {
  loading: "lazy",
  decoding: "async",
} as const;
