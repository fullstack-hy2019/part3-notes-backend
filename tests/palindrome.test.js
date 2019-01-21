const palindrom = require('../utils/for_testing').palindrom

test('palindrom of a', () => {
  const result = palindrom('a')

  expect(result).toBe('a')
})

test('palindrom of react', () => {
  const result = palindrom('react')

  expect(result).toBe('tcaer')
})

test('palindrom of saippuakauppias', () => {
  const result = palindrom('saippuakauppias')

  expect(result).toBe('saippuakauppias')
})