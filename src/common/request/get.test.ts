import { get, request, ServerResponse } from '.'

jest.mock('./request')
const mockedRequest = jest.mocked(request)

describe('get', () => {
  const url = 'https://example.com/'
  const data: ServerResponse = { message: 'success' }
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  beforeEach(() => {
    mockedRequest.mockClear().mockResolvedValueOnce(data)
  })

  it('calls request with url', async () => {
    expect(await get(url, {})).toBe(data)
    expect(mockedRequest).toBeCalledWith(url, undefined, {})
    expect(mockedRequest).toBeCalledTimes(1)
  })

  it('calls request with url and options', async () => {
    expect(await get(url, options)).toBe(data)
    expect(mockedRequest).toBeCalledWith(url, undefined, options)
    expect(mockedRequest).toBeCalledTimes(1)
  })
})
