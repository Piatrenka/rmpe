const { sum, nativeNull } = require('./util')

// console.log(sum(40, 2))

describe('Sum function: ', () => {

  test('Should return sum of two values', () => {
    expect(sum(40, 2)).toBe(42)
    expect(sum(40, 2)).toEqual(42)
  })
  
  test('Should return value correctly comparing to other', () => {
    expect(sum(3, 3)).toBeGreaterThan(5);
    expect(sum(3, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(3, 3)).toBeLessThan(7);
    expect(sum(3, 3)).toBeLessThanOrEqual(6);
  })
  
  test('Should sum 2 float values correctly', () => {
    // Вернет ошибку теста, потому что арифметика действительныч чисел работает так себе 
    // expect(sum(0.1, 0.2)).toBe(0.3)
    
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })

})

describe('Native null function: ', () => {
  test('should return null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy() // не проходит проверку if undefined, null, 0, ''
    expect(nativeNull()).toBeDefined() 
    // реверсивные значения
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).not.toBeUndefined()
  })
  
})
