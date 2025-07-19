import { type RemarkPlugin } from "@astrojs/markdown-remark"
import { toString } from "mdast-util-to-string"
import getReadingTime from "reading-time"

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree)
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes)

    if (typeof file?.data?.astro?.frontmatter !== "undefined") {
      file.data.astro.frontmatter.readingTime = readingTime
    }
  }
}
