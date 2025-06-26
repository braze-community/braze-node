import { Braze } from '../Braze'
import { get } from '../common/request'
import type { CampaignsDetailsResponse } from './types'

jest.mock('../common/request/get')
const mockedGet = jest.mocked(get)

beforeEach(() => {
  jest.clearAllMocks()
})

describe('campaigns.details()', () => {
  const apiUrl = 'https://rest.iad-01.braze.com'
  const apiKey = 'apiKey'

  const braze = new Braze(apiUrl, apiKey)
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  }

  const response: CampaignsDetailsResponse = {
    message: 'success',
    created_at: '2023-04-20T08:20:00.000Z',
    updated_at: '2023-04-20T08:20:00.000Z',
    archived: true,
    draft: false,
    name: 'campaign name',
    description: 'campaign description',
    schedule_type: 'schedule type',
    channels: ['email'],
    first_sent: '2023-04-20T08:20:00.000Z',
    last_sent: '2023-04-20T08:20:00.000Z',
    tags: ['tag'],
    teams: ['team'],
    messages: [
      {
        message_variation_id: '1',
        channel: 'content_cards',
        name: 'Variation 1',
      },
      {
        message_variation_id: '2',
        channel: 'sms',
        name: 'Variation 1',
        body: 'payload body',
        from: '3',
        subscription_group_id: 'api_id',
      },
    ],
    conversion_behaviors: [
      {
        type: 'Clicks Email',
        window: 86400,
      },
      {
        type: 'Makes Specific Purchase',
        window: 86400,
        product: 'Feline Body Armor',
      },
      {
        type: 'Performs Custom Event',
        window: 86400,
        custom_event_name: 'Used Feline Body Armor',
      },
      {
        type: 'Upgrades App',
        window: 86400,
        app_ids: ['12345', '67890'],
      },
      {
        type: 'Starts Session',
        window: 86400,
        app_ids: null,
      },
    ],
  }

  it('calls GET /campaigns/details with required parameter', async () => {
    mockedGet.mockResolvedValueOnce(response)
    const params = {
      campaign_id: '1',
    }
    expect(await braze.campaigns.details(params)).toBe(response)
    expect(mockedGet).toHaveBeenCalledWith(`${apiUrl}/campaigns/details?campaign_id=1`, options)
    expect(mockedGet).toHaveBeenCalledTimes(1)
  })
})
