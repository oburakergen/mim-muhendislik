module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    "import/no-extraneous-dependencies": "off",
    "strict": "off",
    "no-new": "off"
  },
  globals: {
    window: true,
    location: true,
    setTimeout: true,
    setInterval: true,
    clearTimeout: true,
    clearInterval: true,
    jQuery: true,
    $: true,
    ga: true,
    module: true,
    localStorage: true,
    sessionStorage: true,
    dataLayer: true,
    XMLHttpRequest: true,
    performance: true,
  }
};
