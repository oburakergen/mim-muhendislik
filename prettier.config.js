module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  overrides: [
    {
      files: '.editorconfig',
      options: { parser: 'yaml' },
    },
    {
      files: 'LICENSE',
      options: { parser: 'markdown' },
    },
  ],
};
