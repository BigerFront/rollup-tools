module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/env',
      {
        targets: {
          browsers: '> 0.5%, ie >= 10',
        },
        modules: false,
        spec: true,
        useBuiltIns: 'usage',
        forceAllTransforms: false,
        corejs: {
          version: 3,
          proposals: false,
        },
      },
    ],
  ]

  return {
    presets,
  }
}
