const Lodash = require('./sync')

// tdd 
// в начале тест, потом реализация, в итоге стопроцентное покрытие тестами
// подход медленный потому что неэффективный


let _ = new Lodash()

describe('Lodash: compact', () => {
  let arr
  let res

  // hook и он будет вызываться перед каждым тестом
  beforeEach(() => {
    arr = [false, 42, 0, '', true, null, 'hi'] 
    res = [42, true, "hi"];
  })

  // еще варианты
  afterAll(() => {
    _ = new Lodash()
  })
  
  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  // отдельная инициализация перед каждым тестом позволяет писать тесты, которые могут модифицировать тестовые данные
  test('should working array be editable', () => {
    // способ добавления элементов в массив с помощью другого массива
    arr.push(...['lo', 'by'])
    expect(_.compact(arr)).toContain('lo')
    expect(_.compact(arr)).toContain('by')
  })

  test('should remove falsy values from array', () => {
    // const res = [42, true, 'hi']
    // expect(_.compact(array)).toBe(res)   // Такой вариант не прокатывает в случае массива
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

describe('Lodash: groubBy', () => {
  test('should be defiend', () => {
    expect(_.groupBy).toBeDefined()
  })

  test('should group array items by Math.floor', () => {
    const arr = [2.2, 2.4, 4.2, 3.1]
    const res = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(res)
  })

  test('should group array items by length', () => {
    const arr = ['one', 'three', 'two']
    const res = {
      5: ['three'],
      3: ['one', 'two']
    }
    expect(_.groupBy(arr, 'length')).toEqual(res)
  })

  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })  
})