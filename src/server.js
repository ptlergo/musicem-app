const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const PORT_DEFAULT = 3000;
const port = config.PORT || PORT_DEFAULT;

const app = express();

// Set API Routes
app.use('/', require('./routes')(express));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));

// Allow cross origin access from any domains
app.use(cors());

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
