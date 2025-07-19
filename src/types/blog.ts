import { type AstroComponentFactory } from "astro/runtime/server/index.js"
import { type Tag } from "./tags"
import { type MetaData } from "./metadata"

export interface Blog {
  id: string

  slug: string
  permalink: string

  title: string
  excerpt?: string
  description?: string

  image?: ImageMetadata | string
  coverImage?: ImageMetadata | string // (default: <image>)

  content?: string
  Content?: AstroComponentFactory

  metadata?: MetaData
  category?: Tag
  tags?: Tag[]

  author?: string // (default: "GlueX")
  publishDate: Date
  updateDate?: Date
  readingTime?: number

  draft?: boolean
}

export interface BlogPost {
  slug: string
  data: {
    title: string
    excerpt?: string
    description?: string
    image?: string
    coverImage?: string
    author?: string
    publishDate: Date
    updateDate?: Date
    readingTime?: number
    draft?: boolean
    category?: Category
    tags?: Tag[]
  }
}

export interface Category {
  name: string
  slug: string
  color?: string
}

export interface ShareData {
  title: string
  url: string
  text?: string
}

export type SortOption = "newest" | "oldest" | "popular"
