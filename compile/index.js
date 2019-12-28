const { _neoluddite } = require('./neoluddite')

/**
 * Become part of Open Source anarchical movement and get payed for the value your packages create.
 * @param {!_neoluddite.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function neoluddite(config) {
  return _neoluddite(config)
}

module.exports = neoluddite

/* typal types/index.xml namespace */
/**
 * @typedef {_neoluddite.Config} Config `＠record` Options for the program.
 * @typedef {Object} _neoluddite.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
