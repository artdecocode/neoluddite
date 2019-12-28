import neoluddite from '../src'

(async () => {
  const res = await neoluddite({
    text: 'example',
  })
  console.log(res)
})()