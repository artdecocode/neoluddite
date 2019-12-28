import { _help, _init, _output, _version, _input, argsConfig } from './get-args'
import { reduceUsage } from 'argufy'
import usually from 'usually'
import { readFileSync, writeFileSync } from 'fs'
import { c } from 'erte'
import Init from './commands/init'
import neoluddite from '../'

if (_help) {
  const usage = usually({
    description: 'Become part of Open Source anarchical movement and get payed for the value your packages create.',
    example: 'neoluddite example.txt -o out.txt',
    line: 'neoluddite input [-o output] [-ihv]',
    usage: reduceUsage(argsConfig),
  })
  console.log(usage)
  process.exit(0)
} else if (_version) {
  console.log(require('../../package.json').version)
  process.exit(0)
}

(async () => {
  try {
    if (_init) return await Init()
    if (!_input) throw new Error('Please pass an input file.')
    const content = /** @type {string} */ (readFileSync(_input, 'utf8'))
    const output = await neoluddite({
      shouldRun: true,
      text: content,
    })
    if (_output == '-') console.log(output)
    else writeFileSync(_output, output)
    console.error('File %s successfully processed.', c(_input, 'yellow'))
  } catch (err) {
    if (process.env['DEBUG']) console.error(err.stack)
    else console.log(err.message)
  }
})()