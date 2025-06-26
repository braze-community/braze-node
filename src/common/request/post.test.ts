import { post, request, RequestMethod, ServerResponse } from '.'

jest.mock('./request')
const mockedRequest = jest.mocked(request)

describe('post', () => {
  const url = 'https://example.com/'
  const body = {}
  const data: ServerResponse = { message: 'success' }
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  beforeEach(() => {
    mockedRequest.mockClear().mockResolvedValueOnce(data)
  })

  it('calls request with url and body', async () => {
    expect(await post(url, body, {})).toBe(data)
    expect(mockedRequest).toHaveBeenCalledWith(url, body, {
      method: RequestMethod.POST,
    })
    expect(mockedRequest).toHaveBeenCalledTimes(1)
  })

  it('calls request with url, body, and options', async () => {
    expect(await post(url, body, options)).toBe(data)
    expect(mockedRequest).toHaveBeenCalledWith(url, body, {
      ...options,
      method: RequestMethod.POST,
    })
    expect(mockedRequest).toHaveBeenCalledTimes(1)
  })
})
