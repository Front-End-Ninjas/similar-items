const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line import/no-extraneous-dependencies
const config = require('../webpack.config.js');
const app = require('./app');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));


app.listen(3000, () => console.log('LISTENING ---- PORT 3000')); // eslint-disable-line no-console
