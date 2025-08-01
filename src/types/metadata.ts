export interface MetaData {
  title?: string
  description?: string

  ignoreTitleTemplate?: boolean
  canonical?: string
  robots?: MetaDataRobots

  openGraph?: MetaDataOpenGraph
  twitter?: MetaDataTwitter
}

export interface MetaDataRobots {
  index?: boolean
  follow?: boolean
}

export interface MetaDataImage {
  url: string
  width?: number
  height?: number
}

export interface MetaDataOpenGraph {
  url?: string
  siteName?: string
  images?: Array<MetaDataImage>
  locale?: string
  type?: string
}

export interface MetaDataTwitter {
  handle?: string
  site?: string
  cardType?: string
}
