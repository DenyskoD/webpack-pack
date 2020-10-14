const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  

  return {
    mode: 'none',
    devtool: false,
    plugins: [

      new HTMLWebpackPlugin({
        template: './static/template.html',
        title: "WebPack",
        favicon: './static/favicon.ico'
      }),
    ],
  };
};