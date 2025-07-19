import { type HTMLAttributes } from "astro/types"

export type ImageLayout = "fixed" | "constrained" | "fullWidth" | "cover" | "responsive" | "contained"

export interface ImageProps extends Omit<HTMLAttributes<"img">, "src"> {
  src?: string | ImageMetadata | null
  width?: string | number | null
  height?: string | number | null
  alt?: string | null
  loading?: "eager" | "lazy" | null
  decoding?: "sync" | "async" | "auto" | null
  style?: string
  srcset?: string | null
  sizes?: string | null
  fetchpriority?: "high" | "low" | "auto" | null

  layout?: ImageLayout
  widths?: number[] | null
  aspectRatio?: string | number | null
  objectPosition?: string

  format?: string
}
