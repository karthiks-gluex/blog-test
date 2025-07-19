import { type RehypePlugin } from "@astrojs/markdown-remark"
import { visit } from "unist-util-visit"

export const lazyImagesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return

    visit(tree, "element", function (node) {
      if (node.tagName === "img") {
        node.properties.loading = "lazy"
      }
    })
  }
}
