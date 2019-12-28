import { c } from 'erte'

/**
 * Become part of Open Source anarchical movement and get payed for the value your packages create.
 * @param {!_neoluddite.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function neoluddite(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return
  console.log('neoluddite called with %s', c(text, 'yellow'))
  return text
}

/**
 * @typedef {import('..').Config} _neoluddite.Config
 */
