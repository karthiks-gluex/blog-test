/** @type {import('prettier').Config} */
module.exports = {
  bracketSpacing: true,
  printWidth: 120,
  semi: false,
  singleAttributePerLine: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,

  plugins: [require.resolve("prettier-plugin-astro")],

  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
}
