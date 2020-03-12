const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    include: path.resolve(appDirectory, 'src'),
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
              },
            },
          },
        ],
      ],
    },
  })

  return config
}
