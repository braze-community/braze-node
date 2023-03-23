import { buildParams } from './params'

describe('params', () => {
  it('should handle string', () => {
    const params = buildParams({ a: 'string' })
    expect(params.toString()).toEqual('a=string')
  })

  it('should handle number', () => {
    const params = buildParams({ b: 1 })
    expect(params.toString()).toEqual('b=1')
  })

  it('should handle boolean', () => {
    const params = buildParams({ a: true, b: false })
    expect(params.toString()).toEqual('a=true&b=false')
  })

  it('should handle undefined', () => {
    const params = buildParams({ a: undefined })
    expect(params.toString()).toEqual('')
  })

  it('should fail on anything else', () => {
    expect(() => buildParams({ a: [1] })).toThrowError('Unhandled param type for "a"')
  })
})
