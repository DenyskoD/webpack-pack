const {HotModuleReplacementPlugin} = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// constants
const {
  PROJECT_ROOT,
  SOURCE_DIRECTORY,
  BUILD_DIRECTORY,
} = require('./constants');

const cleanOptions = {
  verbose: true,
  root: PROJECT_ROOT,
}

module.exports = () => {
  

  return {
    mode: 'none',
    devtool: false,
    entry : ['webpack-hot-middleware/client?reload=true&quiet=true',
      SOURCE_DIRECTORY],
    output: {
      path: BUILD_DIRECTORY,
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [

      new HTMLWebpackPlugin({
        template: './static/template.html',
        title: "WebPack",
        favicon: './static/favicon.ico' 
      }),
      new CleanWebpackPlugin([BUILD_DIRECTORY], cleanOptions),
      new HotModuleReplacementPlugin();
    ],
  };
};