export interface ShareOptions {
  title: string
  url: string
  text?: string
}

export function getTwitterShareUrl({ title, url, text }: ShareOptions): string {
  const params = new URLSearchParams({
    text: text || title,
    url: url,
    via: "GlueXProtocol",
  })
  return `https://twitter.com/intent/tweet?${params.toString()}`
}

export function getLinkedInShareUrl({ title, url }: ShareOptions): string {
  const params = new URLSearchParams({
    mini: "true",
    url: url,
    title: title,
  })
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
}

export function getFacebookShareUrl({ url }: ShareOptions): string {
  const params = new URLSearchParams({
    u: url,
  })
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`
}

export function getTelegramShareUrl({ title, url }: ShareOptions): string {
  const params = new URLSearchParams({
    url: url,
    text: title,
  })
  return `https://t.me/share/url?${params.toString()}`
}

export function getWhatsAppShareUrl({ title, url }: ShareOptions): string {
  const text = `${title} ${url}`
  const params = new URLSearchParams({
    text: text,
  })
  return `https://wa.me/?${params.toString()}`
}
