const path = require('path')

const tsconfig = path.resolve(__dirname, './tsconfig.json')

module.exports = {
  entry: {
    main: './main.ts'
  },

  output: {
    filename: '[name].js'
  },

  resolve: { extensions: [ '.ts', '.js' ] },

  module: {
    rules: [ { test: /\.ts$/, loader: 'ts-loader', options: { configFileName: tsconfig } } ]
  },

  devtool: 'source-map'
}
