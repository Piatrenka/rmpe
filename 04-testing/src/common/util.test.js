const sum = require('./util')

// console.log(sum(40, 2))

test('Sum should return sum of two values', () => {
  expect(sum(40, 2)).toBe(42)
  expect(sum(40, 2)).toEqual(42)
})

test('Sum should return value correctly comparing to other', () => {
  expect(sum(3, 3)).toBeGreaterThan(5);
  expect(sum(3, 3)).toBeGreaterThanOrEqual(5);
  expect(sum(3, 3)).toBeLessThan(7);
  expect(sum(3, 3)).toBeLessThanOrEqual(6);
})

test('Sum should sum 2 float values correctly', () => {
  
  // Вернет ошибку теста, потому что арифметика действительныч чисел работает так себе 
  // expect(sum(0.1, 0.2)).toBe(0.3)
  
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
})