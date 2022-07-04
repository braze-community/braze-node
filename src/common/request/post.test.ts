import { post, request, RequestMethod } from '.'

jest.mock('./request')
const mockedRequest = jest.mocked(request)

describe('post', () => {
  const url = 'https://example.com/'
  const body = {}
  const data = {}
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  beforeEach(() => {
    mockedRequest.mockClear().mockResolvedValueOnce(data)
  })

  it('calls request with url and body', async () => {
    expect(await post(url, body)).toBe(data)
    expect(mockedRequest).toBeCalledWith(url, body, {
      method: RequestMethod.POST,
    })
    expect(mockedRequest).toBeCalledTimes(1)
  })

  it('calls request with url, body, and options', async () => {
    expect(await post(url, body, options)).toBe(data)
    expect(mockedRequest).toBeCalledWith(url, body, {
      ...options,
      method: RequestMethod.POST,
    })
    expect(mockedRequest).toBeCalledTimes(1)
  })
})
