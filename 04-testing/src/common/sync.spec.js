const Lodash = require('./sync')

// tdd 
// в начале тест, потом реализация, в итоге стопроцентное покрытие тестами
// подход медленный потому что неэффективный
describe('Lodash: compact', () => {
  let _ = new Lodash()
  let arr

  // hook и он будет вызываться перед каждым тестом
  beforeEach(() => {
    arr = [false, 42, 0, '', true, null, 'hi'] 
  })

  // еще варианты
  afterAll(() => {
    _ = new Lodash()
  })
  
  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should remove falsy values from array', () => {
    const res = [42, true, 'hi']
    // expect(_.compact(array)).toBe(res)
    expect(_.compact(arr)).toEqual(res)
  })
  
  test('should NOT contain falsy values', () => {
    const array = [false, 42, 0, '', true, null, 'hi']
    const res = [false, 0, '', null]
    expect(_.compact(arr)).not.toContain(false)
    expect(_.compact(arr)).not.toContain(0)
    expect(_.compact(arr)).not.toContain('')
    expect(_.compact(arr)).not.toContain(null)
  })
})