const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

/* Routes go here */
/* Example */ 
/* app.use('/route', routesFile); */

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static(`${__dirname}/dist`));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
  });
}
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Welcome to Orca! Magic happens on port ${PORT}!`);
});
