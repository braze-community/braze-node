import { Braze } from '../Braze'
import { get } from '../common/request'
import type { SegmentsDetailsResponse } from './types'

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

  const response: SegmentsDetailsResponse = {
    message: 'success',
    name: 'segment name',
    description: 'description',
    text_description: 'text description',
    tags: ['tag'],
    teams: ['team'],
    created_at: '2024-07-25T13:50:47Z',
    updated_at: '2024-07-25T13:50:47Z',
  }

  it('calls GET /segments/details with required param', async () => {
    mockedGet.mockResolvedValueOnce(response)
    const params = {
      segment_id: 'segment_api_identifier',
    }
    expect(await braze.segments.details(params)).toBe(response)
    expect(mockedGet).toBeCalledWith(
      `${apiUrl}/segments/details?segment_id=segment_api_identifier`,
      options,
    )
    expect(mockedGet).toBeCalledTimes(1)
  })
})
