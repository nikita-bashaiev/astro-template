/**
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  tailwindStylesheet: './src/styles/base.css',
  tailwindAttributes: ['classes'],
  tailwindFunctions: ['cn', 'tw', 'cva'],
};

export default config;
