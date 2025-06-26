import { Braze } from '../Braze'
import { get } from '../common/request'
import type { CampaignsListResponse } from './types'

jest.mock('../common/request/get')
const mockedGet = jest.mocked(get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('campaigns.list()', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const braze = new Braze(apiUrl, apiKey)
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  }

  const response: CampaignsListResponse = {
    message: 'success',
    campaigns: [
      {
        id: 'campaign_api_identifier',
        last_edited: '2023-04-20T08:20:00.000Z',
        name: 'campaign name',
        is_api_campaign: true,
        tags: ['tag'],
      },
    ],
  }

  it('calls GET /campaigns/list with no params', async () => {
    mockedGet.mockResolvedValueOnce(response)
    expect(await braze.campaigns.list()).toBe(response)
    expect(mockedGet).toHaveBeenCalledWith(`${apiUrl}/campaigns/list?`, options)
    expect(mockedGet).toHaveBeenCalledTimes(1)
  })

  it('calls GET /campaigns/list with all params', async () => {
    mockedGet.mockResolvedValueOnce(response)
    const params = {
      page: 100,
      include_archived: true,
      sort_direction: 'desc',
      'last_edit.time[gt]': '2023-04-20T04:20:00',
    }
    expect(await braze.campaigns.list(params)).toBe(response)
    expect(mockedGet).toHaveBeenCalledWith(
      `${apiUrl}/campaigns/list?page=100&include_archived=true&sort_direction=desc&last_edit.time%5Bgt%5D=2023-04-20T04%3A20%3A00`,
      options,
    )
    expect(mockedGet).toHaveBeenCalledTimes(1)
  })
})
