import { Braze } from '../Braze'
import { get } from '../common/request'
import type { SegmentsListResponse } from './types'

jest.mock('../common/request/get')
const mockedGet = jest.mocked(get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('segments.list()', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const braze = new Braze(apiUrl, apiKey)
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  }

  const response: SegmentsListResponse = {
    message: 'success',
    segments: [
      {
        id: 'segment_api_identifier',
        name: 'segment name',
        analytics_tracking_enabled: true,
        tags: ['tag'],
      },
    ],
  }

  it('calls GET /segments/list with no params', async () => {
    mockedGet.mockResolvedValueOnce(response)
    expect(await braze.segments.list()).toBe(response)
    expect(mockedGet).toHaveBeenCalledWith(`${apiUrl}/segments/list?`, options)
    expect(mockedGet).toHaveBeenCalledTimes(1)
  })

  it('calls GET /segments/list with all params', async () => {
    mockedGet.mockResolvedValueOnce(response)
    const params = {
      page: 100,
      sort_direction: 'desc',
    }
    expect(await braze.segments.list(params)).toBe(response)
    expect(mockedGet).toHaveBeenCalledWith(
      `${apiUrl}/segments/list?page=100&sort_direction=desc`,
      options,
    )
    expect(mockedGet).toHaveBeenCalledTimes(1)
  })
})
