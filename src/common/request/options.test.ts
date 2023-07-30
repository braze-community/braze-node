import { buildOptions } from './options'

describe('buildOptions', () => {
  it('builds options with headers', () => {
    const apiKey = 'apiKey'
    expect(buildOptions({ apiKey })).toEqual({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    })
  })
})
