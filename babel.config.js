module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@core': './src/core',
          '@entities': './src/entities',
          '@providers': './src/providers',
          '@repositories': './src/repositories',
          '@usage': './src/usage',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
