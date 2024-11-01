module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', "next/core-web-vitals", "next/typescript"], "next": "next/core-web-vitals", 
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "prettier/prettier": ["error", {endOfLine: "auto"}],
  },
}
