const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line import/no-extraneous-dependencies
const config = require('../webpack.config.js');
const app = require('./app');
const client = require('../db/pgClient');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

client.connect();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`LISTENING ---- PORT ${port}`)); // eslint-disable-line no-console
