import { buildParams } from './params'

describe('buildParams', () => {
  describe.each([undefined, null])('%p', (value) => {
    it('handles single', () => {
      const params = buildParams({ a: value })
      expect(params.toString()).toEqual('')
    })

    it('handles multiple', () => {
      const params = buildParams({ a: value, b: value })
      expect(params.toString()).toEqual('')
    })
  })

  describe('string', () => {
    it('handles single', () => {
      const params = buildParams({ a: 'string' })
      expect(params.toString()).toEqual('a=string')
    })

    it('handles multiple', () => {
      const params = buildParams({ a: 'a', b: '', c: 'c' })
      expect(params.toString()).toEqual('a=a&b=&c=c')
    })
  })

  describe('number', () => {
    it('handles single', () => {
      const params = buildParams({ b: 1 })
      expect(params.toString()).toEqual('b=1')
    })

    it('handles multiple', () => {
      const params = buildParams({ a: 0, b: 1 })
      expect(params.toString()).toEqual('a=0&b=1')
    })
  })

  describe('boolean', () => {
    it('handles single', () => {
      const params = buildParams({ b: false })
      expect(params.toString()).toEqual('b=false')
    })

    it('handles multiple', () => {
      const params = buildParams({ a: true, b: false })
      expect(params.toString()).toEqual('a=true&b=false')
    })
  })

  describe('array', () => {
    it('handles single', () => {
      const params = buildParams({ a: [1] })
      expect(params.toString()).toEqual('a=1')
    })

    it('handles multiple', () => {
      const params = buildParams({ a: [1, '2', true, undefined], b: ['foo', 'bar', null] })
      expect(params.toString()).toEqual('a=1&a=2&a=true&b=foo&b=bar')
    })
  })

  describe('error', () => {
    it.each([new Date(), {}, Symbol('symbol'), () => {}])('throws when value is %p', (value) => {
      expect(() => buildParams({ a: value })).toThrowError('Unhandled param type for key "a"')
    })
  })
})
