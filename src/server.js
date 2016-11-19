const express = require('express');
const config = require('./config');
const PORT_DEFAULT = 3000;

const app = express();

// Connect clientside views
app.use(express.static('client/'));

const port = config.PORT || PORT_DEFAULT;

// Using express() tell server to listen to 'port'
const server = app.listen(port, () => {

    config.debug('listening to port:', port);

});

// Export server for other models to access
module.exports = server;
