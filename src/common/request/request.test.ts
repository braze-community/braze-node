import type { Response } from 'node-fetch'
import fetch from 'node-fetch'

import { request, RequestMethod, ServerResponse } from '.'

jest.mock('node-fetch')
const mockedFetch = jest.mocked(fetch)

describe('request', () => {
  const url = 'https://example.com/'
  const body = {}
  const data: ServerResponse = { message: 'success' }
  const response = {
    json: jest.fn(),
    ok: true,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    mockedFetch.mockReturnValueOnce(response as unknown as Promise<Response>)
    response.json.mockResolvedValueOnce(data)
  })

  it('calls fetch with url', async () => {
    expect(await request(url)).toBe(data)
    expect(mockedFetch).toBeCalledWith(url, {
      body: undefined,
    })
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response.json).toBeCalledTimes(1)
  })

  it('calls fetch with url and body', async () => {
    expect(await request(url, body)).toBe(data)
    expect(mockedFetch).toBeCalledWith(url, {
      body: JSON.stringify(body),
    })
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response.json).toBeCalledTimes(1)
  })

  it('calls fetch with url, body, and options', async () => {
    const method = RequestMethod.POST
    expect(await request(url, body, { method })).toBe(data)
    expect(mockedFetch).toBeCalledWith(url, {
      body: JSON.stringify(body),
      method,
    })
    expect(mockedFetch).toBeCalledTimes(1)
    expect(response.json).toBeCalledTimes(1)
  })

  describe('error', () => {
    const dataError = {
      errors: ['error'],
      message: 'Internal Server Error',
    }
    const responseError = {
      json: jest.fn(),
      ok: false,
      status: 500,
    }

    beforeEach(() => {
      mockedFetch.mockReset().mockReturnValueOnce(responseError as unknown as Promise<Response>)
      responseError.json.mockResolvedValueOnce(dataError)
    })

    it('responds with error', async () => {
      const response = request(url, body)
      await expect(response).rejects.toBeInstanceOf(Error)
      await expect(response).rejects.toMatchObject(dataError)
      expect(mockedFetch).toBeCalledWith(url, {
        body: JSON.stringify(body),
      })
      expect(responseError.json).toBeCalledTimes(1)
    })
  })
})
