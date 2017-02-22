const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const PORT_DEFAULT = 3000;

const app = express();

// Allow cross origin access from any domains
app.use(cors());

// View Directory and View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render('index.html');
});

// Connect angularjs client side views
app.use(express.static(path.join(__dirname, '../client/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'false' }));

const port = config.PORT || PORT_DEFAULT;

// Using express() tell server to listen to 'port'
const server = app.listen(port, () => {
  config.debug('listening to port:', port);
});

// Export server for other models to access
module.exports = server;
