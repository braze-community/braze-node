import { Braze } from '../Braze'
import { get } from '../common/request'
import type { SegmentsAnalyticsResponse } from './types'

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

  const response: SegmentsAnalyticsResponse = {
    message: 'success',
    data: [
      {
        time: 'segment_api_identifier',
        size: 1234,
      },
    ],
  }

  it('calls GET /segments/data_series with required param', async () => {
    mockedGet.mockResolvedValueOnce(response)
    const params = {
      segment_id: 'segment_api_identifier',
      length: 10,
    }
    expect(await braze.segments.analytics(params)).toBe(response)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/segments/data_series?segment_id=segment_api_identifier&length=10`,
      options,
    )
    expect(mockedGet).toBeCalledTimes(1)
  })
})
