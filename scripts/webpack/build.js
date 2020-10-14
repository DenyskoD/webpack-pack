const webpack = require('webpack');
const chalk = require('chalk'); // colorize console logs

const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());



compiler.run((error,stats) => {
  if (error) {
    console.error(error.stack || error);

    if (error.details) {
      console.error(error.details);
    }

    return null;
  }

  const info = stats.toString({
    hash: true,
    colors: true,
    version: true,
    env: true,
    modules: false,
    entrypoints: false
  })

  console.log(chalk.greenBright("build completed!"));
  console.log(info);

  if (stats.hasErrors()) {
    console.log(chalk.redBright("Error!"));
  }
  if (stats.hasWarnings()) {
    console.log(chalk.yellowBright("Warning!"));
  }

});