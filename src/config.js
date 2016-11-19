/* eslint no-process-env: 0 */
/* eslint no-console: 0 */
require('dotenv').config();

/**
 * @function debug
 * @param {string} val is to be printed.
 * @param {object} obj is to be concatenated to val
 * @example config.debug('listening to port', port);
 * @returns {value} a concatenated statement of val and obj printed to console
 */
exports.debug = (val, obj) => {

    console.log(val, obj);

};

// Port from env file
exports.PORT = process.env.PORT;
