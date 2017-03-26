const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config');

const PORT_DEFAULT = 3000;
const port = config.PORT || PORT_DEFAULT;

const app = express();
const apiRoutes = require('./routes')(express);

// Set API Routes
app.use('/', apiRoutes);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));

// Set headers to be able to conduct karma tests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authrization');
  next();
});

// Connect angularjs client side views
app.use(express.static(path.join(__dirname, '../client/')));

// CSide view directory set and view engine set
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// All URLs grabbed from cside directory
app.get('*', (req, res) => {
  res.render('index.html');
});

// Node server start
exports.server = app.listen(port, () => {
  config.debug('listening to port:', port);
});
