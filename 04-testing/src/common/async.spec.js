const Ajax = require('./async')

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const res = await Ajax.echo('some data')
    expect(res).toBe('some data')
  })

  test('should return value with promise', () => {
    const d = '123'
    Ajax.echo('').then(data => {
      expect(d).toEqual('')
    })
  })
})