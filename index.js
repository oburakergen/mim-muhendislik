module.exports = {
  extends: ['./lib/shared'].map(require.resolve),
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {},
};
