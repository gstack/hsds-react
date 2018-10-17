const path = require('path')
const paths = require('../config/paths')
const harvester = require('seed-harvester')
const includePaths = harvester(['./src/scss'])

module.exports = (baseConfig, env, config) => {
  // SCSS
  config.module.rules.push({
    test: /\.scss$/,
    include: paths.appSrc,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths,
        },
      },
    ],
  })
  config.resolve.extensions.push('.scss')

  return config
}
