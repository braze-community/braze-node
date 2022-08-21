import { get, request } from '.'

describe('get', () => {
  it('calls request', async () => {
    expect(get).toBe(request)
  })
})
