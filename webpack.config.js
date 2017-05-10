const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use:  [
     {
       loader: 'css-loader',
       options : { autoprefixer: false, sourceMap: true, importLoaders: 1 }
     },
     'postcss-loader'
   ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
};
