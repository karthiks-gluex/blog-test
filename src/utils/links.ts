import { BASE_PATHNAME } from "~/config"
import { trimSlash } from "./string"

export const getAsset = (path: string): string => {
  return (
    "/" +
    [BASE_PATHNAME, path]
      .map((el) => trimSlash(el))
      .filter((el) => !!el)
      .join("/")
  )
}
