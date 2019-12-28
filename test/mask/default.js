import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import neoluddite from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await neoluddite({
      text: this.input,
    })
    return res
  },
  context: Context,
})