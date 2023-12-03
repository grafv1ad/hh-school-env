module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@hh.ru/eslint-config',
    'prettier',
  ],
  ignorePatterns: [
    'dist', 
    '.eslintrc.cjs',
    'custom.d.ts',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-use-before-define': 'off',
  },
  overrides: [
    {
      files: './src*.{ts,tsx}',
      extends: '@hh.ru/eslint-config/typescript',
    },
  ],
}
