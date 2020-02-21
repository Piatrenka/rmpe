const sum = require('./util')

// console.log(sum(40, 2))

test('add 40 + 2 to equal 42', () => {
  expect(sum(40, 2)).toBe(42)
})