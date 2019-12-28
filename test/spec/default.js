import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import neoluddite from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof neoluddite, 'function')
  },
  async 'calls package without error'() {
    await neoluddite()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await neoluddite({
      text,
    })
    ok(res, text)
  },
}

export default T