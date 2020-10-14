// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk'); // colorize console logs

// config
const getConfig = require('./webpack.config');

// constantns
const {HOST, PORT} = require('./constants');

const compiler = webpack(getConfig());

const server = new DevServer(compiler, {
  host: HOST,
  port: PORT,
  historyApiFallback: true,
  overlay: true,
  quiet: true,
  clientLogLevel: 'none',
  noInfo: true,
  after: (app) => {
    app.use(
      hot(compiler, {
        log: false,
      }),
    );
  },
});

server.listen(PORT, HOST, () => {
  console.log(
    `${chalk.greenBright('Server listening on')} ${chalk.blueBright(
      `http://${HOST}:${PORT}`,
      )}`,
  );
});

