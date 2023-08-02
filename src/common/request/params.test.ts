import { buildParams } from './params'

describe('buildParams', () => {
  it('returns empty string when undefined', () => {
    expect(buildParams()).toBe('')
  })

  describe.each([undefined, null])('%p', (value) => {
    it('handles single', () => {
      expect(buildParams({ a: value })).toBe('')
    })

    it('handles multiple', () => {
      expect(buildParams({ a: value, b: value })).toBe('')
    })
  })

  describe('string', () => {
    it('handles single', () => {
      expect(buildParams({ a: 'string' })).toBe('a=string')
    })

    it('handles multiple', () => {
      expect(buildParams({ a: 'a', b: '', c: 'c' })).toBe('a=a&b=&c=c')
    })
  })

  describe('number', () => {
    it('handles single', () => {
      expect(buildParams({ b: 1 })).toBe('b=1')
    })

    it('handles multiple', () => {
      expect(buildParams({ a: 0, b: 1 })).toBe('a=0&b=1')
    })
  })

  describe('boolean', () => {
    it('handles single', () => {
      expect(buildParams({ b: false })).toBe('b=false')
    })

    it('handles multiple', () => {
      expect(buildParams({ a: true, b: false })).toBe('a=true&b=false')
    })
  })

  describe('array', () => {
    it('handles single', () => {
      expect(buildParams({ a: [1] })).toBe('a%5B%5D=1')
    })

    it('handles multiple', () => {
      expect(buildParams({ a: [1, '2', true, undefined], b: ['foo', 'bar', null] })).toBe(
        'a%5B%5D=1&a%5B%5D=2&a%5B%5D=true&b%5B%5D=foo&b%5B%5D=bar',
      )
    })
  })

  describe('error', () => {
    it.each([new Date(), {}, Symbol('symbol'), () => {}])('throws when value is %p', (value) => {
      expect(() => buildParams({ value })).toThrowError('Unhandled param type for key "value"')
    })
  })
})
